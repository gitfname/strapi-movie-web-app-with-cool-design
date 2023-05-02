import { useEffect, useRef, useState, useId, useMemo, memo } from "react"
import BScroll from "better-scroll";
import { IoIosArrowDown } from "react-icons/io"
import Image from "next/image";
import useClickOutside from "@/lib/hooks/clickOutSide";
import { Link } from "react-admin";
import FilterByeGenreTag from "./FilterByeGenreTag";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Portal
} from "@chakra-ui/react"


function DropDownItem({href, text, onClick, containerClass, textClass}) {
    const content = (
        <p
            className={
                `text-white text-xs font-normal font-[Lexend] tracking-wide pointer-events-none`
                + ' ' +
                textClass
            }
        >
            {text}
        </p>
    )

    return (
        <>
            {
                href
                ?
                    <Link
                        onClick={onClick}
                        href={href}
                        className={
                            `p-2.5 w-full rounded-lg bg-[#1E1E1E] border border-transparent hover:border-red-500 transition-colors duration-300 cursor-pointer`
                            + " " +
                            containerClass
                        }
                    >
                        {content}
                    </Link>
                :
                    <button
                        onClick={onClick}
                        className={
                            `p-2.5 w-full rounded-lg bg-[#1E1E1E] border border-transparent hover:border-red-500 transition-colors duration-300 cursor-pointer`
                            + " " +
                            containerClass
                        }
                    >
                        {content}
                    </button>
            }
        </>
    )
}


// function DropDown({img, text, items=[], observe}) {

//     const [isOpen, setIsopen] = useState(false)
//     const ref = useRef(null)
//     const [bScrollInstance, setBScrollInstance] = useState(null)
//     useClickOutside(ref, () => isOpen&&setIsopen(false) )
//     const dropDownMenuId = useId()

//     const handleButtonOnClick = () => setIsopen(!isOpen)

//     const MemoizedDropDownItems = useMemo(() => items.map((item, i) => <DropDownItem key={i} text={item.text} />), [text])

//     useEffect(
//         () => {
//             if(observe) {
//                 const dropDownBtn = document.getElementById(dropDownMenuId)
//                 const observer = new MutationObserver((mutationList, mutationObserver) => {
//                     for (const mutation of mutationList) {
//                         console.log(mutation);
//                     }
//                 })
//                 observer.observe(dropDownBtn, {attributes: true, attributeOldValue: true})
//             }

//             if(isOpen) {
//                 bScrollInstance?.destroy&&bScrollInstance.destroy()
//                 const element = document.getElementById(dropDownMenuId)
//                 const t = new BScroll(element, {
//                     bounce: {
//                         top: true
//                     },
//                     scrollY: true,
//                     scrollX: false,
//                     bounceTime: 500
//                 })
    
//                 setBScrollInstance(t)
//             }
//         },
//         [dropDownMenuId, isOpen]
//     )

//     return (
//         <div className="w-[200px] h-[44px] relative preserve-3d z-[99999]" ref={ref}>

//             <button
//                 onClick={handleButtonOnClick}
//                 className="w-full h-full bg-white/[2%] group peer
//                 flex items-center py-3 gap-x-3 px-4 rounded-lg shadow-lg shadow-black/10"
//             >
//                 <Image
//                     width={24}
//                     height={24}
//                     alt=""
//                     src={img}
//                     className="object-center object-cover"
//                 />
//                 <p className="text-sm flex-1 font-[Lexend] text-center text-white font-light pointer-events-none">{text}</p>
//                 <IoIosArrowDown className={`w-4 h-4 fill-white pointer-events-none transition-transform duration-200 ease-in ${isOpen&&"rotate-180"}`} />

//             </button>

//             <div
//                 style={{transformStyle: "preserve-3d"}}
//                 id={dropDownMenuId}
//                 className={`absolute left-0 -bottom-1 translate-y-[95%] opacity-0 overflow-y-hidden
//                     w-full max-h-48 min-h-max flex flex-col bg-[#131313] gap-y-1.5 rounded-lg transition-all duration-0 z-[9999]
//                     ${isOpen&&"!opacity-100 !translate-y-full !duration-300"}`}
//                 >

//                     <div
//                         className="flex flex-col gap-y-1.5 h-max p-1.5"
//                     >
//                         {   
//                             isOpen&&MemoizedDropDownItems
//                         }
//                     </div>
//             </div>

//         </div>
//     )
// }


// export default function FiltersWithDropDown({items=[]}) {
//     const FilterByGenreTagContainerId = useId()

//     useEffect(
//         () => {
//             const container = document.querySelector(".container-scroll")
//             new BScroll(container, {
//                 bounce: {
//                     top: false,
//                     bottom: false,
//                     left: false,
//                     right: true
//                 },
//                 bounceTime: 400,
//                 scrollX: true
//             })


//             const filterByGenreTagContainer = document.getElementById(FilterByGenreTagContainerId)
//             new BScroll(filterByGenreTagContainer, {
//                 bounce: {
//                     top: false,
//                     bottom: false,
//                     left: false,
//                     right: true
//                 },
//                 bounceTime: 400,
//                 scrollX: true
//             })
//         },
//         []
//     )

//     return (
//         <div className="rounded-lg hidden-scrollbar pointer-events-none h-[264px]">
//             <div className="z-50 container-scroll w-full pointer-events-none hidden-scrollbar">
//                 <div className="w-max min-w-full bg-white/[3%]  rounded-lg py-4 px-7 flex gap-x-10 items-center pointer-events-auto justify-center">
//                     {
//                         items.map(item => <DropDown {...item} />)
//                     }
//                 </div>
//             </div>
//             <div id={FilterByGenreTagContainerId} className="w-full h-full border overflow-x-auto mt-10 pointer-events-auto preserve-3d z-10">
//                 <div className="w-max flex items-center flex-nowrap gap-x-3 preserve-3d z-10">
//                     <FilterByeGenreTag text="All" active />
//                     <FilterByeGenreTag text="Genre" />
//                     <FilterByeGenreTag text="Popular" />
//                     <FilterByeGenreTag text="Recommened" />
//                     <FilterByeGenreTag text="New" />
//                     <FilterByeGenreTag text="Series" />
//                     <FilterByeGenreTag text="Top Ten" />
//                     <FilterByeGenreTag text="Animation" />
//                     <FilterByeGenreTag text="Archive" />
//                 </div>
//             </div>
//         </div>
//     )
// }

function DropDown({img, text, items=[], observe}) {

    const [isOpen, setIsopen] = useState(false)
    // const ref = useRef(null)
    // const [bScrollInstance, setBScrollInstance] = useState(null)
    // useClickOutside(ref, () => isOpen&&setIsopen(false) )
    // const dropDownMenuId = useId()

    // const handleButtonOnClick = () => setIsopen(!isOpen)

    // const MemoizedDropDownItems = useMemo(() => items.map((item, i) => <DropDownItem key={i} text={item.text} />), [text])

    // useEffect(
    //     () => {
    //         if(observe) {
    //             const dropDownBtn = document.getElementById(dropDownMenuId)
    //             const observer = new MutationObserver((mutationList, mutationObserver) => {
    //                 for (const mutation of mutationList) {
    //                     console.log(mutation);
    //                 }
    //             })
    //             observer.observe(dropDownBtn, {attributes: true, attributeOldValue: true})
    //         }

    //         if(isOpen) {
    //             bScrollInstance?.destroy&&bScrollInstance.destroy()
    //             const element = document.getElementById(dropDownMenuId)
    //             const t = new BScroll(element, {
    //                 bounce: {
    //                     top: true
    //                 },
    //                 scrollY: true,
    //                 scrollX: false,
    //                 bounceTime: 500
    //             })
    
    //             setBScrollInstance(t)
    //         }
    //     },
    //     [dropDownMenuId]
    // )

    // return (
    //     <div className="w-[200px] h-[44px] relative preserve-3d z-[99999]" ref={ref}>

    //         <button
    //             onClick={handleButtonOnClick}
    //             className="w-full h-full bg-white/[2%] group peer
    //             flex items-center py-3 gap-x-3 px-4 rounded-lg shadow-lg shadow-black/10"
    //         >
    //             <Image
    //                 width={24}
    //                 height={24}
    //                 alt=""
    //                 src={img}
    //                 className="object-center object-cover"
    //             />
    //             <p className="text-sm flex-1 font-[Lexend] text-center text-white font-light pointer-events-none">{text}</p>
    //             <IoIosArrowDown className={`w-4 h-4 fill-white pointer-events-none transition-transform duration-200 ease-in ${isOpen&&"rotate-180"}`} />

    //         </button>

    //         <div
    //             style={{transformStyle: "preserve-3d"}}
    //             id={dropDownMenuId}
    //             className={`absolute left-0 -bottom-1 translate-y-[95%] opacity-0 overflow-y-hidden
    //                 w-full max-h-48 min-h-max flex flex-col bg-[#131313] gap-y-1.5 rounded-lg transition-all duration-0 z-[9999]
    //                 ${isOpen&&"!opacity-100 !translate-y-full !duration-300"}`}
    //             >

    //                 <div
    //                     className="flex flex-col gap-y-1.5 h-max p-1.5"
    //                 >
    //                     {   
    //                         isOpen&&MemoizedDropDownItems
    //                     }
    //                 </div>
    //         </div>

    //     </div>
    // )

    return (
        <Menu onOpen={() => setIsopen(true)} onClose={() => setIsopen(false)}>
            <MenuButton
                as="button"
                className="w-[200px] h-[44px] bg-white/[2%] rounded-lg shadow-lg shadow-black/10 "
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
        </Menu>
    )
}


export default function FiltersWithDropDown({items=[]}) {
    const FilterByGenreTagContainerId = useId()

    useEffect(
        () => {
            const container = document.querySelector(".container-scroll")
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
        <div className="container-scroll w-full overflow-x-hidden">
            <div className="w-max min-w-full bg-white/[3%] rounded-lg py-4 px-7 flex gap-x-10 items-center justify-center">
                {
                    items.map(item => <DropDown {...item} />)
                }
            </div>
        </div>
    )
}