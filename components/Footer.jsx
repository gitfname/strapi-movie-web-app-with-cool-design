
import { AiOutlineHeart, AiFillTwitterSquare, AiFillFacebook, AiFillInstagram } from "react-icons/ai"

export default function Footer() {
    return (
        <footer aria-label="Site Footer" className="bg-[#121212]">
            <div className="mx-auto w-full py-5 pb-6 px-6 lg:px-16 xl:px-0 border-b border-b-red-500">

                <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 lg:grid-cols-[max-content_max-content_max-content_1fr] gap-x-[69px]">

                    <div>
                        <div className="">
                            <nav aria-label="Footer About Nav" className="">
                                <a
                                    className="text-red-500 text-base font-[Raleway] font-bold transition"
                                    href="/"
                                    >
                                    Site Map
                                </a>
                                <ul className="space-y-2 text-sm mt-2 list-none pl-2.5">
                                    <li className="flex items-center gap-x-1.5">
                                        <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                                        <a
                                            className="text-white text-sm font-[Lexend] font-light transition"
                                            href="/"
                                            >
                                            Home
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-x-1.5">
                                        <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                                        <a
                                            className="text-white text-sm font-[Lexend] font-light transition"
                                            href="/"
                                            >
                                            Reviews
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-x-1.5">
                                        <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                                        <a
                                            className="text-white text-sm font-[Lexend] font-light transition"
                                            href="/"
                                            >
                                            News
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-x-1.5">
                                        <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                                        <a
                                            className="text-white text-sm font-[Lexend] font-light transition"
                                            href="/"
                                            >
                                            Awards
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div>
                        <div className="">
                            <nav aria-label="Footer About Nav" className="">
                                <p
                                    className="text-red-500 text-base font-[Raleway] font-bold transition"
                                    >
                                    Services
                                </p>
                                <ul className="space-y-2 text-sm mt-2 list-none pl-2.5">
                                    <li className="flex items-center gap-x-1.5">
                                        <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                                        <a
                                            className="text-white text-sm font-[Lexend] font-light transition"
                                            href="/"
                                            >
                                            Movies
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-x-1.5">
                                        <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                                        <a
                                            className="text-white text-sm font-[Lexend] font-light transition"
                                            href="/"
                                            >
                                            Tv
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-x-1.5">
                                        <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                                        <a
                                            className="text-white text-sm font-[Lexend] font-light transition"
                                            href="/"
                                            >
                                            Blogs
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-x-1.5">
                                        <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                                        <a
                                            className="text-white text-sm font-[Lexend] font-light transition"
                                            href="/"
                                            >
                                            NewsLetter
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div>
                        <div className="">
                            <nav aria-label="Footer About Nav" className="">
                                <p
                                    className="text-red-500 text-base font-[Raleway] font-bold transition"
                                    >
                                    Info
                                </p>
                                <ul className="space-y-2 text-sm mt-2 list-none pl-2.5">
                                    <li className="flex items-center gap-x-1.5">
                                        <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                                        <a
                                            className="text-white text-sm font-[Lexend] font-light transition"
                                            href="/"
                                            >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-x-1.5">
                                        <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                                        <a
                                            className="text-white text-sm font-[Lexend] font-light transition"
                                            href="/"
                                            >
                                            Terms of Usage
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-x-1.5">
                                        <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                                        <a
                                            className="text-white text-sm font-[Lexend] font-light transition"
                                            href="/"
                                            >
                                            Sign Up
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-x-1.5">
                                        <div className="bg-white w-[5px] h-[5px] rounded-full"></div>
                                        <a
                                            className="text-white text-sm font-[Lexend] font-light transition"
                                            href="/"
                                            >
                                            Archive
                                        </a>
                                    </li>
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
                            <div className="flex items-center gap-x-2 mt-3">
                                <div className="p-0.5 bg-white/10 rounded-lg cursor-pointer">
                                    <AiFillInstagram className="w-6 h-6 fill-white" />
                                </div>
                                <div className="p-0.5 bg-white/10 rounded-lg cursor-pointer">
                                    <AiFillFacebook className="rounded-full w-6 h-6 fill-white" />
                                </div>
                                <div className="p-0.5 bg-white/10 rounded-lg cursor-pointer">
                                    <AiFillTwitterSquare className="rounded-full w-6 h-6 fill-white" />
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