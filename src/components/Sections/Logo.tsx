import Image from 'next/image';
import {memo} from 'react';

import logoImage from './images/andre_salvador_logo.png';

const Logo = memo(() => {
  return (
    <div className="logo h-5 w-5">
      <Image alt="logo" className="h-full w-full object-contain" src={logoImage} />
    </div>
  );
});

Logo.displayName = 'Logo';

export default Logo;
