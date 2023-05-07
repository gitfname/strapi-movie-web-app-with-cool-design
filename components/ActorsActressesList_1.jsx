
function ActorsActressesList_1_item({img, name, link, characterImg}) {
    return (
        <div className="flex items-center gap-x-2">
            <div className="w-8 h-8 bg-red-300 rounded-full flex-shrink-0"></div>
            <p className="text-white text-xs font-normal leading-none font-[Lexend] tracking-wide line-clamp-2">{name}</p>
        </div>
    )
}

export default function ActorsActressesList_1({items=[{img:"", name:"", link:"", characterImg:""}]}) {
    return (
        <div className="grid grid-cols-2 gap-3 gap-y-3.5">
            {
                items.map(item => (
                    <ActorsActressesList_1_item
                    {...item}
                    />
                ))
            }
        </div>
    )
}
