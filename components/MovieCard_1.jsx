import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi"

export default function MovieCard_1({id, title, desc, date, pageLink, img, height, width}) {

    return (
        <div
            style={{
                width: width,
                height: height
            }}
            className="rounded-lg overflow-hidden"
        >

            <div className="w-full h-full relative">
            <Image
                width={img.width}
                height={img.height}
                alt=""
                src={img.src}
                className="object-center object-cover w-full h-full"
            />

            <div
                className="absolute bottom-0 left-0 w-full h-full movieCardDarkLayer"
            ></div>

            <p className="z-10 absolute top-2.5 left-2.5 text-white font-light font-[Lexend] text-sm">{date.year}</p>


            <div className="absolute bottom-2.5 left-0 px-2.5 w-full z-20">
                <div className="flex items-center justify-between w-full">
                    <p className="text-white font-light font-[Lexend] text-xs tracking-wide max-w-[25ch]">{desc}</p>

                    <Link href="/movies/10">
                        <HiArrowRight className="w-4 h-4 fill-white transition-all duration-300 cursor-pointer hover:fill-red-500 hover:scale-125 active:scale-105" />
                    </Link>
                </div>
            </div>
            </div>

        </div>
    )

}