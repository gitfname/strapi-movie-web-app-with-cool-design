import { useEffect, useRef, useState, useId, useMemo, memo } from "react"
import BScroll from "better-scroll";
import { IoIosArrowDown } from "react-icons/io"
import Image from "next/image";
import useClickOutside from "@/lib/hooks/clickOutSide";
import { Link } from "react-admin";


function DropDownItem({href, text, onClick, containerClass, textClass}) {
    const content = (
        <p
            className={
                `text-white text-xs font-normal font-[Lexend] tracking-wide`
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


function DropDown({img, text, items=[]}) {

    const [isOpen, setIsopen] = useState(false)
    const ref = useRef(null)
    const [bScrollInstance, setBScrollInstance] = useState(null)
    useClickOutside(ref, () => isOpen&&setIsopen(false) )
    const dropDownMenuId = useId()

    const handleButtonOnClick = () => setIsopen(!isOpen)

    const MemoizedDropDownItems = useMemo(() => items.map((item, i) => <DropDownItem key={i} text={item.text} />), [text])

    useEffect(
        () => {
            if(isOpen) {
                bScrollInstance?.destroy&&bScrollInstance.destroy()
                const element = document.getElementById(dropDownMenuId)
                const t = new BScroll(element, {
                    bounce: {
                        top: true
                    },
                    scrollY: true,
                    scrollX: false,
                    bounceTime: 500
                })
    
                setBScrollInstance(t)
            }
        },
        [dropDownMenuId, isOpen]
    )

    return (
        <div className="w-[200px] h-[44px] relative" ref={ref}>

            <button
                onClick={handleButtonOnClick}
                className="w-full h-full bg-white/[2%] group peer
                flex items-center py-3 gap-x-3 px-4 rounded-lg shadow-lg shadow-black/10"
            >
                <Image
                    width={24}
                    height={24}
                    alt=""
                    src={img}
                    className="object-center object-cover"
                />
                <p className="text-sm flex-1 font-[Lexend] text-center text-white font-light pointer-events-none">{text}</p>
                <IoIosArrowDown className={`w-4 h-4 fill-white pointer-events-none transition-transform duration-200 ease-in ${isOpen&&"rotate-180"}`} />

            </button>

            <div
                id={dropDownMenuId}
                style={{pointerEvents:(isOpen?"auto":"none")}}
                className={`absolute left-0 -bottom-1 translate-y-[95%] opacity-0 transition-all duration-300 overflow-hidden
                    w-full max-h-48 min-h-max pointer-events-none flex flex-col bg-[#131313] gap-y-1.5 rounded-lg
                    ${isOpen&&"!pointer-events-auto !opacity-100 !translate-y-full"}`}
                >

                    <div
                        style={{pointerEvents:(isOpen?"auto":"none")}}
                        className={`flex flex-col gap-y-1.5 relative h-max p-1.5 pointer-events-none ${isOpen&&"!pointer-events-auto"}`}
                    >
                        {
                            isOpen&&MemoizedDropDownItems
                        }
                    </div>
            </div>

        </div>
    )
}


export default function FiltersWithDropDown({items=[]}) {

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
        <div className="container-scroll rounded-lg hidden-scrollbar pointer-events-none">
            <div className="w-max min-w-full bg-white/[3%] rounded-lg py-4 px-7 flex gap-x-10 items-center pointer-events-auto justify-center">
                {
                    items.map(item => <DropDown {...item} />)
                }
            </div>
        </div>
    )
}