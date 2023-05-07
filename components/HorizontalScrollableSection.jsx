import { useCallback, useEffect, useId, useMemo, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"
import "swiper/css"
import "swiper/css/free-mode"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import Image from "next/image"
import { useMediaQuery } from "@chakra-ui/react"




export default function HorizontalScrollableSection({
    items=[], title, showSeeMore=false, containerClass, buttonsPlace="tr",
    slideW="full", slideH="full", spaceBetween=40, slidesPerView=1, slidesPerView_sm=null,
    slidesPerView_md=null, slidesPerView_lg=null, slidesPerView_xl=null, renderSlideTemplate, showPrevNextButtons=true,
    showSeeMoreW="100%", showSeeMoreH="100%"
}) {

    const prevBtnId = useId()
    const nextBtnId = useId()

    // const [xs, sm, md, lg, xl] = useMediaQuery([
    //     "(max-width: 640px)",
    //     "(min-width: 641px) and (max-width: 768px)",
    //     "(min-width: 769px) and (max-width: 1024px)",
    //     "(min-width: 1025px) and (max-width: 1280px)",
    //     "(min-width: 1281px)",
    // ])

    const [additionalPrevButtonClasses, setAdditionalPrevButtonClasses] = useState([])
    const [additionalNextButtonClasses, setAdditionalNextButtonClasses] = useState([])
    const [swiperInstance, setSwiperInstance] = useState(null)

    // const _SlidesPerView = (
    //     xs ? slidesPerView :
    //         sm ? slidesPerView_sm :
    //             md ? slidesPerView_md :
    //                 lg ? slidesPerView_lg :
    //                     xl && slidesPerView_xl

    // )

    const handleOnPrevClick = () => {
        swiperInstance?.slidePrev&&swiperInstance?.slidePrev()
    }

    const handleOnNextCLick = () => {
        swiperInstance?.slideNext&&swiperInstance?.slideNext()
    }

    const handleOnSlideChange = useCallback((swiper) => {
        if(showPrevNextButtons) {
            if(swiper?.isBeginning) {
                document.getElementById(prevBtnId).classList.add("!fill-white/30")
            }
            else if(swiper?.isEnd) {
                document.getElementById(nextBtnId).classList.add("!fill-white/30")
            }
            else {
                const prevBtn = document.getElementById(prevBtnId)
                const nextBtn = document.getElementById(nextBtnId)
    
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
        setSwiperInstance(swiper)
        if(swiper?.isBeginning) {
            additionalPrevButtonClasses.push("!fill-white/30")
        }
    }

    const PrevNextButtons = useMemo(
        () => {
            return (<div className="flex items-center gap-x-1">
                <div onClick={handleOnPrevClick} className="select-none hover:bg-white/[8%] active:scale-95 rounded-lg transition-all duration-200 cursor-pointer p-1.5">
                    <MdKeyboardArrowLeft id={prevBtnId} className={`transition-colors duration-200 w-4 h-4 fill-white ${additionalPrevButtonClasses.join(" ")}`} />
                </div>
                
                <div onClick={handleOnNextCLick} className="select-none hover:bg-white/[8%] active:scale-95 rounded-lg transition-all duration-200 cursor-pointer p-1.5">
                    <MdKeyboardArrowRight id={nextBtnId} className={`transition-colors duration-200 w-4 h-4 fill-white ${additionalNextButtonClasses.join(" ")}`} />
                </div>
            </div>)
        },
        [swiperInstance, additionalPrevButtonClasses, additionalNextButtonClasses]
    )

    const PrevButton = useMemo(
        () => {
            return (
                <div onClick={handleOnPrevClick} className="select-none hover:bg-white/[8%] active:scale-95 rounded-lg transition-all duration-200 cursor-pointer p-1.5">
                    <MdKeyboardArrowLeft id={prevBtnId} className={`transition-colors duration-200 w-4 h-4 fill-white ${additionalPrevButtonClasses.join(" ")}`} />
                </div>
            )
        },
        [swiperInstance, additionalPrevButtonClasses]
    )

    const NextButton = useMemo(
        () => {
            return (
                <div onClick={handleOnNextCLick} className="select-none hover:bg-white/[8%] active:scale-95 rounded-lg transition-all duration-200 cursor-pointer p-1.5">
                    <MdKeyboardArrowRight id={nextBtnId} className={`transition-colors duration-200 w-4 h-4 fill-white ${additionalNextButtonClasses.join(" ")}`} />
                </div>
            )
        },
        [swiperInstance, additionalNextButtonClasses]
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

            <div className="flex gap-x-1">
                {
                    buttonsPlace==="lr"&&(
                        <div className="w-11 self-stretch grid place-items-center">
                            {
                                showPrevNextButtons&&PrevButton
                            }
                        </div>
                    )
                }

                <Swiper
                    modules={[FreeMode]}
                    freeMode
                    onSwiper={handleOnSwiper}
                    onSlideChange={handleOnSlideChange}
                    spaceBetween={(spaceBetween - 48)}
                    slidesPerView={slidesPerView}
                    threshold={3}
                    breakpoints={{
                        640: {
                            slidesPerView: slidesPerView_sm
                        },
                        768: {
                            slidesPerView: slidesPerView_md
                        },
                        1024: {
                            slidesPerView: slidesPerView_lg,
                            spaceBetween: spaceBetween
                        },
                        1280: {
                            slidesPerView: slidesPerView_xl
                        },
                    }}
                    className={"mt-1 "+containerClass}
                >
                    {
                        items.map(item => (
                            <SwiperSlide
                            style={{
                                width:(typeof slideW==="string"?slideW:slideW+"px"),
                                height:(typeof slideH==="string"?slideH:slideH+"px")
                            }}
                            key={item.id} className="max-lg:px-6">
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
                                        height:(typeof showSeeMoreH==="string"?showSeeMoreH:showSeeMoreH+"px"),
                                        width:(typeof showSeeMoreW==="string"?showSeeMoreW:showSeeMoreW+"px")
                                    }}
                                    className={`border w-max m-0 p-0 flex items-center justify-center`}
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
                {
                    buttonsPlace==="lr"&&(
                        <div className="w-11 self-stretch grid place-items-center">
                            {
                                showPrevNextButtons&&NextButton
                            }
                        </div>
                    )
                }
            </div>


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