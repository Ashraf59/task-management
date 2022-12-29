import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

        const handleAdd = data => {
          const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imgData => {
            console.log(imgData);
            if(imgData.success){
                console.log(imgData.data.url);
                const addtask = {
                    message: data.message,
                    image: imgData.data.url
                }
                fetch('http://localhost:5000/addtasks', {
                  method: 'POST',
                  headers: {
                      'content-type' : 'application/json',
                     
                  },
                  body: JSON.stringify(addtask)
              })
              .then(res => res.json())
              .then(result => {
                  console.log(result);
                  // toast.success(`${data.name} is added successfully`)
                  navigate('/mytask')
              })

              }
              })
          
          }
        

  return (
   <div className='container mx-auto'>
    <h2 className='text-4xl font-semibold'>Add Task</h2>
     <div>  

<form onSubmit={handleSubmit(handleAdd)}>
<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left" htmlFor="file_input">Upload file</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" {...register("image")}/>



    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your message</label>
    <textarea id="message" type="text" {...register("message")} rows="4" name='message' className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
    <div>
        <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-10">Dark</button>
    </div>
    <br />
    {/* <input className='btn mb-5' type="submit" value="place your order" required/> */}
</form>   
        </div>
   </div>
  )
}

export default AddTask