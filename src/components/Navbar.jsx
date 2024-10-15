import { useState } from 'react';
import { motion } from 'framer-motion';
import { Grip, Codesandbox } from 'lucide-react';


function Navbar() {
  const [mouseHover, setMouseHover] = useState("");



  return (
    <nav className='relative flex justify-between items-center md:px-8 h-[10vh] w-full text-white bg-black'>
      <div className='w-1/2 h-full flex items-center gap-10'>
        {/* Logo */}
        <div className="logo px-4 md:px-0 flex justify-center items-center">
          <Codesandbox className='w-11 h-10' strokeWidth={1.2} />
        </div>

        {/* Navigation Links */}
        <ul className='hidden md:flex gap-10 h-full items-center'>
          <li
            onMouseEnter={() => setMouseHover("Home")}
            onMouseLeave={() => setMouseHover(null)}
            className='h-full flex items-center px-2 hover:cursor-pointer'
          >
            Home
          </li>

          {/* Dropdown Menu */}
          {mouseHover === "Home" && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ height: 200, opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className=' flex flex-col absolute z-10 p-4 top-16 left-22 w-48 gap-5 bg-black text-white'
              onMouseEnter={() => setMouseHover("Home")}
              onMouseLeave={() => setMouseHover(null)}
            >
              <li className='hover:cursor-pointer'>left home</li>
              <li className=' hover:cursor-pointer'>slider </li>
              <li className=' hover:cursor-pointer'>right </li>
              <li className=' hover:cursor-pointer'>bottom</li>
            </motion.ul>
          )}

          {/* Other Menu Items */}
          <li onMouseEnter={() => setMouseHover("About")}
            onMouseLeave={() => setMouseHover(null)}
            className='h-full w-1/2 flex items-center px-2 hover:cursor-pointer'>Property</li>
          {/* Dropdown Menu */}
          {mouseHover === "About" && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ height: 200, opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className=' flex flex-col absolute z-10 p-4 top-16 left-52 w-48 gap-5 bg-black text-white'
              onMouseEnter={() => setMouseHover("About")}
              onMouseLeave={() => setMouseHover(null)}
            >
              <li className='hover:cursor-pointer'>Property List</li>
              <li className=' hover:cursor-pointer'>Property Map </li>
              <li className=' hover:cursor-pointer'>Apartment Slider</li>
              <li className=' hover:cursor-pointer'>Apartment Single</li>
            </motion.ul>
          )}


          <li onMouseEnter={() => setMouseHover("Services")}
            onMouseLeave={() => setMouseHover(null)}
            className='h-full flex items-center px-2 hover:cursor-pointer'>Pages</li>
          {/* Dropdown Menu */}
          {mouseHover === "Services" && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ height: 200, opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className=' flex flex-col absolute z-10 p-4 top-16 left-80 w-48 gap-5 bg-black text-white'
              onMouseEnter={() => setMouseHover("Services")}
              onMouseLeave={() => setMouseHover(null)}
            >
              <li className='hover:cursor-pointer'>About us</li>
              <li className=' hover:cursor-pointer'>Our Team </li>
              <li className=' hover:cursor-pointer'>Our Partners </li>
              <li className=' hover:cursor-pointer'>Contact Us</li>
            </motion.ul>
          )}
          <li onMouseEnter={() => setMouseHover("Contact")}
            onMouseLeave={() => setMouseHover(null)}
            className='h-full flex items-center px-2 hover:cursor-pointer'>Shop</li>
          {/* Dropdown Menu */}
          {mouseHover === "Contact" && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ height: 200, opacity: 1 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className=' flex flex-col absolute z-10 p-4 top-16 left-96 w-48 gap-5 bg-black text-white'
              onMouseEnter={() => setMouseHover("Contact")}
              onMouseLeave={() => setMouseHover(null)}
            >
              <li className='hover:cursor-pointer'>Shop List</li>
              <li className=' hover:cursor-pointer'>Shop Single </li>
              <li className=' hover:cursor-pointer'>Shop Layouts </li>
              <li className=' hover:cursor-pointer'>Shop Pages</li>
            </motion.ul>
          )}
        </ul>

      </div>

      {/* Other Section */}
      <div className='flex   py-2 w-1/2 gap-52 justify-end'>
        <span className='hidden md:flex'>xxx@gmail.com</span>
        <span className='hidden md:flex' >+91-4564957463</span>
        <div onClick={mouseHover === "open" ? () => setMouseHover(null) : () => setMouseHover("open")}
          className='flex px-5 md:hidden'>
          <Grip className='h-9 w-9' />
        </div>
        {console.log(mouseHover)}
        {mouseHover === "open" && (
          <motion.div className='md:hidden z-50 p-8 flex justify-center  absolute top-16 w-2/4 bg-black'
            initial={{ opacity: 0, height: 0 }}
            animate={{ height: 300, opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}


          >
            <ul className='flex flex-col gap-10'>
              <li>Home</li>
              <li>Property List</li>
              <li>Pages</li>
              <li>Shop</li>
            </ul>
          </motion.div>
        )}


      </div>
    </nav>
  );
}

export default Navbar;
