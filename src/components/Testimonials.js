import React from 'react';

const VocalVideo = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px auto' }}>
      <h1>Testimonials</h1>
      <p>
        Check out what our customers have to say about us:
      </p>
      <a
        href="https://vocalvideo.com/c/girish-traders"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '16px',
        }}
      >
        View Testimonials
      </a>
    </div>
  );
};

export default VocalVideo;
