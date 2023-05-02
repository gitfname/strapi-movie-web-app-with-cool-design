import { useEffect, useState, useId } from "react"
import BScroll from "better-scroll";
import { IoIosArrowDown } from "react-icons/io"
import Image from "next/image";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Portal
} from "@chakra-ui/react"


function DropDown({img, text, items=[]}) {
    const [isOpen, setIsopen] = useState(false)

    return (
        <Menu onOpen={() => setIsopen(true)} onClose={() => setIsopen(false)}>
            <MenuButton
                as="button"
                className="w-[200px] h-[44px] bg-white/[2%] rounded-lg shadow-lg shadow-black/10"
            >
                <div className="flex items-center py-3 gap-x-3 px-4">
                    <Image
                        width={24}
                        height={24}
                        alt=""
                        src={img}
                        className="object-center object-cover"
                    />
                    <p className="text-sm flex-1 font-[Lexend] text-center text-white font-light pointer-events-none">{text}</p>
                    <IoIosArrowDown className={`w-4 h-4 fill-white pointer-events-none transition-transform duration-200 ease-in ${isOpen&&"rotate-180"}`} />
                </div>
            </MenuButton>

            {
                isOpen&&(
                    <Portal>
                        <MenuList
                            className="w-[200px] rounded-lg bg-[#151515] p-1.5"
                        >
                            <div className="flex flex-col gap-y-1.5">
                                {items.map(item => (
                                    <MenuItem
                                        className="p-2.5 rounded-lg bg-[#1E1E1E] border border-transparent
                                        hover:border-red-500 transition-colors duration-300 cursor-pointer"
                                    >
                                        <p
                                            className={
                                                `text-white text-xs font-normal font-[Lexend] tracking-wide pointer-events-none`
                                            }
                                        >
                                            {item.text}
                                        </p>
                                    </MenuItem>
                                ))}
                            </div>
                        </MenuList>
                    </Portal>
                )
            }
        </Menu>
    )
}


export default function FiltersWithDropDown({items=[]}) {
    const FilterByGenreTagContainerId = useId()

    useEffect(
        () => {
            const container = document.getElementById(FilterByGenreTagContainerId)
            new BScroll(container, {
                bounce: {
                    top: false,
                    bottom: false,
                    left: true,
                    right: true
                },
                bounceTime: 400,
                scrollX: true
            })
        },
        []
    )

    return (
        <div id={FilterByGenreTagContainerId} className="container-scroll w-full overflow-x-hidden px-5">
            <div className="w-max min-w-full bg-white/[3%] rounded-lg py-4 px-7 flex gap-x-10 items-center justify-center">
                {
                    items.map(item => <DropDown {...item} />)
                }
            </div>
        </div>
    )
}