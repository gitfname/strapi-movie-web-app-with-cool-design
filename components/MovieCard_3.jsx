import { play_svg2 } from "@/lib/svg";
import Image from "next/image";
import Link from "next/link";

export default function MovieCard_3({title, date, desc, width=0, height=0, img={width:0, height:0, src:""}, pageLink, iconPos="tr"}) {

    return (
        <Link href="/movies/10">
            <div className="w-full h-full rounded-lg relative overflow-hidden">

                <Image
                    width={img.width}
                    height={img.height}
                    alt=""
                    src={img.src}
                    className="object-center object-cover rounded-lg w-full"
                    style={{
                        height: height
                    }}
                />

                {/* details */}
                <div className="absolute z-10 top-0 left-0 w-full h-full movieCard2_darkLayer p-4 lg:p-7 flex flex-col justify-between">

                    <div>
                        <p
                            className="text-white text-base leading-none font-[Lexend] font-normal tracking-wide"
                        >{title}</p>

                        <p className="text-white/50 text-xs !text-[11px] font-light font-[Lexend] mt-[3px]">{date}</p>
                    </div>

                    <p className="text-white/70 text-xs font-light font-[Lexend] max-w-[40ch] tracking-wide">{desc}</p>

                </div>

                <div className="absolute z-10 top-4 right-4 fill-white/60 stroke-transparent hover:fill-white/80 active:scale-95 transition-transform duration-300">
                    { play_svg2("fill-inherit stroke-inherit cursor-pointer transition-colors duration-300", 30, 30) }
                </div>


            </div>
        </Link>
    )
}