import logo from '@/assets/logosaas.png';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedin from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';
import Image from 'next/image';
import { motion } from "motion/react"

export const Footer = () => {
  return <footer className="bg-black text-[#BCBCBC] py-10 text-sm text-center">
    <div className="container">
      <div className='inline-flex relative before:top-2 before:bottom-0 before:blur before:content-[""] before:h-full before:w-full before:absolute before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]'>
        <Image   src={logo} alt='logo' height={40} className='relative'/>
      </div>

      <nav className='flex flex-col md:flex-row md:justify-center mt-6 gap-6'>
        <a href='#'>About</a>
        <a href='#'>Features</a>
        <a href='#'>Customers</a>
        <a href='#'>Pricing</a>
        <a href='#'>Help</a>
        <a href='#'>Career</a>
      </nav>
      <div className="flex justify-center gap-6 mt-6">
        <SocialX />
        <SocialInsta />
        <SocialLinkedin />
        <SocialPin />
        <SocialYoutube />
      </div>
      
      <p className='mt-6'>
        &copy; 2025 Irshad Ahmad, All rights reserved.
      </p>
    </div>

  </footer>
};
