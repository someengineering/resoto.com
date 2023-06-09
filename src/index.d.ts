declare module '*.webp';
declare module '*.lottie';

declare namespace JSX {
  interface IntrinsicElements {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    'dotlottie-player': any;
  }
}
