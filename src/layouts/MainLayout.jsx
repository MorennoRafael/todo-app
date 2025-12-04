import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


export default function MainLayout({ children }) {
    return (
        <div className="bg-[#F5F5F5] min-h-screen">
            <Navbar />

            <div className="flex flex-col gap-6 px-4 md:px-12 lg:px-58">
                <Header />

                {children}
            </div>

            <Footer />
        </div>
    )
}