import { FaEye } from "react-icons/fa";

export default function PreviewButton({ id }) {
    return (
        <a href={`/todo/${id}`}>
            <FaEye className='text-neutral-400 text-md md:text-lg cursor-pointer' />
        </a>
    )
}