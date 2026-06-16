
import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsBehance, BsDribbble, BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs"


const FooterCom = () => {
  return (
   <Footer container
    className="border border-t-8 border-teal-500"
   >
      <div className="w-full max-w-7xl mx-auto">
      <div className="grid w-full justify-between 
      sm:flex md:grid-cols-1
      ">
        <div>
           <Link className='self-center text-sm sm:text-lg
      whitespace-nowrap font-semibold dark:text-white
      ' 
      to="/" >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 rounded-lg text-white
        
        '>Sahand's</span>
        Blog
      </Link>
        </div>
        <div className="grid grid-cols-2 mt-2 sm:gap-6
          sm:grid-cols-3 gap-3 sm:mt-4">
            <div>
             <FooterTitle title="About" />
            <FooterLinkGroup col>
              <FooterLink href="#">100 JS Projects</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Brand Center</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterLinkGroup>
            </div>

            <div>
             <FooterTitle title="Follow Us" />
            <FooterLinkGroup col>
              <FooterLink href="#">100 JS Projects</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Brand Center</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterLinkGroup>
            </div>

             <div>
             <FooterTitle title="Legal" />
            <FooterLinkGroup col>
              <FooterLink href="#">100 JS Projects</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Brand Center</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterLinkGroup>
            </div>
        </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:justify-between
          sm:items-center
        ">
          <FooterCopyright href="#" by="Sahand"
          year={new Date().getFullYear()}
          />
         <div className="flex gap-6 mt-1">
          <FooterIcon href="#" icon={BsFacebook} />
           <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsInstagram} />
             <FooterIcon href="#" icon={BsBehance} />
             <FooterIcon href="#" icon={BsDribbble} />
          </div>   
        </div>
        </div>
      
   </Footer>
  )
}

export default FooterCom
