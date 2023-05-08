import ActorsActressesList_1 from "@/components/ActorsActressesList_1"
import ApplicationLayout from "@/components/ApplicationLayout"
import HorizontalScrollableSection from "@/components/HorizontalScrollableSection"
import Imdb_1 from "@/components/Imdb_1"
import { AiOutlineHeart, AiOutlineClockCircle } from "react-icons/ai"
import { BsBookmarkPlus } from "react-icons/bs"
import { MdOutlineCalendarMonth } from "react-icons/md"
import SingleMovieSeriesImages from "@/components/SingleMovieSeriesImages"
import CommentCard_1 from "@/components/CommentCard_1"
import Image from "next/image"

function MovieCard({img}) {
    return (
        <Image
            width={300}
            height={300}
            alt=""
            src={img}
            className="object-center object-cover w-full h-full"
        />
    )
}


export default function SignleMoviePage() {

    return (
        <div>
            <div className="w-full mt-8 px-[25px] grid grid-cols-[30%_70%] max-w-7xl mx-auto">

                {/* left side */}
                <div className="pr-7">

                    <Image
                        width={720}
                        height={480}
                        alt=""
                        src="/movie-images/img1.jpg"
                        className="w-full h-96 object-center object-cover"
                    />

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
                                    name: "Sam Worthington",
                                    img: "/movie-images/img20.jpg"
                                },
                                {
                                    name: "Cliff Curtis",
                                    img: "/movie-images/img21.jpg"
                                },
                                {
                                    name: "Zoe Saldaña",
                                    img: "/movie-images/img22.jpeg"
                                },
                                {
                                    name: "Stephen Lang",
                                    img: "/movie-images/img23.jpg"
                                },
                                {
                                    name: "Kate Winslet",
                                    img: "/movie-images/img24.jpg"
                                },
                                {
                                    name: "CCH Pounder",
                                    img: "/movie-images/img25.jpg"
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
                            slidesPerView={1.4}
                            slidesPerView_sm={2}
                            slidesPerView_md={2.2}
                            slidesPerView_lg={2.2}
                            slidesPerView_xl={2.2}
                            renderSlideTemplate={item => <MovieCard {...item} />}
                            items={[
                                {
                                    img: "/movie-images/img31.jpg"
                                },
                                {
                                    img: "/movie-images/img32.jpg"
                                },
                                {
                                    img: "/movie-images/img33.jpg"
                                },
                            ]}
                        />
                    </div>

                </div>


                {/* right side */}
                <div className="pl-7">

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
                    <div className="w-full max-w-[280px] flex items-center justify-between mt-5">

                        <div className="flex items-center gap-x-1">
                            <AiOutlineClockCircle className="w-4 h-4 fill-red-500" />
                            <p className="text-white text-xs font-light tracking-wide font-[Lexend] leading-none">3 hr 12 min</p>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <MdOutlineCalendarMonth className="w-4 h-4 fill-red-500" />
                            <p className="text-white text-xs font-light tracking-wide font-[Lexend] leading-none">2023</p>
                        </div>

                    </div>

                    {/* images */}
                    <div className="mt-11 w-full">

                        <HorizontalScrollableSection
                             title=""
                             showSeeMore={false}
                             showPrevNextButtons={true}
                             slideW={100}
                             slideH={150}
                             spaceBetween={15}
                             slidesPerView={1.3}
                             slidesPerView_sm={2}
                             slidesPerView_md={2}
                             slidesPerView_lg={2}
                             slidesPerView_xl={2}
                             renderSlideTemplate={item => <SingleMovieSeriesImages {...item} />}
                             items={[
                                {
                                    img: "/movie-images/img1.jpg"
                                },
                                {
                                    img: "/movie-images/img2.jpg"
                                },
                                {
                                    img: "/movie-images/img3.jpg"
                                }
                             ]}
                        />

                    </div>

                    {/* summary */}
                    <p className="text-white text-sm font-semibold font-[Raleway] mt-8">Summary :</p>
                    <p className="text-white text-sm font-normal font-[Lexend] mt-2.5">
                        Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.
                    </p>


                    {/* comments */}

                    <div className="w-full border-b border-b-white/20 mt-12"></div>

                    <div className="mt-12 space-y-[50px]">
                        <CommentCard_1
                            date="4 Apr 2023"
                            username="Meredith Gusikowski"
                            content="You can hear tales told all over the world about how Gengar will pay a visit to children who are naughty. When hunting, Linoone will make a beeline straight for the prey at a full run."
                            like={1}
                            id={0}
                            img="/movie-images/thumbnails/img1.jpg"
                        />
                        <CommentCard_1
                            date="4 Apr 2023"
                            username="Meredith Gusikowski"
                            content="You can hear tales told all over the world about how Gengar will pay a visit to children who are naughty. When hunting, Linoone will make a beeline straight for the prey at a full run."
                            like={0}
                            id={1}
                            img="/movie-images/thumbnails/img2.jpg"
                        />
                    </div>

                    {/* load more comments button */}
                    <div className="w-max mx-auto mt-14">
                        <button
                            className="text-xs text-white bg-red-500 border-none outline-none focus:border-none
                            cursor-pointer px-9 py-2 rounded-sm font-[Lexend] font-light transition-transform active:scale-95 duration-200"
                        >
                            More
                        </button>
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