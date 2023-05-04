import Image from "next/image";
import { play_svg } from "@/lib/svg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";


function Icon({icon}) {

    return (
        <div
            className={
                `stroke-white hover:stroke-red-500 transition-colors duration-200 cursor-pointer inline-block`
            }
        >
            { icon ? icon : play_svg("", 24, 24)}
        </div>
    )

}

function HeartIcon() {

    return (
        <div className="relative w-5 h-5">
            <AiOutlineHeart className="w-5 h-5 fill-red-500 absolute top-0 left-0" />
            <AiFillHeart className={`w-5 h-5 fill-transparent hover:fill-red-500 cursor-pointer absolute top-0 left-0 transition-all duration-300`} />
        </div>
    )
}

function Imdb({imdb}) {
    return (
        <p
            className="py-1.5 w-max leading-none px-2.5 bg-red-500 text-white
            text-xs text-[10px] font-[Lexend] font-light rounded-full"
        >
            {imdb}
        </p>
    )
}

export default function MovieCard_4({
    id, title, pageLink, img, height, width, desc, imdb, icon=null, date,
    iconPos="br", hideDetails=true
}) {

    return (
        <div
            style={{
                width: width,
                height: height
            }}
            className="overflow-hidden w-full h-full grid grid-cols-1 grid-rows-[1fr_max-content]"
        >

            <div className="relative w-full h-full">
                <Image
                    width={img.width}
                    height={img.height}
                    alt=""
                    src={img.src}
                    className="object-center object-cover w-full h-full block"
                />

                <div
                    className={
                        hideDetails
                        ?
                            `z-10 absolute top-0 left-0 w-full h-full bg-transparent pointer-events-none opacity-0
                            group-hover:bg-black/60 group-hover:pointer-events-auto group-hover:opacity-100 transition-all
                            duration-200 flex flex-col justify-between p-2 gap-y-1`
                        :
                            `z-10 absolute top-0 left-0 w-full h-full bg-black/60 transition-all
                            duration-200 flex flex-col justify-between p-2 gap-y-1`
                }>

                        <div className="flex items-center justify-between">
                            {
                                iconPos==="tl"
                                ?
                                    <>
                                        <Icon icon={icon} />
                                        <Imdb imdb={imdb} />
                                    </>
                                :
                                iconPos==="tr"
                                ?
                                    <>
                                        <Imdb imdb={imdb} />
                                        <Icon icon={icon} />
                                    </>
                                :
                                <Imdb imdb={imdb} />
                            }
                        </div>

                        <div className="flex-1 flex items-end">
                            <p
                                className="text-white text-xs text-[11px] line-clamp-4 font-light font-[Lexend]">
                                    {desc}
                            </p>
                        </div>

                        <div className={`flex pt-1 ${iconPos==="br"?"justify-end":iconPos==="bl"?"justify-start":iconPos==="bc"&&"justify-center"}`}>
                            {
                                iconPos.startsWith('b')&&<Icon icon={icon} />
                            }
                        </div>                        

                </div>
            </div>

            <div>
                <div className="p-1 py-2 flex items-center justify-between">

                    <HeartIcon />
                    <p className="text-xs !text-[11px] text-white/70 font-light font-[Lexend] tracking-wide leading-none">{date.year}</p>
                    <div className="p-0.5 hover:bg-white/10 rounded transition-colors duration-200 cursor-pointer">
                        <MdKeyboardArrowRight className="w-4 h-4 fill-white" />
                    </div>

                </div>

                <p className="text-white leading-4 mt-1 px-0.5 text-xs font-[Lexend] font-light text-center line-clamp-2">
                    {title}
                    and with other text is here . and bye. and hello again
                </p>
            </div>


        </div>
    )

}