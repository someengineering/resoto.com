import type { Author } from '@docusaurus/plugin-content-blog';

export const getImage = ({
  title,
  metadata,
  authors,
}: {
  title: string;
  metadata?: string;
  authors?: Author[];
}): string => {
  // OG image generator currently only supports one author
  const author = authors?.length
    ? authors.find((a) => a.name && a.imageURL)
    : null;

  if (title) {
    return `https://og.some.engineering/api/image?theme=resoto&darkMode=0&title=${encodeURIComponent(
      title
    )}${metadata ? `&metadata=${encodeURIComponent(metadata)}` : ''}${
      author
        ? `&authorName=${encodeURIComponent(
            author.name
          )}&authorImage=${encodeURIComponent(author.imageURL)}}${
            author.title
              ? `&authorTitle=${encodeURIComponent(author.title)}`
              : ''
          }`
        : ''
    }`;
  }

  return 'https://og.some.engineering/api/image?theme=resoto&darkMode=0&title=%20&metadata=by%20Some%20Engineering%20Inc.';
};
