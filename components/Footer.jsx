
import { AiOutlineHeart, AiFillTwitterSquare, AiFillFacebook, AiFillInstagram } from "react-icons/ai"

function LinkItem({text, href="/"}) {
    return (
        <li className="flex items-center gap-x-1.5 group w-max">
            <div className="bg-white group-hover:bg-red-500 transition-colors duration-300 w-[5px] h-[5px] rounded-full"></div>
            <a
                className="group-hover:text-red-500 transition-colors duration-300 text-white text-sm font-[Lexend] font-light"
                href={href}
                >
                {text}
            </a>
        </li>
    )
}

export default function Footer() {
    return (
        <footer aria-label="Site Footer" className="bg-[#121212]">
            <div className="mx-auto w-full py-5 pb-6 px-6 lg:px-16 xl:px-0 border-b border-b-red-500">

                <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 lg:grid-cols-[max-content_max-content_max-content_1fr] gap-x-[69px]">

                    <div>
                        <div className="">
                            <nav aria-label="Footer About Nav" className="">
                                <p
                                    className="text-red-500 text-base font-[Raleway] font-bold"
                                    >
                                    Site Map
                                </p>
                                <ul className="space-y-2 text-sm mt-2 list-none pl-2.5">
                                    <LinkItem text="Home" />
                                    <LinkItem text="Reviews" />
                                    <LinkItem text="News" />
                                    <LinkItem text="Awards" />
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div>
                        <div className="">
                            <nav aria-label="Footer About Nav" className="">
                                <p
                                    className="text-red-500 text-base font-[Raleway] font-bold"
                                    >
                                    Services
                                </p>
                                <ul className="space-y-2 text-sm mt-2 list-none pl-2.5">
                                    <LinkItem text="Movies" />
                                    <LinkItem text="Tv" />
                                    <LinkItem text="Blogs" />
                                    <LinkItem text="NewsLetter" />
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div>
                        <div className="">
                            <nav aria-label="Footer About Nav" className="">
                                <p
                                    className="text-red-500 text-base font-[Raleway] font-bold"
                                    >
                                    Info
                                </p>
                                <ul className="space-y-2 text-sm mt-2 list-none pl-2.5">
                                    <LinkItem text="Privacy Policy" />
                                    <LinkItem text="Terms of Usage" />
                                    <LinkItem text="Sign Up" />
                                    <LinkItem text="Archive" />
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className="flex items-stretch lg:justify-end">
                        <div className="flex flex-col">
                            <p
                                className="text-red-500 text-base font-[Raleway] font-bold transition"
                                >
                                Get In Touch
                            </p>
                            <div className="flex items-center gap-x-2 mt-3 p-1">
                                <div tabIndex={0} className="p-0.5 bg-white/10 rounded-lg cursor-pointer border border-transparent focus:rounded-[50%] focus:border-red-500 hover:rounded-[50%] hover:border-red-500 transition-all duration-300 group">
                                    <AiFillInstagram className="w-6 h-6 fill-white group-focus:fill-red-500 group-focus:scale-95 group-hover:scale-[0.8] transition-transform duration-300" />
                                </div>
                                <div tabIndex={0} className="p-0.5 bg-white/10 rounded-lg cursor-pointer border border-transparent focus:rounded-[50%] focus:border-red-500 hover:rounded-[50%] hover:border-red-500 transition-all duration-300 group">
                                    <AiFillFacebook className="rounded-full w-6 h-6 fill-white group-focus:fill-red-500 group-focus:scale-95 group-hover:scale-[0.8] transition-transform duration-300" />
                                </div>
                                <div tabIndex={0} className="p-0.5 bg-white/10 rounded-lg cursor-pointer border border-transparent focus:rounded-[50%] focus:border-red-500 hover:rounded-[50%] hover:border-red-500 transition-all duration-300 group">
                                    <AiFillTwitterSquare className="rounded-full w-6 h-6 fill-white group-focus:fill-red-500 group-focus:scale-95 group-hover:scale-[0.8] transition-transform duration-300" />
                                </div>
                            </div>
                            <p className="mt-auto text-white/50 text-xs font-[Lexend] font-light tracking-wide">
                                © 2023 MovieWorld. All Rights Reserved.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
            <div className="p-3">
                <div className="flex items-center justify-center gap-x-1">
                    <p className="text-center text-sm text-[13px] leading-none text-white/60 font-[Lexend] font-light">
                        Designed with 
                    </p>
                    <AiOutlineHeart className="fill-red-500 w-4 h-4" />
                    <p className="text-center text-sm text-[13px] leading-none text-white/60 font-[Lexend] font-light">
                        By Fateme Ghafari 
                    </p>
                </div>
            </div>
        </footer>
    )
}