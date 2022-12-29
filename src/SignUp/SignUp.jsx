
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const handleSignUp = (data) => {
        console.log(data);
    }

  return (
    <div className='h-[500px]  flex justify-center items-center '>
    <div className='w-96 p-7 shadow shadow-slate-500 mt-10 rounded-lg'>
        <h2 className='text-4xl text-center'>Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>

<div className="form-control w-full max-w-xs">
<label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start mt-2">Name</label>
    <input type="text" {...register("name", {required: "Name is required"})}  id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John"/>
    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
</div>
<div className="form-control w-full max-w-xs">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start mt-2">Email</label>
    <input type="email" {...register("email", { required: "Email Address is Required" })}  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com"/>
    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
  
</div>
<div className="form-control w-full max-w-xs">
<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start mt-2">Password</label>
    <input type="password" 
    {...register("password", 
    { required: 'Password is required',
    minLength:{value:6, message: "Password msut be 6 character length or more"}
    })}  id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••"/>
    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
</div>

<input className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full my-4 font-semibold' value="Sign Up" type="submit" />

</form>


<button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 mt-2 rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full font-semibold">CONTINUE WITH GOOGLE</button>
<p>Already have an account? <Link className='text-black' to='/login'>Please login</Link></p>
    </div>
</div>
  )
}

export default SignUp