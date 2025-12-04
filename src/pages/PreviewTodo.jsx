import { FaEdit } from "react-icons/fa";
import MainLayout from "../layouts/MainLayout";
import { FaTrash } from "react-icons/fa6";
import BackButton from "../components/form/BackButton";
import ButtonForm from "../components/form/ButtonForm";


export default function PreviewTodo() {
    return (
        <MainLayout>
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
                    <BackButton />

                    <div className="flex gap-2">
                        <ButtonForm color="#FBBC05" icon={<FaEdit size={18} />} text="edit"/>

                        <ButtonForm color="#EA4335" icon={<FaTrash size={16} />} text="Hapus"/>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}