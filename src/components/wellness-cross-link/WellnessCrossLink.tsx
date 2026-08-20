import "./wellness-cross-link.css";

type WellnessCrossLinkProps = {
  className: string;
  imageSmall: string;
  imageLarge: string;
  imageLargeWidth: number;
  primaryHref: string;
  primaryLabel: string;
};

export function WellnessCrossLink({
  className,
  imageSmall,
  imageLarge,
  imageLargeWidth,
  primaryHref,
  primaryLabel,
}: WellnessCrossLinkProps) {
  return (
    <section
      className={`wellness-cross-link ${className}`}
      aria-label="Continue exploring wellness"
    >
      <img
        className="wellness-cross-link__image"
        src={imageLarge}
        srcSet={`${imageSmall} 960w, ${imageLarge} ${imageLargeWidth}w`}
        sizes="100vw"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className="wellness-cross-link__shade" aria-hidden="true" />

      <nav
        className="content-wrap wellness-cross-link__links"
        aria-label="More wellness options"
        data-wellness-motion="reveal"
      >
        <a href={primaryHref}>
          {primaryLabel}
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_forward
          </span>
        </a>
        <a href="/wellness">
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_back
          </span>
          All wellness
        </a>
      </nav>
    </section>
  );
}
