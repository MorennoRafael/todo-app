

export default function EditTodo() {
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

                <div className="bg-white p-6 rounded-2xl shadow-md shadow-neutral-400 flex flex-col gap-4">
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