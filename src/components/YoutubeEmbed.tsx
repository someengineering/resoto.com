import clsx from 'clsx';
import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

type YoutubeEmbedProps = {
  id: string;
  title: string;
  className?: string;
};

export default function YoutubeEmbed({
  id,
  title,
  className,
}: YoutubeEmbedProps): JSX.Element {
  return (
    <div className={clsx('video-container', className)}>
      <LiteYouTubeEmbed
        id={id}
        title={title}
        params="autoplay=1&rel=0"
        poster="maxresdefault"
        webp
      />
    </div>
  );
}
