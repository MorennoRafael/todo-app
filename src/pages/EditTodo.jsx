import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BackButton from "../components/form/BackButton";
import { FaEdit } from "react-icons/fa";
import ButtonForm from "../components/form/ButtonForm";

export default function EditTodo() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [todo, setTodo] = useState("");
    const [status, setStatus] = useState("pending");

    // GET todo by id
    useEffect(() => {
        const fetchTodo = async () => {
            const res = await fetch(`http://localhost:3001/todos/${id}`);
            const data = await res.json();

            setTodo(data.todo);
            setStatus(data.completed ? "done" : "pending");
        };

        fetchTodo();
    }, [id]);

    // PUT update todo
    const handleUpdate = async () => {
        if (!todo.trim()) {
            alert("Todo tidak boleh kosong");
            return;
        }

        await fetch(`http://localhost:3001/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                todo: todo,
                completed: status === "done",
            }),
        });

        navigate("/");
    };

    return (
        <MainLayout>
            <div className="bg-white p-6 rounded-2xl shadow-md shadow-neutral-400 flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-[#FBBC05]">
                    Edit Todo
                </h2>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">Isi Todo</label>
                    <textarea
                        className="border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
                        rows={4}
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">Status</label>
                    <select
                        className="border border-neutral-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="pending">🟡 Pending</option>
                        <option value="done">🟢 Done</option>
                    </select>
                </div>

                <div className="flex justify-between mt-2">
                    <BackButton href="/" />

                    <ButtonForm
                        color="#FBBC05"
                        icon={<FaEdit size={18} />}
                        text="Simpan Perubahan"
                        onClick={handleUpdate}
                    />
                </div>
            </div>
        </MainLayout>
    );
}
