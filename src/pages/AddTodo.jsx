// import MainLayout from "../layouts/MainLayout";
// import BackButton from "../components/form/BackButton";
// import ButtonForm from "../components/form/ButtonForm";
// import { FaCirclePlus } from "react-icons/fa6";


// export default function AddTodo() {
//     return (
//         <MainLayout>
//             <div className="bg-white p-6 rounded-2xl shadow-md shadow-neutral-400 flex flex-col gap-4">
//                 <h2 className="text-xl font-semibold text-[#4285F4]">Add New Todo</h2>

//                 <div className="flex flex-col gap-1">
//                     <label className="text-sm font-medium">Isi Todo</label>
//                     <textarea
//                         className="border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
//                         rows={4}
//                         placeholder="Tulis aktivitas yang ingin kamu kerjakan..."
//                     ></textarea>
//                 </div>

//                 <div className="flex justify-between mt-2">
//                     <BackButton href="/"/>

//                     <ButtonForm color="#34A853" icon={<FaCirclePlus size={18} />} text="Tambah" href="/"/>
//                 </div>
//             </div>
//         </MainLayout>
//     )
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BackButton from "../components/form/BackButton";
import ButtonForm from "../components/form/ButtonForm";
import { FaCirclePlus } from "react-icons/fa6";

export default function AddTodo() {
    const [todo, setTodo] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!todo.trim()) {
            alert("Todo tidak boleh kosong");
            return;
        }

        try {
            await fetch("http://localhost:3001/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    todo: todo,
                    completed: false,
                }),
            });

            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Gagal menambahkan todo");
        }
    };

    return (
        <MainLayout>
            <div className="bg-white p-6 rounded-2xl shadow-md shadow-neutral-400 flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-[#4285F4]">
                    Add New Todo
                </h2>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">Isi Todo</label>
                    <textarea
                        className="border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
                        rows={4}
                        placeholder="Tulis aktivitas yang ingin kamu kerjakan..."
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                </div>

                <div className="flex justify-between mt-2">
                    <BackButton href="/" />

                    <ButtonForm
                        color="#34A853"
                        icon={<FaCirclePlus size={18} />}
                        text="Tambah"
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </MainLayout>
    );
}