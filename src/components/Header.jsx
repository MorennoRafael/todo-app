export default function Header() {
    return (
        <div className='relative w-full h-58 md:h-72'>
            <div className="absolute left-4 bottom-4">
                <h1 className="text-lg md:text-2xl text-white font-bold">14:06</h1>
                <h1 className="text-lg md:text-2xl text-white font-bold">Bandung</h1>
            </div>
            <img src="img/pagi.png" alt="gambar-pagi" className='w-full h-full object-center rounded-2xl shadow-md shadow-neutral-500' />
        </div>
    )
}