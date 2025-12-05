import { useState } from 'react'
import '../App.css'
import { FaCirclePlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import PreviewButton from '../components/button/PreviewButton';
import EditButton from '../components/button/EditButton';
import DeleteButton from '../components/button/DeleteButton';
import FilterButton from '../components/button/FilterButton';
import MainLayout from '../layouts/MainLayout';
import Status from '../components/Status.jsx'

export default function PageTodo() {
    const [filter, setFilter] = useState("all");

    const dummyTodos = [
        { id: 1, text: "Belajar React useEffect dan routing", status: "Pending" },
        { id: 2, text: "Mengerjakan UI Todo App sampai selesai", status: "Done" },
        { id: 3, text: "Membuat integrasi API menggunakan fetch", status: "Pending" }
    ];

    const filteredTodos =
        filter === "all" ? dummyTodos : dummyTodos.filter(t => t.status === filter);

    const handleFilter = (value) => {
        setFilter(prev => (prev === value ? "all" : value));
    };

    return (
        <MainLayout>
            <div className='flex items-center gap-4 w-full'>
                <input type="text" placeholder='search your task'
                    className='w-full rounded-full font-medium text-[#9E9E9E] bg-white shadow-md shadow-neutral-300 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#4285F4] py-2 px-6'
                />
                <FaSearch className='text-[#EA4335] text-3xl md:text-4xl' />
            </div>

            <div className='flex flex-col gap-2'>
                <div className="flex justify-between items-center w-full gap-4">
                    <div className='flex items-center gap-3'>
                        <h1 className='font-bold text-neutral-600 text-md md:text-lg'>Filter :</h1>

                        <FilterButton
                            label="Pending"
                            color="#FBBC04"
                            active={filter === "Pending"}
                            onClick={() => handleFilter("Pending")}
                        />

                        <FilterButton
                            label="Done"
                            color="#34A853"
                            active={filter === "Done"}
                            onClick={() => handleFilter("Done")}
                        />
                    </div>
                    <a href="/add"><FaCirclePlus className="text-[#4285F4] text-3xl md:text-4xl cursor-pointer" href='/add' /></a>

                </div>

                <div className='flex flex-col gap-4 w-full'>
                    {filteredTodos.map(todo => (
                        <div key={todo.id} className='flex flex-col gap-2'>
                            <Status status={todo.status} />

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
        </MainLayout>
    )
}