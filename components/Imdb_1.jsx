
export default function Imdb_1({score="1 / 10"}) {
    return ((
        <div className="flex items-center gap-x-1.5">
            <div className="p-1 rounded-[8px] bg-[#E0B416]">
                <p className="text-black text-xs !text-[10px] tracking-tight font-extrabold font-[Lexend]">IMDB</p>
            </div>
            <p className="text-white text-xs font-medium font-[Lexend]">{score}</p>
        </div>
    ))
}