import Link from "next/link"

export default function CTA({href, text, type = "fill", containerClass, textClass}) {

    const btnContent = (
        <span
            className={
                ``
                + " " +
                textClass
            }
        >
            {text}
        </span>
    )

    return (
        <>
            {
                href
                ?
                    <Link
                        href={href}
                        className={
                            type === "fill"
                            ?
                                `bg-red-500 py-[8px] px-[33px] rounded-sm text-sm font-[Lexend]
                                text-white active:scale-75 transition-all duration-500 ease-out
                                border border-transparent hover:bg-transparent hover:border-red-500`
                            :
                                `bg-transparent py-[8px] px-[33px] rounded-sm text-sm font-[Lexend]
                                text-white active:scale-75 transition-all duration-500 ease-out
                                border border-red-500 hover:bg-red-500`
                            + " " +
                            containerClass
                        }
                    >
                        {btnContent}
                    </Link>
                :
                    <button
                        className={
                            type === "fill"
                            ?
                                `bg-red-500 py-[8px] px-[33px] rounded-sm text-sm font-[Lexend]
                                text-white active:scale-75 transition-all duration-500 ease-out
                                border border-transparent hover:bg-transparent hover:border-red-500`
                            :
                                `bg-transparent py-[8px] px-[33px] rounded-sm text-sm font-[Lexend]
                                text-white active:scale-75 transition-all duration-500 ease-out
                                border border-red-500 hover:bg-red-500`
                            + " " +
                            containerClass
                        }
                    >
                        {btnContent}
                    </button>
            }
        </>        
    )
    
}