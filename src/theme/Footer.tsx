import OriginalFooter from '@theme-original/Footer';
import React from 'react';

export default process.env.NODE_ENV == 'development'
  ? OriginalFooter
  : function Footer(props) {
      return (
        <>
          <img
            src="https://static.scarf.sh/a.png?x-pxid=3b6ccd5c-8a2a-4bf3-94a3-e366b88342d8"
            alt=""
            style={{ height: '1px', width: '1px' }}
          />
          <OriginalFooter {...props} />
        </>
      );
    };
