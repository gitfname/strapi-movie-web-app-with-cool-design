
export default function FilterByeGenreTag({text, onClick, containerClass, active = false}) {
    return (
        <button
            onClick={onClick}
            className={
                `rounded-[40px] cursor-pointer hover:border-red-500 focus:bg-red-500 focus:text-white text-white hover:text-red-500 border border-transparent
                transition-colors duration-300 text-xs font-[Lexend] py-[5px] px-[24px] tracking-wide font-light
                ${active ? "!border-red-500 !bg-red-500" : ""}`
                + " " +
                containerClass
            }
        >
            {text}
        </button>
    )
}