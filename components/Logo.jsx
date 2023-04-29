import Image from "next/image";
import Link from "next/link";

export default function Logo({width=56, height=42, alt=""}) {
    return (
        <Link href="/">
            <Image
                width={width}
                height={height}
                alt={alt}
                src="/logo-desktop.png"
            />
        </Link>
    )
}