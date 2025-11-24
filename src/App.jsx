// import { useState } from 'react'
import './App.css'
import { FaCirclePlus } from "react-icons/fa6";
import { FaEye, FaEdit, FaTrash, FaSearch } from "react-icons/fa";

function App() {

  return (
    <div className='bg-[#F5F5F5]'>
      <nav className='px-4 md:px-8 lg:px-18 py-6'>
        <h1 className='font-bold text-2xl text-[#EA4335]'>TodoApp</h1>
      </nav>

      <div className='flex flex-col gap-6 px-4 md:px-12 lg:px-58'>
        <div className='relative w-full h-58 md:h-72'>
          <div className="absolute left-4 bottom-4">
            <h1 className="text-lg md:text-2xl text-white font-bold">14:06</h1>
            <h1 className="text-lg md:text-2xl text-white font-bold">Bandung</h1>
          </div>
          <img src="img/pagi.png" alt="gambar-pagi" className='w-full h-full object-center rounded-2xl shadow-md shadow-neutral-500' />
        </div>

        {/* Main View */}
        {/* <div className='flex items-center gap-4 w-full'>
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
            <div className='flex flex-col gap-2 '>
              <div className='flex gap-2'>
                <div className='rounded-full text-white font-medium px-4 bg-[#FBBC05]'>
                  <p className='text-xs md:text-base'>Pending</p>
                </div>
                <div className='rounded-full text-white font-medium px-4 bg-[#EA4335]'>
                  <p className='text-xs md:text-base'>21/11/2025</p>
                </div>
              </div>
              <div className='flex items-center justify-between py-4 px-6 rounded-2xl bg-white border border-[#E0E0E0] shadow-md shadow-neutral-300'>
                <p className='md:max-w-lg lg:max-w-2xl border border-red-600 text-sm md:text-base truncate'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum repudiandae quos corporis doloribus eos ipsam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur est accusamus.</p>
                <div className='flex gap-2 md:gap-4 items-center'>
                  <FaEye className='text-neutral-400 text-md md:text-lg' />
                  <FaEdit className='text-[#FBBC05] text-md md:text-lg' />
                  <FaTrash className='text-[#EA4335] text-md md:text-lg' />
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2 '>
              <div className='flex gap-2'>
                <div className='rounded-full text-white font-medium px-4 bg-[#34A853]'>
                  <p className='text-xs md:text-base'>Done</p>
                </div>
                <div className='rounded-full text-white font-medium px-4 bg-[#34A853]'>
                  <p className='text-xs md:text-base'>20/11/2025</p>
                </div>
              </div>
              <div className='flex items-center justify-between py-4 px-6 rounded-2xl bg-white border border-[#E0E0E0] shadow-md shadow-neutral-300'>
                <p className='md:max-w-lg lg:max-w-2xl text-sm md:text-base truncate'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur est accusamus.</p>
                <div className='flex gap-2 md:gap-4 items-center'>
                  <FaEye className='text-neutral-400 text-md md:text-lg' />
                  <FaEdit className='text-[#FBBC05] text-md md:text-lg' />
                  <FaTrash className='text-[#EA4335] text-md md:text-lg' />
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-2 '>
              <div className='flex gap-2'>
                <div className='rounded-full text-white font-medium px-4 bg-[#FBBC05]'>
                  <p className='text-xs md:text-base'>Pending</p>
                </div>
                <div className='rounded-full text-white font-medium px-4 bg-[#EA4335]'>
                  <p className='text-xs md:text-base'>21/11/2025</p>
                </div>
              </div>
              <div className='flex items-center justify-between py-4 px-6 rounded-2xl bg-white border border-[#E0E0E0] shadow-md shadow-neutral-300'>
                <p className='md:max-w-lg lg:max-w-2xl text-sm md:text-base truncate'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur est accusamus.</p>
                <div className='flex gap-2 md:gap-4 items-center'>
                  <FaEye className='text-neutral-400 text-md md:text-lg' />
                  <FaEdit className='text-[#FBBC05] text-md md:text-lg' />
                  <FaTrash className='text-[#EA4335] text-md md:text-lg' />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* AddTodo View */}
        <div className="bg-white p-6 rounded-2xl shadow-md shadow-neutral-400 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-[#4285F4]">Add New Todo</h2>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Isi Todo</label>
            <textarea
              className="border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
              rows={4}
              placeholder="Tulis aktivitas yang ingin kamu kerjakan..."
            ></textarea>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Deadline</label>
            <input
              type="date"
              className="border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
            />
          </div>

          <div className="flex justify-between mt-2">
            <button className="px-4 py-2 rounded-xl bg-[#EA4335] text-white font-medium hover:opacity-90">
              Kembali
            </button>

            <button className="px-4 py-2 rounded-xl bg-[#34A853] text-white font-medium hover:opacity-90 flex items-center gap-2">
              <FaCirclePlus size={18} />
              Tambah Todo
            </button>
          </div>
        </div>

        {/* PreviewTodo */}
        {/* <div className="bg-white p-6 rounded-2xl shadow-md shadow-neutral-400 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-[#4285F4]">Detail Todo</h2>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-600">Isi Todo</label>
            <div className="border border-neutral-300 rounded-xl p-3 bg-neutral-100">
              Belajar React Fundamentals dan memahami cara kerja state & props.
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-600">Deadline</label>
            <div className="border border-neutral-300 rounded-xl p-3 bg-neutral-100">
              22 November 2025
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-600">Status</label>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FBBC05]"></span>
              <span className="font-medium text-sm">Pending</span>
            </div>
          </div>

          <div className="flex justify-between pt-2">
            <button className="px-4 py-2 rounded-xl bg-[#EA4335] text-white font-medium hover:opacity-90">
              Kembali
            </button>

            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-xl bg-[#FBBC05] text-white font-medium hover:opacity-90 flex items-center gap-2">
                <FaEdit size={16} />
                Edit
              </button>

              <button className="px-4 py-2 rounded-xl bg-[#34A853] text-white font-medium hover:opacity-90 flex items-center gap-2">
                <FaTrash size={16} />
                Hapus
              </button>
            </div>
          </div>
        </div> */}

        {/* EditTodo */}
        {/* <div className="bg-white p-6 rounded-2xl shadow-md shadow-neutral-400 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-[#FBBC05]">Edit Todo</h2>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Isi Todo</label>
            <textarea
              className="border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
              rows={4}
              placeholder="Edit aktivitas kamu..."
            ></textarea>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Deadline</label>
            <input
              type="date"
              className="border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Status</label>
            <select className="border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4285F4]">
              <option value="pending">🟡 Pending</option>
              <option value="done">🟢 Done</option>
            </select>
          </div>

          <div className="flex justify-between mt-2">
            <button className="px-4 py-2 rounded-xl bg-[#EA4335] text-white font-medium hover:opacity-90">
              Kembali
            </button>

            <button className="px-4 py-2 rounded-xl bg-[#FBBC05] text-white font-medium hover:opacity-90 flex items-center gap-2">
              <FaEdit size={18} />
              Simpan Perubahan
            </button>
          </div>
        </div> */}

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
