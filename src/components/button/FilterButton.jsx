export default function FilterButton({ label, color, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition cursor-pointer
        ${active ? `bg-[${color}] text-white` : "border-gray-300 hover:bg-neutral-100"}`}
        >
            <span className={`w-3 h-3 rounded-full`} style={{ background: color }}></span>
            <span className="text-xs md:text-sm font-medium">{label}</span>
        </button>
    );
}
