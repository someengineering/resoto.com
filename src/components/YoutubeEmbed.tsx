import Head from '@docusaurus/Head';
import clsx from 'clsx';
import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

type YoutubeEmbedProps = {
  id: string;
  title: string;
  className?: string;
  date?: string;
  description?: string;
};

export default function YoutubeEmbed({
  id,
  title,
  className,
  date,
  description,
}: YoutubeEmbedProps): JSX.Element {
  return (
    <>
      {date && (
        <Head>
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: title,
              thumbnailUrl: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
              uploadDate: date.split('T', 1)[0],
              contentUrl: `https://youtube.com/watch?v=${id}`,
              embedUrl: `https://youtube.com/embed/${id}`,
              ...(description ? { description } : null),
              publisher: {
                '@type': 'Organization',
                name: 'Some Engineering Inc.',
                url: 'https://some.engineering',
              },
            })}
          </script>
        </Head>
      )}
      <div className={clsx('video-container', className)}>
        <LiteYouTubeEmbed
          id={id}
          title={title}
          params="autoplay=1&rel=0"
          poster="maxresdefault"
          webp
        />
      </div>
    </>
  );
}
