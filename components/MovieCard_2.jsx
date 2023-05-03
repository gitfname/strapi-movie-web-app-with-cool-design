import Image from "next/image";
import { play_svg } from "@/lib/svg";

export default function MovieCard_2({id, title, pageLink, img, height, width, desc, imdb}) {

    return (
        <div
            style={{
                width: width,
                height: height
            }}
            className="overflow-hidden h-full"
        >

            <div className="relative group">
                <Image
                    width={img.width}
                    height={img.height}
                    alt=""
                    src={img.src}
                    className="object-center object-cover w-full h-[80%]"
                />

                <div
                    className="z-10 absolute top-0 left-0 w-full h-full bg-transparent pointer-events-none opacity-0
                    group-hover:bg-black/60 group-hover:pointer-events-auto group-hover:opacity-100 transition-all
                    duration-200 flex flex-col justify-between p-2 gap-y-1">

                        <div>
                            <p
                                className="py-1.5 w-max leading-none px-2.5 bg-red-500 text-white
                                text-xs text-[10px] font-[Lexend] font-light rounded-full"
                            >
                                {imdb}
                            </p>
                        </div>

                        <div className="flex-1 flex items-end">
                            <p
                                className="text-white text-xs text-[11px] line-clamp-4 font-light font-[Lexend]">
                                    {desc}
                            </p>
                        </div>

                        <div className="flex justify-end pt-1">
                            <span className="stroke-white hover:stroke-red-500 transition-colors duration-200 cursor-pointer">
                                {play_svg("", 24, 24)}
                            </span>
                        </div>

                        

                </div>
            </div>


            <p className="text-white leading-4 mt-1 px-0.5 text-xs font-[Lexend] font-light text-center line-clamp-2">
                {title}
                and with other things
            </p>

        </div>
    )

}