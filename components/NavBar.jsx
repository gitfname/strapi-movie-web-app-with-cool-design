import IconButton from "./IconButton";
import Logo from "./Logo";
import NavBarLink from "./NavBarLink";
import { searchNormal1_svg, user_svg } from "@/lib/svg";

export default function NavBar() {
    return (
        <div className="px-[50px] py-4 w-full bg-[#1E1E1E]">
            <div className="flex items-center justify-between">

                {/* left side links */}
                <div className="flex items-center">

                    {/* logo */}
                    <div className="mr-[60px]">
                        <Logo />
                    </div>

                    {/* links */}
                    <div className="flex items-center gap-x-[25px]">
                        <NavBarLink href="/" text="Home" />
                        <NavBarLink href="/movies" text="Movie" />
                        <NavBarLink href="/series" text="Series" />
                        <NavBarLink href="/series" text="Tv" />
                        <NavBarLink href="/series" text="News" />
                        <NavBarLink href="/series" text="About Us" />
                        <NavBarLink href="/series" text="Contact" />
                    </div>

                </div>

                {/* right side links */}
                <div className="flex items-center gap-x-[25px]">
                    <IconButton 
                        svg={searchNormal1_svg}
                    />

                    <IconButton 
                        svg={user_svg}
                    />
                </div>

            </div>
        </div>
    )
}