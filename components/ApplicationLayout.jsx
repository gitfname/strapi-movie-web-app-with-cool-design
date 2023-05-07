import Footer from "./Footer";
import NavBar from "./NavBar";

export default function ApplicationLayout({children}) {
    return (
        <div className="w-full h-screen">

            <NavBar />
            
            {children}

            <div className="mt-[60px] w-full">
                <Footer />
            </div>

        </div>
    )
}