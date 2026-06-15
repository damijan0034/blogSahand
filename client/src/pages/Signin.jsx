import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-4xl mx-auto 
      flex-col sm:flex-row md:items-center gap-5
      '>
        {/* left */}
        <div className='flex-1'>
           <Link className=' text-4xl
                 font-bold dark:text-white
                ' 
                to="/" >
                  <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
                   via-purple-500 to-pink-500 rounded-lg text-white
                  
                  '>Sahand's</span>
                  Blog
                </Link>
                <p className='text-sm mt-5'>
                  Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Pariatur quo porro cum 
                  accusamus ad voluptate aperiam autem quidem
                   
                </p>
        </div>

        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' >
            <div>
              <Label>Username </Label>
              <TextInput type="text" id="username" 
              className='w-full' placeholder="username"
              />
            </div>
            <div>
              <Label>Email </Label>
              <TextInput type="text" id="email" 
              className='w-full' placeholder="email"
              />
            </div>
            <div>
              <Label>Password </Label>
              <TextInput type="text" id="password" 
              className='w-full' placeholder="password"
              />
            </div>
             <Button type='submit'
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
        Sign In
      </Button>
          </form>
          <div className='flex gap-2 text-sm mt-3'>
            <span>
              Have an account?
            </span>
            <Link to="/sign-in" className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
