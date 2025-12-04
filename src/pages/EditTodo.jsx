import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


export default function EditTodo() {
    return (
        <div className='bg-[#F5F5F5]'>
            <Navbar />

            <div className='flex flex-col gap-6 px-4 md:px-12 lg:px-58'>
               <Header />

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

            <Footer />
        </div>
    )
}