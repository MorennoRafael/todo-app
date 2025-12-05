import { FaEye } from "react-icons/fa";

export default function PreviewButton() {
    return (
        <a href="/todo">
            <FaEye className='text-neutral-400 text-md md:text-lg cursor-pointer' />
        </a>
    )
}