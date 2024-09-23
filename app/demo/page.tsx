'use client';
import { useEffect } from 'react';

const StorylaneEmbed = () => {
  useEffect(() => {
    // Dynamically add the Storylane script to the document
    const script = document.createElement('script');
    script.src = 'https://js.storylane.io/js/v2/storylane.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="sl-embed"
        style={{
          position: 'relative',
          paddingBottom: 'calc(56.68% + 25px)',
          width: '100%',
          height: 0,
          transform: 'scale(1)',
        }}
      >
        <iframe
          loading="lazy"
          className="sl-demo"
          src="https://app.storylane.io/demo/sbcbg89jire3?embed=inline"
          name="sl-embed"
          allow="fullscreen"
          allowFullScreen
          width={'100%'}
          height={'100%'}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%!important',
            height: '100%!important',
            border: '1px solid rgba(63,95,172,0.35)',
            boxShadow: '0px 0px 18px rgba(26, 19, 72, 0.15)',
            borderRadius: '10px',
            boxSizing: 'border-box',
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default StorylaneEmbed;
