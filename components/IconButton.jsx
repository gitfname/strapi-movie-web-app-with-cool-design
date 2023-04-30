import Link from "next/link"

export default function IconButton({href, svg, containerClass, svgClass}) {

    const btnContent = (
        <span
            className={
                `w-5 h-5 stroke-[#292D32] dark:stroke-white group-hover:stroke-red-500 inline-block
                group-active:scale-90 transition-all duration-300`
                + " " +
                svgClass
            }
        >
            {svg}
        </span>
    )

    return (
        <>
            {
                href
                ?
                    <Link
                        tabIndex={0}
                        className={
                            `group`
                            + " " +
                            containerClass
                        }
                        href={href}
                    >
                        {btnContent}
                    </Link>
                :
                    <button
                        tabIndex={0}
                        className={
                            `group`
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