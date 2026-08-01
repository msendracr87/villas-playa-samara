import { useEffect } from "react";

const defaultDescription =
  "Villas Playa Sámara — beachfront stays in Sámara, Costa Rica.";

export function usePageMetadata(title: string, description = defaultDescription) {
  useEffect(() => {
    document.title = title;

    const descriptionElement = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previousDescription = descriptionElement?.content;

    if (descriptionElement) {
      descriptionElement.content = description;
    }

    return () => {
      if (descriptionElement && previousDescription) {
        descriptionElement.content = previousDescription;
      }
    };
  }, [description, title]);
}
