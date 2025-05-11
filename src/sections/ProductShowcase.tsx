import productImage from '@/assets/product-image.png';
import Image from 'next/image';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';

export const ProductShowcase = () => {
  return <section className='py-24 md:pt-5 md:pb-10 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip'>
    <div className="container">
      <div className='section-heading'>
        <div className='flex justify-center'>
          <div className='tag'>Boost your productivity</div>
        </div>
        <h2 className='section-title mt-5'>A more effective way to track progress</h2>
        <p className='section-description mt-5'>Effortlessly turn your ideas into a fully functional responsive, SaaS website in just minutes with this template.</p>
      </div>

      <div className='relative'>
        <Image src={productImage} alt='Product image' className='mt-10 ' />
        <Image src={pyramidImage} height={262}  width={262} alt='Pyramid image' className='hidden md:block absolute -top-32 -right-36 ' />
        <Image src={tubeImage} height={248} alt='Tube image' className='hidden md:block absolute bottom-24 -left-36 ' />
      </div>
    </div>
  </section>;
};
