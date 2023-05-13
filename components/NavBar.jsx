import IconButton from "./IconButton";
import Logo from "./Logo";
import NavBarLink from "./NavBarLink";
import { searchNormal1_svg, user_svg } from "@/lib/svg";
import Image from "next/image";
import { useRef, useState } from "react";
import useClickOutside from "@/lib/hooks/clickOutSide";
import { useRouter } from "next/router";


function RightSideMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)
    useClickOutside(menuRef, () => isOpen&&setIsOpen(false))
    const router = useRouter()

    return (
        <>
            <Image
                width={20}
                height={20}
                alt=""
                src="/menu.svg"
                className="object-center object-cover inline-block"
                onClick={() => setIsOpen(true)}
            />

            <div
                className={`transition-all duration-200 fixed top-0 left-0
                 w-screen h-screen z-[999] pointer-events-none bg-transparent
                ${isOpen&&"!bg-black/50 !pointer-events-auto"}`}
            >
                <div ref={menuRef} className={`${isOpen&&"!translate-x-0"} pt-[40px] pr-5 items-end translate-x-full transition-transform duration-300 fixed top-0 right-0 w-32 h-screen bg-zinc-800 z-[999] flex flex-col gap-y-7`}>
                    {
                        router.pathname === "/"
                        ?
                            <>
                                <NavBarLink href="/" text="Home" />
                                <NavBarLink href="#movies" text="Movie" />
                                <NavBarLink href="#series" text="Series" />
                                <NavBarLink href="/" text="Tv" />
                                <NavBarLink href="#new-movies" text="News" />
                                <NavBarLink href="/" text="About Us" />
                                <NavBarLink href="/" text="Contact" />
                            </>
                        :
                            <NavBarLink href="/" text="Home" />
                    }
                </div>
            </div>

        </>
    )
}

export default function NavBar() {
    const router = useRouter()
    
    return (
        <div className="px-[25px] md:px-[50px] py-4 w-full bg-[#1E1E1E]">
            <div className="flex items-center justify-between">

                {/* left side links */}
                <div className="flex items-center">

                    {/* logo */}
                    <div className="mr-[60px] flex-shrink-0">
                        <Logo />
                    </div>

                    {/* links */}
                    <div className="hidden lg:flex items-center gap-x-[25px]">
                        {
                            router.pathname === "/"
                            ?
                                <>
                                    <NavBarLink href="/" text="Home" />
                                    <NavBarLink href="#movies" text="Movie" />
                                    <NavBarLink href="#series" text="Series" />
                                    <NavBarLink href="/" text="Tv" />
                                    <NavBarLink href="#new-movies" text="News" />
                                    <NavBarLink href="/" text="About Us" />
                                    <NavBarLink href="/" text="Contact" />
                                </>
                            :
                                <NavBarLink href="/" text="Home" />
                        }
                    </div>

                </div>

                {/* right side links */}
                <div className="flex items-center gap-x-[25px]">
                    <IconButton 
                        svg={searchNormal1_svg}
                    />

                    <IconButton 
                        svg={user_svg}
                    />

                    <div className="lg:hidden">
                        <RightSideMenu />
                    </div>

                </div>

            </div>
        </div>
    )
}