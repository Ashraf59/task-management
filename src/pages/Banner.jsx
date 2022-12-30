import React from 'react'
import { Link } from 'react-router-dom';
import '../Style/Banner.css';

const Banner = () => {
  return (
    <section className='banner__cover h-screen'>
        <div className='mt-12'>
            <h1 className='text-6xl font-bold text-white' > Add Your Daily Task </h1>
           <Link to='/mytask'>
           <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-12">View Details</button>
           </Link>
        </div>
    </section>
  )
}

export default Banner