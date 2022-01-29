import { useEffect } from 'react';

export default function ApiPage(): JSX.Element {
  useEffect(() => {
    window.location.href = 'https://resoto.com/docs/reference/core-api/';
  }, []);

  return null;
}
