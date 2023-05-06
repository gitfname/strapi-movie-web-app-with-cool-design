
import Image from "next/image"

export default function FeatureCard({title, desc, img}) {
    return (
        <div className="w-[230px] flex gap-x-3">
            <Image
                width={40}
                height={40}
                alt=""
                src={img}
                className="object-center object-cover w-8 h-8"
            />
            <div>
                <p className="text-base text-white font-medium font-[Raleway]">{title}</p>
                <p className="text-white/70 text-xs font-[Lexend] font-light tracking-wide mt-1">
                    {desc}
                </p> 
            </div>
      </div>
    )
}