import ArrowRight from '@/assets/arrow-right.svg'
import logo from '@/assets/logosaas.png'
import Image from 'next/image'
import Menu from '@/assets/menu.svg'

export const Navbar = () => {
  return <header className='sticky top-0'>

    <div className='flex justify-center items-center py-3 gap-3 bg-black text-white text-sm '>
      <p className="hidden md:block text-sm text-white/60 tracking-tighter">Streamline your workflow and boost your productivity.</p>
      <div className='inline-flex items-center gap-1'>
        <p className="text-sm tracking-tighter text-gray-300">Get started for free</p>
        <ArrowRight className="text-white h-6 w-4 inline-flex justify-center items-center" />
      </div>
    </div>

    <div className='py-5'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <Image src={logo} alt="logo" height={40} width={40} />
          <Menu className="md:hidden h-5 w-5" />
          <nav className='hidden md:flex gap-6 items-center text-black/60 '>
            <a href='#'>About</a>
            <a href='#'>Features</a>
            <a href='#'>Customers</a>
            <a href='#'>Updates</a>
            <a href='#'>Help</a>
            <button className='bg-black text-sm text-white rounded-lg font-medium py-2 px-4 inline-flex items-center justify-center tracking-tight'>Get for free</button>
          </nav>
        </div>
      </div>



    </div>
  </header>;
};
