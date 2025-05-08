import { Button } from '@/components/ui/button'
import Link from 'next/link'
import MobileNavbar from './MobileNavbar'
import NavBar from './Navbar'

const Header = () => {
  return (
    // <div className="mx-auto p-4 justify-between md:items-center md:p-8 md:flex md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
    //   <Link href="/" className="text-center text-2xl md:text-left">
    //     <motion.div whileHover={{ scale: 1.2 }}>Vu Nguyen</motion.div>
    //   </Link>
    //   <div className="flex justify-center space-x-8 mt-4 md:mt-0">
    //     {ProfileSocial.map((item) => (
    //       <motion.a
    //         target="_blank"
    //         href={item.href}
    //         className="border p-2 rounded-full hover:cursor-pointer"
    //         key={item.key}
    //         whileHover={{ scale: 1.4 }}
    //       >
    //         {item.icon}
    //       </motion.a>
    //     ))}
    //   </div>
    // </div>
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            Trey<span className='text-accent'>.</span>
          </h1>
        </Link>
        <div className='hidden xl:flex items-center gap-8'>
          <NavBar />
          <Link href='/contact'>
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className='xl:hidden'>
          <MobileNavbar />
        </div>
      </div>
    </header>
  )
}

export default Header
