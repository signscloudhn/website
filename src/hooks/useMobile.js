
import React from 'react';

function useMobile(size) {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

  if (windowWidth <= size) {
    return true;
  }
  return false;
};


export { useMobile };