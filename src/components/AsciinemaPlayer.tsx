import BrowserOnly from '@docusaurus/BrowserOnly';
import 'asciinema-player/dist/bundle/asciinema-player.css';
import React, { useEffect, useRef } from 'react';

type AsciinemaPlayerProps = {
  src: string;
  className?: string;
  cols?: string;
  rows?: string;
  autoPlay?: boolean;
  preload?: boolean;
  loop?: boolean | number;
  startAt?: number | string;
  speed?: number;
  idleTimeLimit?: number;
  theme?: string;
  poster?: string;
  fit?: string;
  fontSize?: string;
};

export default function AsciinemaPlayer({
  src,
  className,
  ...asciinemaOptions
}: AsciinemaPlayerProps): JSX.Element {
  return (
    <BrowserOnly>
      {() => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const AsciinemaPlayerLibrary = require('asciinema-player');
        const ref = useRef<HTMLDivElement>(null);

        useEffect(() => {
          const currentRef = ref.current;

          AsciinemaPlayerLibrary.create(src, currentRef, {
            ...asciinemaOptions,
            terminalFontFamily: 'var(--ifm-font-family-monospace)',
          });
        }, []);

        return (
          <div
            ref={ref}
            className={`video-container shadow--tl ${className ?? ''} ${
              asciinemaOptions.autoPlay && asciinemaOptions.loop
                ? 'noControls'
                : ''
            }`}
          />
        );
      }}
    </BrowserOnly>
  );
}
