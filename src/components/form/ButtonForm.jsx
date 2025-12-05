export default function ButtonForm({ text, icon, color, href }) {
    return (
        <a href={href}>
            <button className={`px-4 py-2 rounded-xl bg-[${color}] text-white font-medium hover:opacity-90 flex items-center gap-2 cursor-pointer`}>
                {icon}
                {text}
            </button>
        </a>
    )
}