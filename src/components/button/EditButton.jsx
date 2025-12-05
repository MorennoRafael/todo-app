import { FaEdit } from "react-icons/fa";

export default function EditButton() {
    return (
        <a href="/edit">
            <FaEdit className='text-[#FBBC05] text-md md:text-lg cursor-pointer' />
        </a>
    )
}