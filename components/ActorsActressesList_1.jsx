import Image from "next/image"

function ActorsActressesList_1_item({img, name, link, characterImg}) {
    return (
        <div className="flex items-center gap-x-2">
            <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                
                    width={90}
                    height={90}
                    alt=""
                    src={img}
                    className="w-9 h-9 absolute top-0 left-0 object-center object-cover rounded-full"
                />

                <Image
                    width={90}
                    height={90}
                    alt=""
                    src={characterImg}
                    className="w-9 h-9 transition-opacity duration-500 z-10 opacity-0 hover:opacity-100 absolute top-0 left-0 object-center object-cover rounded-full"
                />
            </div>
            <p className="text-white text-xs font-light leading-[14px] font-[Lexend] tracking-wide line-clamp-2">{name}</p>
        </div>
    )
}

export default function ActorsActressesList_1({items=[{img:"", name:"", link:"", characterImg:""}]}) {
    return (
        <div className="grid grid-cols-2 gap-3 gap-y-3.5">
            {
                items.map((item, i) => (
                    <ActorsActressesList_1_item
                    key={i}
                    {...item}
                    />
                ))
            }
        </div>
    )
}
