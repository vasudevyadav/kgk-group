import React from 'react';

const YoutubeVideoModal = ({ youtubeId, onClose }) => {
  return (
    <div
      className="fixed z-[9999] top-0 left-0 w-full h-screen min-h-screen flex flex-col overflow-auto px-[35px] box-border bg-black"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* Close Button */}
      <button
        aria-label="Close Video"
        onClick={onClose}
        className="absolute z-[2] top-[35px] right-[35px] w-[40px] h-auto cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="29.07" height="29.07" viewBox="0 0 29.07 29.07">
          <g fill="none" stroke="#fff">
            <path d="M28.71.35L.35 28.72M28.71 28.71L.35.35" />
          </g>
        </svg>
      </button>

      {/* Video Wrapper */}
      <div className="flex-grow flex items-center justify-center">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1&rel=0`}
          title="YouTube video player"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full max-w-[900px] h-[56.25vw] max-h-[506px]"
        />
      </div>
    </div>
  );
};

export default YoutubeVideoModal;
