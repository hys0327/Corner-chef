//rafce
import React, { useState, useEffect } from 'react';
import MobileHeader from '../components/mobile/MobileHeader';
import DesktopHeader from '../components/desktop/DesktopHeader';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
