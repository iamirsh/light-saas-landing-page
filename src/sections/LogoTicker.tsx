import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import celestialLogo from '@/assets/logo-celestial.png';
import echoLogo from '@/assets/logo-echo.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';

export const LogoTicker = () => {
  return <div className='py-8 md:py-12 bg-white'>
    <div className="container">
      <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
        <div className='flex gap-14 flex-none'>
          <Image className='logo-ticker-image' src={acmeLogo} alt='Acme Logo' />
          <Image className='logo-ticker-image' src={quantumLogo} alt='Quantum Logo' />
          <Image className='logo-ticker-image' src={celestialLogo} alt='Celestial Logo' />
          <Image className='logo-ticker-image' src={echoLogo} alt='Echo Logo' />
          <Image className='logo-ticker-image' src={pulseLogo} alt='Pulse Logo' />
          <Image className='logo-ticker-image' src={apexLogo} alt='Apex Logo' />
        </div>
      </div>
    </div>
  </div>;
};
