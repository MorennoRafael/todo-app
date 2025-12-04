// import { useState } from 'react'
import './App.css'
import { FaCirclePlus } from "react-icons/fa6";
import { FaEye, FaEdit, FaTrash, FaSearch } from "react-icons/fa";

function App() {

  return (
    <div className='bg-[#F5F5F5]'>
      <nav className='px-18 py-6'>
        <h1 className='font-bold text-2xl text-[#EA4335]'>TodoApp</h1>
      </nav>

      <div className='flex flex-col gap-6 px-58'>
        <div className='flex w-full h-72'>
          <img src="img/pagi.png" alt="gambar-pagi" className='w-full h-full object-center rounded-2xl shadow-md shadow-neutral-500' />
        </div>

        <div className='flex items-center gap-4 w-full'>
          <input type="text" placeholder='search your task' className='w-full rounded-full font-medium text-[#9E9E9E] bg-white shadow-md shadow-neutral-300 focus:outline-[#4285F4] py-2 px-6' />
          <FaSearch className='text-[#EA4335]' size={32} />
        </div>

        <div className='flex flex-col gap-2'>
          <div className="flex justify-between items-center w-full gap-4">
            <div className='flex items-center gap-3'>
              <h1 className='font-bold text-neutral-600 text-lg'>Filter :</h1>

              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 
               hover:bg-[#FBBC04]/20 transition cursor-pointer"
              >
                <span className="w-3 h-3 rounded-full bg-[#FBBC04]"></span>
                <span className="text-sm font-medium">Pending</span>
              </button>

              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 
               hover:bg-[#34A853]/20 transition cursor-pointer"
              >
                <span className="w-3 h-3 rounded-full bg-[#34A853]"></span>
                <span className="text-sm font-medium">Done</span>
              </button>
            </div>

            <FaCirclePlus className="text-[#4285F4]" size={42} />
          </div>

          <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col gap-2 '>
              <div className='w-fit rounded-full text-white font-medium px-4 bg-[#FBBC05]'>
                <p className='text-md'>Pending</p>
              </div>
              <div className='flex items-center justify-between px-6 h-14 rounded-2xl bg-white border border-[#E0E0E0] shadow-md shadow-neutral-300'>
                <p className='max-w-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur est accusamus.</p>
                <div className='flex gap-4 items-center'>
                  <FaEye size={20} className='text-neutral-400' />
                  <FaEdit size={20} className='text-[#FBBC05]' />
                  <FaTrash size={20} className='text-[#EA4335]' />
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2 '>
              <div className='w-fit rounded-full text-white font-medium px-4 bg-[#34A853]'>
                <p className='text-md'>Done</p>
              </div>
              <div className='flex items-center justify-between px-6 h-14 rounded-2xl bg-white border border-[#E0E0E0] shadow-md shadow-neutral-300'>
                <p className='max-w-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur est accusamus.</p>
                <div className='flex gap-4 items-center'>
                  <FaEye size={20} className='text-neutral-400' />
                  <FaEdit size={20} className='text-[#FBBC05]' />
                  <FaTrash size={20} className='text-[#EA4335]' />
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2 '>
              <div className='w-fit rounded-full text-white font-medium px-4 bg-[#FBBC05]'>
                <p className='text-md'>Pending</p>
              </div>
              <div className='flex items-center justify-between px-6 h-14 rounded-2xl bg-white border border-[#E0E0E0] shadow-md shadow-neutral-300'>
                <p className='max-w-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur est accusamus.</p>
                <div className='flex gap-4 items-center'>
                  <FaEye size={20} className='text-neutral-400' />
                  <FaEdit size={20} className='text-[#FBBC05]' />
                  <FaTrash size={20} className='text-[#EA4335]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex justify-center py-4">
        <p className="text-sm text-gray-600 flex items-center gap-2">
          by <span className="font-semibold">morenno.rafael</span>

          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
            <span className="w-2 h-2 rounded-full bg-[#EA4335]"></span>
            <span className="w-2 h-2 rounded-full bg-[#FBBC05]"></span>
            <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
          </span>
        </p>
      </footer>
    </div>
  )
}

export default App
