import Image from "next/image";
import { play_svg } from "@/lib/svg";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { MdKeyboardArrowRight } from "react-icons/md";
import MovieGenreBadge from "./MovieGenreBadge_1";
import Link from "next/link";


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
    iconPos="br", hideDetails=true, genre
}) {

    return (
        <Link href="/movies/10">
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
                                duration-200 flex flex-col justify-between p-2 gap-y-1`
                            :
                                `z-10 absolute top-0 left-0 w-full h-full bg-black/60 transition-all
                                duration-200 flex flex-col justify-between p-2 gap-y-1`
                    }>

                        <div className="flex items-center gap-x-1.5 flex-wrap">
                            {
                                genre.map((genre, i) => (
                                    <MovieGenreBadge key={i} text={genre} />
                                ))
                            }
                        </div>                      

                    </div>
                </div>

                <div>
                    <div className="p-1 py-2 flex items-center justify-between">

                        <HeartIcon />
                        <p className="text-xs !text-[11px] text-white/70 font-light font-[Lexend] tracking-wide leading-none">{date.year}</p>
                        <div className="hover:bg-red-500 group rounded transition-colors duration-200 cursor-pointer">
                            <MdKeyboardArrowRight className="w-5 h-5 fill-red-500 transition-colors duration-300 hover:fill-[#1E1E1E] hover:bg-red-500 rounded" />
                        </div>

                    </div>

                    <p className="text-white leading-4 mt-1 px-0.5 text-xs font-[Lexend] font-light text-center line-clamp-2">
                        {title}
                    </p>
                </div>


            </div>
        </Link>
    )

}