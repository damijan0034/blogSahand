import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {

  const[formData,setFormData]=useState({})
  const[errorMessage,setErrorMessage]=useState(null)
  const[loading,setLoading]=useState(false)

  const navigate=useNavigate()


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
  }

  const handleSubmit=async(e)=>{

    e.preventDefault()

    if( !formData.email || !formData.password ){
      return setErrorMessage("Please fill out all fields")
    }
    try {
      setLoading(true)
      setErrorMessage(null)

    const res=  await fetch("/api/auth/signin",{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData) //convert to json

      })

     const data=await res.json()

     setLoading(false)

     if(data.success === false){
      return setErrorMessage(data.message)
     }

     if(res.ok){
      navigate("/")
     }
      
    } catch (error) {
      setErrorMessage(error)
      setLoading(false)
    }
  }

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
          <form onSubmit={handleSubmit}
           className='flex flex-col gap-4' >
           
            <div>
              <Label>Email </Label>
              <TextInput type="email" id="email" onChange={handleChange}
              className='w-full' placeholder="email"
              />
            </div>
            <div>
              <Label>Password </Label>
              <TextInput type="password" id="password" onChange={handleChange}
              className='w-full' placeholder="password"
              />
            </div>
             <Button type='submit' disabled={loading}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
      {
        loading ? 
        <>
        <Spinner size='sm' />

          <span className='pl-3'>Loading...</span>
        </>  
         :
        "Sign In"
      }
      </Button>
          </form>
          <div className='flex gap-2 text-sm mt-3'>
            <span>
             Dont have an account?
            </span>
            <Link to="/sign-in" className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-4' color="failure" >
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default SignIn
