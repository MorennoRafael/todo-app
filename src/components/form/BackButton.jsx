export default function BackButton({ href }) {
    return (
        <a href={href}>
            <button className="px-4 py-2 rounded-xl bg-[#EA4335] text-white font-medium hover:opacity-90 cursor-pointer">
                Kembali
            </button>
        </a>
    )
}