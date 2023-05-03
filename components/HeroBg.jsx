import Image from "next/image";
import useWindowSize from "@/lib/hooks/useWindowSize";
import { useState } from "react";

const desktop = {
    type: "desktop",
    width: 1280,
    height: 920,
    src: "/bg-desktop.png"
}
const phone = {
    type: "phone",
    width: 860,
    height: 784,
    src: "/bg-phone.png"
}

export default function HeroBg() {
    const windowSize = useWindowSize()
    const [imgSrc, setImgSrc] = useState(desktop)

    if(windowSize?.width) {
        if(windowSize?.width && windowSize.width > 640) {
            imgSrc.type === "phone" && setImgSrc(desktop)
        }
        else {
            imgSrc.type === "desktop" && setImgSrc(phone)
        }
    }


    return (
        <div className="relative">
            
            <div
                className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#1E1E1E] to-[#1E1E1E]/5"
            >    
            </div>
            <Image
                alt=""
                width={imgSrc.width}
                height={imgSrc.height}
                src={imgSrc.src}
                className="object-center object-contain h-auto w-full"
            />

            <div
                className="translate-y-1/2 absolute block bottom-0 bg-transparent
                backdrop-blur-xl left-0 w-full h-16 bg-gradient-to-b from-transparent to-[#1E1E1E]/30"
            >
            </div>
        </div>
    )
}