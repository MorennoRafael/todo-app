import { useEffect, useState } from "react";

export default function Header() {
    const [time, setTime] = useState("");
    const [image, setImage] = useState("/img/pagi.png");
    const [city, setCity] = useState("Lokasi tidak diketahui");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hour = now.getHours();

            setTime(
                now.toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                })
            );

            if (hour >= 5 && hour < 12) {
                setImage("/img/pagi.png");
            } else if (hour >= 12 && hour < 18) {
                setImage("/img/sore.png");
            } else {
                setImage("/img/malam.png");
            }
        };

        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition(async (pos) => {
            const { latitude, longitude } = pos.coords;

            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                );
                const data = await res.json();

                setCity(
                    data.address.city ||
                    data.address.town ||
                    data.address.village ||
                    "Lokasi tidak diketahui"
                );
            } catch (err) {
                console.error(err);
            }
        });
    }, []);

    navigator.geolocation.getCurrentPosition(
        pos => console.log(pos.coords),
        err => console.log(err.message)
    );

    return (
        <div className="relative w-full h-56 md:h-72">
            <div className="absolute left-4 bottom-4 z-10">
                <h1 className="text-lg md:text-2xl text-white font-bold">
                    {time}
                </h1>
                <h1 className="text-lg md:text-2xl text-white font-bold">
                    {city}
                </h1>
            </div>

            <img
                src={image}
                alt="header-time"
                className="w-full h-full object-cover rounded-2xl shadow-md shadow-neutral-500"
            />
        </div>
    );
}
