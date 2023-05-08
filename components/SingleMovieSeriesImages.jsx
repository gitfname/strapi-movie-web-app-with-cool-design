import Image from "next/image";

export default function SingleMovieSeriesImages({img}) {
    return (
        <Image
            width={720}
            height={480}
            alt=""
            src={img}
            className="object-center object-cover w-full h-full"
        />
    )
}