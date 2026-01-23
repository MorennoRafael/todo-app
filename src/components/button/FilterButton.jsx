export default function FilterButton({ label, color, active, onClick }) {
    return (
        <button
            onClick={onClick}
            style={active ? { backgroundColor: color, color: "white" } : {}}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border transition cursor-pointer
                ${active ? "" : "border-gray-300 hover:bg-neutral-100"}`}
        >
            <span className="w-3 h-3 rounded-full" style={active ? {backgroundColor: "white"} : {backgroundColor: color}}></span>
            <span className="text-xs md:text-sm font-medium">{label}</span>
        </button>
    );
}
