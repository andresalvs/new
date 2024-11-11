// components/Loading.tsx
import { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);

  // Trigger fade-out effect after the minimum duration
  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setFadeOut(true), 4000);
    return () => clearTimeout(fadeOutTimer);
  }, []);

  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loading;
