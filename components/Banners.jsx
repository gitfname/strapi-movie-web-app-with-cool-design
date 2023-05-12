

import { useMediaQuery } from "@chakra-ui/react"
import Image from "next/image"

export default function Banners() {
    const [md] = useMediaQuery([
        "(min-width: 640px)"
    ])

    return (
        <div className="mt-11 px-[25px] lg:px-[50px] grid grid-cols-1 gap-y-7 sm:grid-cols-[1fr_65%] gap-x-9">
            <Image
                width={720}
                height={720}
                alt=""
                src={ md ? "/banner1.svg" : "/banner1_mobile.svg"}
                className="object-center object-cover h-full"
            />
            <Image
                width={720}
                height={720}
                alt=""
                src={ md ? "/banner2.svg" : "/banner2_mobile.svg"}
                className="object-center object-cover"
            />
        </div>
    )
}