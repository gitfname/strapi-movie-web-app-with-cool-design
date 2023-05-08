import Image from "next/image";
import { play_svg2 } from "@/lib/svg";
import MovieGenreBadge from "./MovieGenreBadge_1";
import Link from "next/link";

export default function MovieCard_5({
    id, title, pageLink, img, height, width, desc, imdb, genre, thumbnail={width: 0, height: 0, src: ""}
}) {

    return (
        <Link href="/movies/10">
            <div
                style={{
                    width: width,
                    height: height
                }}
                className="overflow-hidden w-full h-full grid grid-cols-1 grid-rows-[84%_max-content]"
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
                        className="flex flex-col justify-between p-3 gap-y-1 duration-300
                        `z-10 absolute top-0 left-0 w-full h-full bg-black/60 transition-all
                        pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pb-4"
                    >

                        <div className="flex items-start justify-between">
                            <div className="flex flex-wrap items-center gap-1.5 w-[70%]">
                                {
                                    genre.map((genre, i) => <MovieGenreBadge key={i} text={genre} />)
                                }
                            </div>

                            <Image
                                width={thumbnail.width}
                                height={thumbnail.height}
                                alt=""
                                src={thumbnail.src}
                                className="object-center object-cover h-[90px] w-[30%] max-w-[95px]"
                            />
                        </div>

                        <div className="flex-1 flex items-end">
                            <p
                                className="text-white text-xs text-[11px] line-clamp-3 font-light font-[Lexend]">
                                    {desc}
                            </p>
                        </div>                       

                    </div>
                </div>

                <div className="flex items-center justify-between p-0.5 pt-2">
                    <p className="text-white leading-4 mt-1 px-0.5 text-xs font-[Lexend] font-light text-center line-clamp-2">
                        {title}
                    </p>

                    <div className="fill-white/50 hover:fill-white/90 transition-colors duration-300 cursor-pointer">
                        {play_svg2("fill-inherit", 22, 22)}
                    </div>

                </div>

            </div>
        </Link>

    )

}