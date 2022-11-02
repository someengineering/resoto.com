export const getImage = (title: string): string => {
  if (title) {
    return `https://resoto-og-image.vercel.app/${encodeURIComponent(
      title
    )}.png`;
  }

  return 'https://resoto-og-image.vercel.app/Cloud%20infrastructure%20intelligence%20and%20automation%20for%20**humans**.png?md=1';
};
