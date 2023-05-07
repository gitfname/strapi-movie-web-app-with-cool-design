import Image from "next/image";
import { AiFillStar } from "react-icons/ai"


export default function Testimotional({username, img, text, tl_text, score}) {
    return (
        <div className="w-full rounded-lg bg-black/30 p-5 min-h-[240px] relative">
            <p className="text-white/50 text-xs font-light font-[Lexend] tracking-wide absolute top-4 left-4">{tl_text}</p>
            <Image
                width={60}
                height={60}
                alt=""
                src={img}
                className="w-11 h-11 rounded-full absolute top-4 left-1/2 -translate-x-1/2
                object-center object-cover"
            />
            <div className="absolute top-4 right-4 flex items-center gap-x-1">
                <p className="leading-none text-white/50 text-xs !text-[11px] font-light font-[Lexend]">
                    {score}
                </p>
                <AiFillStar className="w-3.5 h-3.5 fill-red-500" />
            </div>
            <p className="text-white text-sm font-[Lexend] font-light tracking-wide text-center mt-[60px]">
                {username}
            </p>
            <p className="text-white/75 leading-[18px] tracking-wide text-xs xl:text-sm font-light font-[Lexend] line-clamp-6 mt-5">
                {text}
            </p>
        </div>
    )
}