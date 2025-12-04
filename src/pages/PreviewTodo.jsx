import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


export default function PreviewTodo() {
    return (
        <div className='bg-[#F5F5F5]'>
            <Navbar />

            <div className='flex flex-col gap-6 px-4 md:px-12 lg:px-58'>
                <Header />

                <div className="bg-white p-6 rounded-2xl shadow-md shadow-neutral-400 flex flex-col gap-4">
                    <h2 className="text-xl font-semibold text-[#4285F4]">Detail Todo</h2>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-neutral-600">Isi Todo</label>
                        <div className="border border-neutral-300 rounded-xl p-3 bg-neutral-100">
                            Belajar React Fundamentals dan memahami cara kerja state & props.
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
                </div>
            </div>

            <Footer />
        </div>
    )
}