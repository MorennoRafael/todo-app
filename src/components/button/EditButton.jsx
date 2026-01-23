import { FaEdit } from "react-icons/fa";

export default function EditButton({ id }) {
    return (
        <a href={`/edit/${id}`}>
            <FaEdit className='text-[#FBBC05] text-md md:text-lg cursor-pointer' />
        </a>
    )
}