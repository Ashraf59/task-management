import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { toast } from 'react-hot-toast';
import Loading from '../Shared/Loading';
const CompletedTask = () => {
  
  const {data: mytask, isLoading} = useQuery({
    queryKey:['mytask'],
    queryFn: async () => {
      try{
        const res = await fetch('http://localhost:5000/addtasks');
        const data = await res.json();
        return data
      }
      catch(error){

      }
    }
  });



  if(isLoading){
    return <Loading/>
  }
  return (
    <div>
     <h2 className='text-3xl font-bold'> Completed Task</h2>


<div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-6">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Image
                </th>
                <th scope="col" class="py-3 px-6">
                    Message
                </th>
               
                <th scope="col" class="py-3 px-6">
                    Completed
                </th>
            </tr>
        </thead>
        <tbody>
            {
              mytask?.map(task => 
                <tr key={task._id} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    
<img className="p-1 w-10 h-10 rounded ring-2 ring-gray-300 dark:ring-gray-500" src={task?.image} alt="Bordered avatar"/>

                </th>
                <td class="py-4 px-6">
                    {task?.message}
                </td>
                
                <td class="py-4 px-6">
                <span className='text-2xl'>
                   <i class="ri-checkbox-line"></i>
                   </span>
                </td>
            </tr>
                )
            }
            
        </tbody>
    </table>
</div>

          
      </div>
    
  )
}

export default CompletedTask