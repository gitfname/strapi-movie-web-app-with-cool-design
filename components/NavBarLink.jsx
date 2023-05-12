import Link from "next/link";

export default function NavBarLink({href, text, linkClass, textClass}) {
    return (
        <Link
            href={href}
            className={"group transition-transform active:scale-90 duration-300 select-none " +" "+ linkClass}
        >
            <span
                className={
                    `text-sm font-light font-[Lexend] leading-5
                    dark:text-white text-black
                    group-hover:text-red-500 transition-all duration-300`
                    + " " +
                    textClass}
                >

                {text}

            </span>

        </Link>
    )
}
