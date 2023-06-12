import 'asciinema-player/dist/bundle/asciinema-player.css';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';

type AsciinemaPlayerProps = {
  src: string;
  className?: string;
  cols?: number;
  rows?: number;
  autoPlay?: boolean;
  preload?: boolean;
  loop?: boolean | number;
  startAt?: number | string;
  speed?: number;
  idleTimeLimit?: number;
  theme?: string;
  poster?: string;
  fit?: 'width' | 'height' | 'both';
  controls?: boolean | 'auto';
  pauseOnMarkers?: boolean;
};

export default function AsciinemaPlayer({
  src,
  className,
  ...asciinemaOptions
}: AsciinemaPlayerProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const AsciinemaPlayerLibrary = require('asciinema-player');

    AsciinemaPlayerLibrary.create(src, ref.current, {
      ...asciinemaOptions,
      terminalFontFamily: 'var(--ifm-font-family-monospace)',
    });
  }, [src, asciinemaOptions]);

  return <div ref={ref} className={clsx('video-container', className)} />;
}
