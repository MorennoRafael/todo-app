export default function Footer() {
    return (
        <footer className="flex justify-center py-4">
            <p className="text-sm text-gray-600 flex items-center gap-2">
                by <span className="font-semibold">morenno.rafael</span>

                <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#4285F4]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#EA4335]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#FBBC05]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
                </span>
            </p>
        </footer>
    )
}