// import { useState } from 'react'
import './App.css'
import { FaCirclePlus } from "react-icons/fa6";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import PreviewButton from './components/button/PreviewButton';
import EditButton from './components/button/EditButton';
import DeleteButton from './components/button/DeleteButton';

function App() {
  const dummyTodos = [
    {
      id: 1,
      text: "Belajar React useEffect dan routing",
      status: "pending"
    },
    {
      id: 2,
      text: "Mengerjakan UI Todo App sampai selesai",
      status: "done"
    },
    {
      id: 3,
      text: "Membuat integrasi API menggunakan fetch",
      status: "pending"
    }
  ];

  return (
    <div className='bg-[#F5F5F5]'>
      <Navbar />

      <div className='flex flex-col gap-6 px-4 md:px-12 lg:px-58'>
        <Header />

        {/* Main View */}
        <div className='flex items-center gap-4 w-full'>
          <input type="text" placeholder='search your task' className='w-full rounded-full font-medium text-[#9E9E9E] bg-white shadow-md shadow-neutral-300 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#4285F4] py-2 px-6' />
          <FaSearch className='text-[#EA4335] text-3xl md:text-4xl' />
        </div>

        <div className='flex flex-col gap-2'>
          <div className="flex justify-between items-center w-full gap-4">
            <div className='flex items-center gap-3'>
              <h1 className='font-bold text-neutral-600 text-md md:text-lg'>Filter :</h1>

              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 
               hover:bg-[#FBBC04]/20 transition cursor-pointer"
              >
                <span className="w-3 h-3 rounded-full bg-[#FBBC04]"></span>
                <span className="text-xs md:text-sm font-medium">Pending</span>
              </button>

              <button
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 
               hover:bg-[#34A853]/20 transition cursor-pointer"
              >
                <span className="w-3 h-3 rounded-full bg-[#34A853]"></span>
                <span className="text-xs md:text-sm font-medium">Done</span>
              </button>
            </div>

            <FaCirclePlus className="text-[#4285F4] text-3xl md:text-4xl" />
          </div>

          <div className='flex flex-col gap-4 w-full'>
            {dummyTodos.map(todo => (
              <div key={todo.id} className='flex flex-col gap-2 '>
                <div className={`w-fit rounded-full text-white font-medium px-4 ${todo.status === "done" ? "bg-[#34A853]" : "bg-[#FBBC05]"}`}>
                  <p className='text-xs md:text-base'>{todo.status}</p>
                </div>
                <div className='flex items-center justify-between py-4 px-6 rounded-2xl bg-white border border-[#E0E0E0] shadow-md shadow-neutral-300'>
                  <p className='md:max-w-lg lg:max-w-2xl text-sm md:text-base truncate'>{todo.text}</p>
                  <div className='flex gap-2 md:gap-4 items-center'>
                    <PreviewButton />
                    <EditButton />
                    <DeleteButton />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default App
