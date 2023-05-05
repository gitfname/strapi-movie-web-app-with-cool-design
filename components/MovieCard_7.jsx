import Image from "next/image";
import { play_svg } from "@/lib/svg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { MdKeyboardArrowRight } from "react-icons/md";
import MovieGenreBadge from "./MovieGenreBadge_1";


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

export default function MovieCard_7({
    id, title, pageLink, img, height, width, desc, imdb, icon=null, date,
    iconPos="br", hideDetails=true, genre
}) {

    return (
        <div
            style={{
                width: width,
                height: height
            }}
            className="overflow-hidden w-full h-full grid grid-cols-1 grid-rows-[1fr_max-content]"
        >

            <div className="relative w-full h-full group">

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
                            duration-300 flex flex-col justify-between p-2 gap-y-1`
                        :
                            `z-10 absolute top-0 left-0 w-full h-full bg-black/60 transition-all
                            duration-300 flex flex-col justify-between p-2 gap-y-1`
                }>

                    <div className="flex items-center gap-1.5 flex-wrap">
                        {
                            genre.map((genre, i) => (
                                <MovieGenreBadge key={i} text={genre} />
                            ))
                        }
                    </div>

                    <p className="text-white text-xs tracking-wide font-light font-[Lexend] max-w-[35ch] line-clamp-6">
                        {desc}
                    </p>

                </div>

                <div className="absolute bottom-0 left-0 w-full h-full flex flex-col p-1.5 justify-end movieCard_7DarkLayer pointer-events-none transition-opacity group-hover:opacity-0 duration-300">
                    <p className="text-center text-xs text-white font-light font-[Lexend] line-clamp-1">{title}</p>
                    <p className="text-center text-xs text-white/70 font-light font-[Lexend] line-clamp-1">{date.total}</p>
                </div>
            </div>

            <div>
                <div className="p-1 py-2 flex items-center justify-between">

                    <HeartIcon />
                    <div className="p-0.5 hover:bg-red-500 rounded transition-colors duration-200 cursor-pointer group">
                        <MdKeyboardArrowRight className="w-4 h-4 fill-red-500 group-hover:fill-[#1E1E1E] transition-colors duration-200" />
                    </div>

                </div>
            </div>


        </div>
    )

}