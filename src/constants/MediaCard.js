import React from 'react';

const MediaCard = ({ mediaType, src, alt }) => {
  return (
    <div className="media-card">
      {mediaType === 'image' ? (
        <img  className="w-full h-60 object-cover duration-300 cursor-pointer rounded-lg" src={src} alt={alt} />
      ) : (
        <video  className="w-full h-60 object-cover duration-300 cursor-pointer rounded-lg" controls>
          <source src={src} type="video/mp4" />

        </video>
      )}
    </div>
  );
};

export default MediaCard;
