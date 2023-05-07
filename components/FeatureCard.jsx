
import Image from "next/image"

export default function FeatureCard({title, desc, img}) {
    return (
        <div className="w-[230px] flex gap-x-3">
            <Image
                width={40}
                height={40}
                alt=""
                src={img}
                className="object-center object-cover w-[30px] h-[30px] opacity-90"
            />
            <div>
                <p className="text-lg text-white font-bold font-[Raleway]">{title}</p>
                <p className="text-white/70 text-xs xl:text-sm font-[Lexend] font-light tracking-wide mt-1">
                    {desc}
                </p> 
            </div>
      </div>
    )
}