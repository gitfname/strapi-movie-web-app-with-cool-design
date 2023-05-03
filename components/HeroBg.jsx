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

    if(windowSize?.width && windowSize.width > 640) {
        console.log("desktop");
        imgSrc.type === "phone" && setImgSrc(desktop)
    }
    else {
        console.log("phone");
        imgSrc.type === "desktop" && setImgSrc(phone)
    }

    return (
        <Image
            alt=""
            width={imgSrc.width}
            height={imgSrc.height}
            src={imgSrc.src}
            className="object-center object-contain h-auto w-full col-start-1 row-start-1"
        />
    )
}