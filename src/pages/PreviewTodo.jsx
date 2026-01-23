import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import MainLayout from "../layouts/MainLayout";
import BackButton from "../components/form/BackButton";
import ButtonForm from "../components/form/ButtonForm";

export default function PreviewTodo() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [todo, setTodo] = useState(null);

    // GET todo by id
    useEffect(() => {
        const fetchTodo = async () => {
            const res = await fetch(`http://localhost:3001/todos/${id}`);
            const data = await res.json();
            setTodo(data);
        };

        fetchTodo();
    }, [id]);

    // DELETE todo
    const handleDelete = async () => {
        if (!confirm("Hapus todo ini?")) return;

        await fetch(`http://localhost:3001/todos/${id}`, {
            method: "DELETE",
        });

        navigate("/");
    };

    if (!todo) return null;

    return (
        <MainLayout>
            <div className="bg-white p-6 rounded-2xl shadow-md shadow-neutral-400 flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-[#4285F4]">
                    Detail Todo
                </h2>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-neutral-600">
                        Isi Todo
                    </label>
                    <div className="border border-neutral-300 rounded-xl p-3 bg-neutral-100">
                        {todo.todo}
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-neutral-600">
                        Status
                    </label>

                    <div className="flex items-center gap-2">
                        <span
                            className={`w-3 h-3 rounded-full ${
                                todo.completed ? "bg-[#34A853]" : "bg-[#FBBC05]"
                            }`}
                        ></span>
                        <span className="font-medium text-sm">
                            {todo.completed ? "Done" : "Pending"}
                        </span>
                    </div>
                </div>

                <div className="flex justify-between pt-2">
                    <BackButton href="/" />

                    <div className="flex gap-2">
                        <ButtonForm
                            color="#FBBC05"
                            icon={<FaEdit size={18} />}
                            text="Edit"
                            href={`/edit/${todo.id}`}
                        />

                        <ButtonForm
                            color="#EA4335"
                            icon={<FaTrash size={16} />}
                            text="Hapus"
                            onClick={handleDelete}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}