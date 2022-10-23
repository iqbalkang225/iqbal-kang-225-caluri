import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { BsCheck } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Profile = () => {
  return (
    //Profile card
     <div className = 'bg-red-50 rounded-md  text-black overflow-hidden'>

      {/* header */}
      <div className = 'flex items-center justify-between p-2'>
        <div className = 'flex items-center gap-6'>
        <Link to = '/search' className = 'hover:text-red-500 duration-100 hover:scale-110'>
            <BiArrowBack size={24} />
          </Link>
          <h3>Settings</h3>
        </div>
        <Link to = '/search' className = 'hover:text-red-500 duration-100 hover:scale-110'>
          <BsCheck size={32} />
        </Link>
      </div>
      {/* body */}
      <div className='h-20 w-20 mt-8 rounded-full mx-auto bg-red-500 flex items-center justify-center'> 
      <h2 className='uppercase text-white font-bold text-2xl'>ik</h2>
      </div>
      <form className='text-sm p-4  text-red-800 space-y-4'>
        {/* group 1 */}
        <div className='flex flex-col  p-2 rounded-md shadow-sm'>
          <label htmlFor="name" className='text-red-300'>Name</label>
          <input
            type = 'text'
            name = 'name'
            value = 'Iqbal kang'
            className='bg-transparent outline-none'
          />
        </div>

         {/* group 2 */}
         <div className='flex flex-col  p-2 rounded-md shadow-sm'>
          <label htmlFor="age" className='text-red-300'>Age</label>
          <input
            type = 'number'
            name = 'age'
            value = {50}
            className='bg-transparent outline-none w-24'
          />
        </div>

         {/* group 3 */}
         <div className='flex flex-col  p-2 rounded-md shadow-sm'>
          <label htmlFor="weight" className='text-red-300'>Weight</label>
          <input
            type = 'number'
            name = 'weight'
            value = {150}
            className='bg-transparent outline-none w-24'
          />
        </div>

        {/* group 4 */}
        <div className='flex flex-col  p-2 rounded-md shadow-sm'>          
            <label htmlFor="weight" className='text-red-300'>Height</label>
            <div className = 'flex gap-4'>
                <input
                    className = 'outline-none bg-transparent  w-10'
                    type = 'number'
                    name = 'feet'
                    value = {5}
                    placeholder = 'feet'
                />
                <input
                    className = 'outline-none bg-transparent  w-10'
                    type = 'number'
                    name = 'inches'
                    value = {9}
                    placeholder = 'inches'
                />
            </div>
        </div>

        <div className='flex justify-center'>
          <Link 
            to = "/"
            className='bg-red-500 px-6 py-3 rounded-md text-white shadow-lg hover:shadow-sm duration-200 mt-4'
          >
            <motion.p
              whileHover = {{scale: 1.4}}
            > Update </motion.p>
          </Link>
        </div>

      
      </form>
     </div>
    
  )
}

export default Profile