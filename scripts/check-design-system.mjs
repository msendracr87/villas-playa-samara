import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const sourceRoot = path.join(projectRoot, "src");
const allowedHeadingRoles = [
  "section-title",
  "subsection-title",
  "card-title",
  "brand-title",
];
const approvedBreakpoints = new Set([
  430,
  520,
  620,
  760,
  820,
  900,
  980,
  1080,
  1120,
]);
const errors = [];

function walk(directory, extension) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return walk(entryPath, extension);
    }

    return entry.name.endsWith(extension) ? [entryPath] : [];
  });
}

function relative(file) {
  return path.relative(projectRoot, file);
}

for (const file of walk(path.join(sourceRoot, "components"), ".tsx")) {
  if (file.includes(`${path.sep}presentation${path.sep}`)) {
    continue;
  }

  const source = fs.readFileSync(file, "utf8");

  for (const match of source.matchAll(/<h2\b([\s\S]*?)>/g)) {
    const openingTag = match[0];
    const hasRole = allowedHeadingRoles.some((role) => openingTag.includes(role));

    if (!hasRole) {
      const line = source.slice(0, match.index).split("\n").length;
      errors.push(
        `${relative(file)}:${line} h2 elements must use a documented heading role`,
      );
    }
  }
}

for (const file of walk(sourceRoot, ".css")) {
  const source = fs.readFileSync(file, "utf8");

  for (const match of source.matchAll(/@media\s*\((?:max|min)-width:\s*(\d+)px\)/g)) {
    const breakpoint = Number(match[1]);

    if (!approvedBreakpoints.has(breakpoint) && breakpoint !== 981) {
      const line = source.slice(0, match.index).split("\n").length;
      errors.push(
        `${relative(file)}:${line} uses unapproved ${breakpoint}px breakpoint`,
      );
    }
  }
}

const globalStyles = fs.readFileSync(
  path.join(sourceRoot, "styles", "global.css"),
  "utf8",
);

if (!globalStyles.includes("--type-section-title: clamp(1.4rem, 4.1vw, 4rem);")) {
  errors.push("src/styles/global.css must define the approved section-title scale");
}

if (errors.length > 0) {
  console.error("Design-system check failed:\n");
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log("Design-system check passed.");
