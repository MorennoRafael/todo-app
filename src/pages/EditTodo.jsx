import MainLayout from "../layouts/MainLayout";
import BackButton from "../components/form/BackButton";
import { FaEdit } from "react-icons/fa";
import ButtonForm from "../components/form/ButtonForm";

export default function EditTodo() {
    return (
        <MainLayout>
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
                    <BackButton href="/"/>

                    <ButtonForm color="#FBBC05" icon={<FaEdit size={18} />} text="Simpan Perubahan" href="/"/>
                </div>
            </div>
        </MainLayout>
    )
}