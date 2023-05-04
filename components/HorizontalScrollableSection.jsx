import { useCallback, useEffect, useMemo, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import Image from "next/image"
import { useMediaQuery } from "@chakra-ui/react"




export default function HorizontalScrollableSection({
    items=[], title, showSeeMore=false, containerClass, buttonsPlace="tr",
    slideW="full", slideH="full", spaceBetween=40, slidesPerView=1, slidesPerView_sm=null,
    slidesPerView_md=null, slidesPerView_lg=null, slidesPerView_xl=null, renderSlideTemplate, showPrevNextButtons=true
}) {

    const [xs, sm, md, lg, xl] = useMediaQuery([
        "(max-width: 640px)",
        "(min-width: 641px) and (max-width: 768px)",
        "(min-width: 769px) and (max-width: 1024px)",
        "(min-width: 1025px) and (max-width: 1280px)",
        "(min-width: 1281px)",
    ])

    const [additionalPrevButtonClasses, setAdditionalPrevButtonClasses] = useState([])
    const [additionalNextButtonClasses, setAdditionalNextButtonClasses] = useState([])
    const [swiperInstance, setSwiperInstance] = useState(null)

    const _SlidesPerView = (
        xs ? slidesPerView :
            sm ? slidesPerView_sm :
                md ? slidesPerView_md :
                    lg ? slidesPerView_lg :
                        xl && slidesPerView_xl

    )

    const handleOnPrevClick = () => {
        swiperInstance?.slidePrev&&swiperInstance?.slidePrev()
    }

    const handleOnNextCLick = () => {
        swiperInstance?.slideNext&&swiperInstance?.slideNext()
    }

    const handleOnSlideChange = useCallback((swiper) => {
        if(showPrevNextButtons) {
            if(swiper?.isBeginning) {
                document.getElementById("previous-button").classList.add("!fill-white/30")
            }
            else if(swiper?.isEnd) {
                document.getElementById("next-button").classList.add("!fill-white/30")
            }
            else {
                const prevBtn = document.getElementById("previous-button")
                const nextBtn = document.getElementById("next-button")
    
                prevBtn.classList.contains("!fill-white/30")&&prevBtn.classList.remove("!fill-white/30")
                nextBtn.classList.contains("!fill-white/30")&&nextBtn.classList.remove("!fill-white/30")
            }
        }
    }, [showPrevNextButtons])

    useEffect(
        () => {
            if(swiperInstance?.slideTo) {
                setTimeout(() => {
                    swiperInstance.slideTo(0, 0, false)
                }, 300);
            }
        },
        [swiperInstance]
    )

    const handleOnSwiper = swiper => {
        console.log("swiper loaded");
        setSwiperInstance(swiper)
        if(swiper?.isBeginning) {
            additionalPrevButtonClasses.push("!fill-white/30")
        }
    }

    const PrevNextButtons = useMemo(
        () => {
            return (<div className="flex items-center gap-x-1">
                <div onClick={handleOnPrevClick} className="select-none hover:bg-white/[8%] active:scale-95 rounded-lg transition-all duration-200 cursor-pointer p-1.5">
                    <MdKeyboardArrowLeft id="previous-button" className={`transition-colors duration-200 w-4 h-4 fill-white ${additionalPrevButtonClasses.join(" ")}`} />
                </div>
                
                <div onClick={handleOnNextCLick} className="select-none hover:bg-white/[8%] active:scale-95 rounded-lg transition-all duration-200 cursor-pointer p-1.5">
                    <MdKeyboardArrowRight id="next-button" className={`transition-colors duration-200 w-4 h-4 fill-white ${additionalNextButtonClasses.join(" ")}`} />
                </div>
            </div>)
        },
        [swiperInstance, additionalPrevButtonClasses, additionalNextButtonClasses]
    )

    return (
        <div className="w-full">

            {/* section title */}
            <div className="flex items-center justify-between max-lg:px-6">
                <p className="text-base tracking-wide text-white font-[Raleway] font-semibold leading-7">{title}</p>

                {
                    showPrevNextButtons&&buttonsPlace==="tr"&&PrevNextButtons
                }

            </div>

            <Swiper
                onSwiper={handleOnSwiper}
                onSlideChange={handleOnSlideChange}
                spaceBetween={(window.innerWidth<=1024?(spaceBetween - 48):spaceBetween)}
                slidesPerView={_SlidesPerView}
                threshold={3}
                className={"mt-1 "+containerClass}
            >
                {
                    items.map(item => (
                        <SwiperSlide key={item.id} className="max-lg:px-6">
                            {
                                renderSlideTemplate(item)
                            }
                        </SwiperSlide>
                    ))
                }
                {
                    showSeeMore&&(
                        <SwiperSlide>
                            <div
                                style={{
                                    height:(typeof slideH==="string"?slideH:slideH+"px"),
                                    width:(typeof slideW==="string"?slideW:slideW+"px")
                                }}
                                className={`w-full flex items-center justify-center`}
                            >
                                <div className="flex items-center gap-x-1.5 p-2 rounded-lg hover:bg-white/[8%] transition-colors duration-300 cursor-pointer">
                                    <p className="text-white text-sm font-light leading-none font-[Lexend]">see more</p>
                                    <Image
                                        width={20}
                                        height={20}
                                        alt=""
                                        src={"/arrowRight.svg"}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>

            <div className="mt-1.5 flex items-center justify-between">
                
                {
                    showPrevNextButtons&&buttonsPlace==="br"
                    ?
                        (
                            <>
                                <div></div>
                                {PrevNextButtons}
                            </>
                        )
                    :
                        showPrevNextButtons&&buttonsPlace==="bl"
                        ?
                            (
                                <>
                                    {PrevNextButtons}
                                    <div></div>
                                </>
                            )
                        :
                            showPrevNextButtons&&buttonsPlace==="bc"&&(
                                <>
                                    <div></div>
                                    {PrevNextButtons}
                                    <div></div>
                                </>
                            )
                }

            </div>

        </div>
    )

}