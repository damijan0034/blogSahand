import { Button, Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react'
import {AiOutlineSearch} from "react-icons/ai"
import {FaMoon} from "react-icons/fa"
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const path=useLocation().pathname
  return (
    <Navbar className='border-b-2 '>
      <Link className='self-center text-sm sm:text-lg
      whitespace-nowrap font-semibold dark:text-white
      ' 
      to="/" >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 rounded-lg text-white
        
        '>Sahand's</span>
        Blog
      </Link>
      <form >
        <TextInput
        type='text' placeholder='Search...'
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'
        />
      </form>
      <Button className=' lg:hidden '
      color='light' pill
      >
        <AiOutlineSearch  />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='hidden sm:inline'
         pill color="light"
         >
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button outline   color="purple"  >
            Sign In
          </Button>
        </Link>
        <NavbarToggle />
            </div>
        <NavbarCollapse>
          <NavbarLink active={path === "/"} >
            <Link to="/">Home</Link>
          </NavbarLink>
          <NavbarLink active={path === "/about"}>
            <Link to="/about">About</Link>
          </NavbarLink>
          <NavbarLink active={path === "/projects"}>
            <Link to="/projects">Projects</Link>
          </NavbarLink>
        </NavbarCollapse>
    
    </Navbar>
  )
}

export default Header
