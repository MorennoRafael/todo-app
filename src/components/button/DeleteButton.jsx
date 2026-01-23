import { FaTrash } from "react-icons/fa";

export default function DeleteButton({ onClick }) {
    return (
        <FaTrash className='text-[#EA4335] text-md md:text-lg cursor-pointer' onClick={onClick}/>
    )
}