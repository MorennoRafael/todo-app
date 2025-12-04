export default function Status({ status }) {
    return (
        <div
            className={`w-fit rounded-full text-white font-medium px-4
                ${status === "Done" ? "bg-[#34A853]" : "bg-[#FBBC05]"}`}
        >
            <p className='text-xs md:text-base'>{status}</p>
        </div>
    )
}