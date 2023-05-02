import dynamic from "next/dynamic"
import ApplicationLayout from "@/components/ApplicationLayout"
import CTA from "@/components/CTA"
import FilterByeGenreTag from "@/components/FilterByeGenreTag"
import FiltersWithDropDown from "@/components/FiltersWithDropDown"
import GenreCard from "@/components/GenreCard"
import StatusCard from "@/components/StatusCard"
import Image from "next/image"
import { useEffect, useId } from "react"
import BScroll from "better-scroll"
import MovieCard_1 from "@/components/MovieCard_1"
const HorizontalScrollableSection = dynamic(() => import("@/components/HorizontalScrollableSection"), {ssr: false})

export default function HomePage() {

  const filtersByeTypeId = useId()

  useEffect(
    () => {
      const element = document.getElementById(filtersByeTypeId)
      const t = new BScroll(element, {
        bounce: {
          left: true,
          right: true
        },
        scrollY: false,
        scrollX: true,
        bounceTime: 500
      })
    },
    [filtersByeTypeId]
  )


  return (
    <div className="pb-28">

      
      {/* hero section */}
      <div className="w-full min-h-screen relative grid grid-cols-1 max-md:pb-8">

        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#1E1E1E] to-[#1E1E1E]/5"></div>


        <Image
          alt=""
          width={1920}
          height={1080}
          src="/bg-desktop.png"
          className="object-center object-cover h-full w-screen col-start-1 row-start-1"
        />

        <div
          className="z-10 relative w-full h-full px-[50px]
          grid gap-y-14 place-items-center md:grid-cols-2  col-start-1 row-start-1"
        >
          <div className="flex flex-col">
            <p className="text-3xl lg:text-4xl font-[Raleway] font-bold text-white max-w-xs">
              Let’s Make Your
            </p>
            <p className="text-3xl lg:text-4xl font-[Raleway] font-bold text-white max-w-xs">
              Own Cinema
            </p>

            <p className="text-xs lg:text-sm text-white left-6 font-[Lexend] font-light text-opacity-90 mt-5 max-w-xs">
              You can still enjoy the latest movies and other movies online and at a lower price
            </p>

            <div className="mt-5 flex items-center gap-x-10">
              <div className="flex-shrink-0">
                <CTA text="Get Started" />
              </div>
              <div className="flex-shrink-0">
                <CTA text="More" type="outline" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <StatusCard
              status={[
                {
                  img: <Image width={38} height={38} src="/clapperboard.svg" className="object-center object-cover" />,
                  title: "10.000",
                  subtitle: "Movie Choice"
                },
                {
                  img: <Image width={38} height={38} src="/film-reel.svg" className="object-center object-cover" />,
                  title: "Best Movies",
                },
                {
                  img: <Image width={38} height={38} src="/video-recording.svg" className="object-center object-cover" />,
                  title: "800 +",
                  subtitle: "Series Choice"
                }
              ]}
            />
          </div>

        </div>

        <div className="md:translate-y-1/2 absolute block bottom-0 bg-transparent backdrop-blur-xl left-0 w-full h-16 bg-gradient-to-b from-transparent to-[#1E1E1E]/30"></div>
        
      </div>

      {/* Genres section */}
      <div
        className="w-full z-10 px-[25px] md:px-[50px] md:-translate-y-20 lg:-translate-y-24 max-lg:mt-12 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 md:gap-x-[70px] gap-y-10
        "
      >

        <GenreCard
          img="/alien.svg"
          title="Science fiction"
          subtitle="800+ Movies"
        />

        <GenreCard
          img="/classic.svg"
          title="Classic"
          subtitle="750+ Movies"
        />

        <GenreCard
          img="/horror.svg"
          title="Horror"
          subtitle="680+ Movies"
        />

        <GenreCard
          img="/mistery.svg"
          title="Mystery"
          subtitle="730+ Movies"
        />

        <GenreCard
          img="/musical.svg"
          title="Musical"
          subtitle="550+ Movies"
        />

        <GenreCard
          img="/romance.svg"
          title="Romance"
          subtitle="920+ Movies"
        />

        <GenreCard
          img="/war.svg"
          title="War"
          subtitle="880+ Movies"
        />

        <GenreCard
          img="/western.svg"
          title="Western"
          subtitle="700+ Movies"
        />

      </div>


      {/* filters section */}
      <div className="md:px-[50px] overflow-hidden max-md:mt-12">

        <FiltersWithDropDown
          items={
            [
              {
                key: 0,
                text: "Sort by Year",
                img: "/calendar.svg",
                observe: true,
                items: [
                  {
                    text: "2023 - 2022",
                  },
                  {
                    text: "2022 - 2021",
                  },
                  {
                    text: "2021 - 2020",
                  }
                ]
              },
              {
                key: 1,
                text: "Sort by Genre",
                img: "/more.svg",
                observe: false,
                items: [
                  {
                    text: "Action",
                  },
                  {
                    text: "Adventure",
                  },
                  {
                    text: "Comedy",
                  }
                ]
              },
              {
                key: 2,
                text: "Sort by Rating",
                img: "/star1.svg",
                observe: false,
                items: [
                  {
                    text: "10 - 5",
                  },
                  {
                    text: "5 - 0",
                  }
                ]
              },
              {
                key: 3,
                text: "Sort by Vote",
                img: "/like1.svg",
                observe: false,
                items: [
                  {
                    text: "1000",
                  },
                  {
                    text: "900",
                  },
                  {
                    text: "800",
                  },
                  {
                    text: "700",
                  },
                  {
                    text: "600",
                  }
                ]
              }
            ]
          }
        />

      </div>


      {/* filters bye genre */}
      <div id={filtersByeTypeId} className="px-[10px] md:w-11/12 mx-auto overflow-hidden mt-5">
        <div className="w-max flex items-center flex-nowrap gap-x-3">
          <FilterByeGenreTag text="All" active />
          <FilterByeGenreTag text="Genre" />
          <FilterByeGenreTag text="Popular" />
          <FilterByeGenreTag text="Recommened" />
          <FilterByeGenreTag text="New" />
          <FilterByeGenreTag text="Series" />
          <FilterByeGenreTag text="Top Ten" />
          <FilterByeGenreTag text="Animation" />
          <FilterByeGenreTag text="Archive" />
        </div>
      </div>


      {/* hot movies */}
      <div className="mt-[34px] lg:px-[50px]">
        <HorizontalScrollableSection
          title="Hot Movies"
          showSeeMore={true}
          slideH={195}
          slidesPerView={2}
          slidesPerView_sm={2}
          slidesPerView_md={3}
          slidesPerView_lg={3}
          renderSlideTemplate={item => <MovieCard_1 {...item}/>}
          items={[
            {
              id: "0",
              title: "movie-1",
              desc: "movie-1 description and with other text is goes here",
              img: {
                width: 500,
                height: 400,
                src: "/movie-images/img1.jpg"
              },
              width: "100%",
              height: 195,
              date: {
                year: "2023",
                month: "03",
                dat: "11",
                total: "2023/03/11"
              },
              pageLink: "http://example.com/movie-1details",
            },
            {
              id: "1",
              title: "movie-2",
              desc: "movie-2 description and with other text is goes here",
              img: {
                width: 500,
                height: 400,
                src: "/movie-images/img2.jpg"
              },
              width: "100%",
              height: 195,
              date: {
                year: "2023",
                month: "11",
                dat: "03",
                total: "2023/11/03"
              },
              pageLink: "http://example.com/movie-2-details"
            },
            {
              id: "2",
              title: "movie-3",
              desc: "movie-3 description and with other text is goes here",
              img: {
                width: 500,
                height: 400,
                src: "/movie-images/img3.jpg"
              },
              width: "100%",
              height: 195,
              date: {
                year: "2022",
                month: "05",
                dat: "04",
                total: "2022/05/04"
              },
              pageLink: "http://example.com/movie-3-details"
            },
            {
              id: "3",
              title: "movie-4",
              desc: "movie-4 description and with other text is goes here",
              img: {
                width: 500,
                height: 400,
                src: "/movie-images/img4.jpg"
              },
              width: "100%",
              height: 195,
              date: {
                year: "2023",
                month: "01",
                dat: "19",
                total: "2023/01/19"
              },
              pageLink: "http://example.com/movie-4-details"
            },
            {
              id: "4",
              title: "movie-5",
              desc: "movie-5 description and with other text is goes here",
              img: {
                width: 500,
                height: 400,
                src: "/movie-images/img5.jpeg"
              },
              width: "100%",
              height: 195,
              date: {
                year: "2023",
                month: "05",
                dat: "21",
                total: "2023/05/21"
              },
              pageLink: "http://example.com/movie-5-details"
            },
          ]}
        />
      </div>

    </div>
  )
}

HomePage.getLayout = page => {
  return (
    <ApplicationLayout>
      {page}
    </ApplicationLayout>
  )
}