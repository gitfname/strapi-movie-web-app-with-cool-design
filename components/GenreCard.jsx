import { arrowRight_svg } from "@/lib/svg";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs"

export default function GenreCard({title, subtitle, href, img}) {
    return (
        <div
            className="flex items-center gap-x-3 py-4 px-[18px] rounded-lg bg-[#272320]"
        >

            <div className="w-[55px] h-[55px] bg-[#1C1917] rounded-[4px] grid place-items-center flex-shrink-0">
                <Image
                    alt=""
                    width={35}
                    height={35}
                    src={img}
                    className="object-center object-cover"
                />
            </div>

            <div className="flex-1">
                <p
                    className="text-xs font-light font-[Lexend] text-white leading-5 w-max tracking-wide"
                >
                    {title}
                </p>

                <div className="flex items-center justify-between">
                    <p
                        className="text-xs text-[11px] font-light font-[Lexend] text-white/50 leading-5 w-max"
                    >
                        {subtitle}
                    </p>

                    <BsArrowRightShort className="w-5 h-5 fill-red-500 ml-0.5 transition-all duration-300 hover:scale-[1.35] cursor-pointer inline-block hover:fill-white" />
                </div>

            </div>

        </div>
    )
}