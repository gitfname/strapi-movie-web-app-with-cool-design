import ActorsActressesList_1 from "@/components/ActorsActressesList_1"
import ApplicationLayout from "@/components/ApplicationLayout"
import HorizontalScrollableSection from "@/components/HorizontalScrollableSection"
import Imdb_1 from "@/components/Imdb_1"
import { AiOutlineHeart, AiOutlineClockCircle } from "react-icons/ai"
import { BsBookmarkPlus } from "react-icons/bs"
import { MdOutlineCalendarMonth } from "react-icons/md"


function MovieCard() {
    return (
        <div className="w-full h-full bg-red-300">

        </div>
    )
}


export default function SignleMoviePage() {
    return (
        <div>
            <div className="w-full mt-8 px-[25px] lg:px-[50px] grid grid-cols-[310px_1fr] gap-x-16">

                {/* left side */}
                <div className="">

                    <div className="w-full h-96 bg-red-400"></div>

                    <div className="flex items-center justify-between mt-8">
                        <p className="text-sm text-white font-normal font-[Raleway] tracking-wide">
                            Director : <span className="text-white text-sm font-normal font-[Lexend] tracking-wide">director name</span>
                        </p>
                        <div className="flex-shrink-0">
                            <Imdb_1 score="7 / 10" />
                        </div>
                    </div>

                    <div className="w-full mt-8">

                        <p className="text-white text-xs font-semibold font-[Lexend] mb-3">Actors & Actresses</p>
                        
                        <ActorsActressesList_1
                            items={[
                                {
                                    name: "actor-1 "
                                },
                                {
                                    name: "actor-2"
                                },
                                {
                                    name: "actress-1"
                                },
                                {
                                    name: "actress-2"
                                },
                                {
                                    name: "actor-3"
                                },
                                {
                                    name: "actress-3"
                                },
                                {
                                    name: "actor-4"
                                }
                            ]}
                        />
                    </div>

                    <div className="w-full mt-8">
                        <p className="text-white text-xs font-semibold font-[Lexend] mb-3">More Like This</p>

                        <HorizontalScrollableSection
                            title=""
                            showSeeMore={false}
                            showPrevNextButtons={false}
                            slideW={100}
                            slideH={150}
                            spaceBetween={15}
                            slidesPerView={3}
                            slidesPerView_sm={3}
                            slidesPerView_md={3}
                            slidesPerView_lg={3}
                            slidesPerView_xl={3}
                            renderSlideTemplate={item => <MovieCard />}
                            items={[1,2,4,5,6,7]}
                        />
                    </div>

                </div>


                {/* right side */}
                <div className="border">

                    {/* movie - series title */}
                    <div className="flex items-center justify-between pr-12">

                        <p className="capitalize text-white text-xl font-bold font-[Raleway] tracking-wide">avatar: the of water</p>

                        <div className="flex items-center gap-x-2">
                            <AiOutlineHeart className="w-5 h-5 fill-red-500" />
                            <BsBookmarkPlus className="w-5 h-5 fill-red-500" />
                        </div>

                    </div>

                    {/* genres */}
                    <div className="mt-3 flex items-center gap-2.5 flex-wrap">
                        <p className="border border-red-500/50 p-0.5 px-1 text-red-500/50 rounded tracking-wide text-xs font-light font-[Lexend]">
                            Adventure
                        </p>
                        <p className="border border-red-500/50 p-0.5 px-1 text-red-500/50 rounded tracking-wide text-xs font-light font-[Lexend]">
                            Drama
                        </p>
                        <p className="border border-red-500/50 p-0.5 px-1 text-red-500/50 rounded tracking-wide text-xs font-light font-[Lexend]">
                            Action
                        </p>
                    </div>

                    {/* duration */}
                    <div className="w-full max-w-xs flex items-center justify-between mt-5">

                        <div className="flex items-center gap-x-1">
                            <AiOutlineClockCircle className="w-4 h-4 fill-red-500" />
                            <p className="text-white text-xs font-light tracking-wide font-[Lexend] leading-none">3 hr 12 min</p>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <MdOutlineCalendarMonth className="w-4 h-4 fill-red-500" />
                            <p className="text-white text-xs font-light tracking-wide font-[Lexend] leading-none">2023</p>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

SignleMoviePage.getLayout = page => (
    <ApplicationLayout>
        {page}
    </ApplicationLayout>
)