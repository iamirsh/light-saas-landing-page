import ArrowRight from '@/assets/arrow-right.svg';
import CogImage from '@/assets/cog.png';
import cylinder from '@/assets/cylinder.png';
import noodleImage from '@/assets/noodle.png';
import Image from 'next/image';

export const Hero = () => {
  return <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
    <div className="container">
      <div className="md:flex items-center">
        <div className='md:w-[478px]'>
          <div className="text-sm inline-flex border border-[#222]/10 py-1 px-3 rounded-lg">
            Version 2.0 is here
          </div>
          <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>Pathway to productivity</h1>
          <p className='text-xl text-[#010D3E] tracking-tight mt-6'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successs.</p>
          <div className='flex gap-1 items-center mt-[30px]'>
            <button className='btn btn-primary'>Get for free</button>
            <button className='btn btn-text gap-1'><span>Learn More</span>
              <ArrowRight className="h-5 w-5 " />
            </button>
          </div>
        </div>
        <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
          <Image src={CogImage} alt='Cog image' className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0' />
          <Image src={cylinder} alt='Cylinder image' width={220} height={220} className='hidden md:block -top-5 -left-32 md:absolute' />
          <Image src={noodleImage} alt='Noodle image' width={220} className='hidden lg:block top-[524px] left-[448px] md:absolute rotate-[30deg]' />
        </div>
      </div>

    </div>
  </section>;
};
