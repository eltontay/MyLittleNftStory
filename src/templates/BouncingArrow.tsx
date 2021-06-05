import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

function BouncingArrow() {
  return (
    <div className="flex justify-center -mt-14 mb-8 cursor-pointer point-events-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 animate-bounce w-6 h-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" />
      </svg>
      <RouterLink to="/HeroLiveAuction" />
    </div>
  );
}

export default BouncingArrow;
