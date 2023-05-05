import { play_svg2 } from "@/lib/svg";
import Image from "next/image";

export default function MovieCard_6({text_tl, text_tr, text_bl, height=0, img={width:0, height:0, src:""}, pageLink}) {

    return (
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
            <div className="absolute z-10 top-0 left-0 w-full h-full movieCard2_darkLayer p-4 lg:p-5 flex flex-col justify-between">

                <div className="w-full flex items-center justify-between">
                    <p className="text-white/50 text-xs !text-[11px] font-light font-[Lexend] mt-[3px]">{text_tl}</p>
                    <p className="text-white text-xs !text-[11px] font-light font-[Lexend] mt-[3px]">{text_tr}</p>
                </div>

                <div className="flex w-full items-center justify-between">
                    <p
                        className="text-white text-sm leading-normal font-[Lexend] font-light tracking-wide max-w-[16ch]"
                    >
                        {text_bl}
                    </p>
                </div>

            </div>

            <div className="absolute z-10 bottom-4 right-4 fill-white/60 stroke-transparent hover:fill-white/80 active:scale-95 transition-transform duration-300">
                { play_svg2("fill-inherit stroke-inherit cursor-pointer transition-colors duration-300", 30, 30) }
            </div>


        </div>
    )
}