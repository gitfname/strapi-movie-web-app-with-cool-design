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
import HeroBg from "@/components/HeroBg"
import MovieCard_2 from "@/components/MovieCard_2"
const HorizontalScrollableSection = dynamic(() => import("@/components/HorizontalScrollableSection"), {ssr: false})
import recommendMovies from "@/lib/db/recommendMovies"
import MovieCard_3 from "@/components/MovieCard_3"
import SeriesCard_1 from "@/components/SeriesCard_1"
import newMovies from "@/lib/db/newMovies"
import TvSeries from "@/lib/db/TvSeries"
import MovieCard_4 from "@/components/MovieCard_4"
import topTenMovies from "@/lib/db/topTenMovies"
import MovieCard_5 from "@/components/MovieCard_5"
import MovieCard_6 from "@/components/MovieCard_6"
import SeriesCard_2 from "@/components/SeriesCard_2"
import animations from "@/lib/db/animations"
import MovieCard_7 from "@/components/MovieCard_7"
import FeatureCard from "@/components/FeatureCard"
import Testimotional from "@/components/TestimotionalCard"
import TestiMotionals from "@/lib/db/TestiMotionals"
import Footer from "@/components/Footer"

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
    <div>

      
      {/* hero section */}
      <div className="w-full h-max relative grid grid-cols-1 max-md:pb-8">

        {/*  */}
        <div className="col-start-1 row-start-1">
          <HeroBg />
        </div>

        <div
          className="z-10 relative w-full h-max lg:px-[50px] max-md:pt-20 lg:pt-36
          grid gap-y-10 md:grid-cols-2  col-start-1 row-start-1"
        >
          <div className="flex flex-col items-start w-full max-md:pl-[31px]">
            <p className="text-3xl lg:text-4xl font-[Raleway] font-bold text-white max-w-xs">
              Let’s Make Your
            </p>
            <p className="text-3xl lg:text-4xl font-[Raleway] font-bold text-white max-w-xs">
              Own Cinema
            </p>

            <p className="text-xs lg:text-sm text-white left-6 font-[Lexend] font-light text-opacity-90 mt-5 max-w-xs">
              You can still enjoy the latest movies and other movies online and at a lower price
            </p>

            <div className="mt-5 flex items-center gap-x-3.5">
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
                  img: <Image alt="" width={38} height={38} src="/clapperboard.svg" className="object-center object-cover" />,
                  title: "10.000",
                  subtitle: "Movie Choice"
                },
                {
                  img: <Image alt="" width={38} height={38} src="/film-reel.svg" className="object-center object-cover" />,
                  title: "Best Movies",
                },
                {
                  img: <Image alt="" width={38} height={38} src="/video-recording.svg" className="object-center object-cover" />,
                  title: "800 +",
                  subtitle: "Series Choice"
                }
              ]}
            />
          </div>

        </div>
        
      </div>

      {/* Genres section */}
      <div
        className="
          w-full z-10 px-[25px] md:px-[50px] md:-translate-y-20 lg:-translate-y-24 max-lg:mt-12
          grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 md:gap-x-[70px] gap-y-10
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
      <div id={filtersByeTypeId} className="p-0.5 max-lg:w-[calc(100%-48px)] md:px-[50px] mx-auto overflow-hidden mt-5">
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
          showPrevNextButtons={false}
          slideH={195}
          slidesPerView={1}
          slidesPerView_sm={2}
          slidesPerView_md={3}
          slidesPerView_lg={3}
          slidesPerView_xl={4}
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


      {/* Recommend section */}
      <div className="mt-[34px] lg:px-[50px]">
        <HorizontalScrollableSection
          title="Recommend"
          showSeeMore={false}
          showPrevNextButtons={true}
          slidesPerView={2}
          slidesPerView_sm={3}
          slidesPerView_md={4}
          slidesPerView_lg={6}
          slidesPerView_xl={6}
          spaceBetween={25}
          renderSlideTemplate={item => <MovieCard_2 {...item} />}
          items={recommendMovies}
        />
      </div>


      <div className="mt-2 px-[25px] lg:px-[50px] grid gap-y-6 grid-cols-1 grid-rows-[240px_240px] lg:grid-rows-1 lg:grid-cols-[65%_1fr] lg:h-[260px] gap-x-9">
        <MovieCard_3
          width="100%"
          height="100%"
          img={{
            width: 720,
            height: 480,
            src: "/movie-images/img1.jpg"
          }}
          title="Oppenheimer"
          date="Jul 19, 2023"
          desc="The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II."
        />

        <SeriesCard_1
          height="100%"
          img={{
            width: 720,
            height: 480,
            src: "/movie-images/img53.jpg"
          }}
          title="The Last Thing He Told Me"
          date="Apr 13, 2023"
          episodesCount={11}
        />
      </div>

      
      {/* new movies */}
      <div className="w-full lg:px-[50px] mt-[34px]">
        <HorizontalScrollableSection
          title="New Movies"
          showSeeMore={false}
          slideW={400}
          showPrevNextButtons={false}
          slidesPerView={1.2}
          slidesPerView_sm={2}
          slidesPerView_md={3}
          slidesPerView_lg={4}
          slidesPerView_xl={5}
          spaceBetween={25}
          renderSlideTemplate={item => <MovieCard_1 {...item} />}
          items={newMovies}
        />
      </div>


      {/* Tv Series */}
      <div className="w-full lg:px-[50px] mt-[34px]">
        <HorizontalScrollableSection
          title="Tv Series"
          showSeeMore={false}
          showPrevNextButtons={true}
          slidesPerView={1.4}
          slidesPerView_sm={3}
          slidesPerView_md={4}
          slidesPerView_lg={5}
          slidesPerView_xl={6}
          spaceBetween={25}
          renderSlideTemplate={item => <MovieCard_4 {...item} />}
          items={TvSeries}
        />
      </div>


      {/* Top Ten Movies */}
      <div className="w-full lg:px-[50px] mt-[34px]">
        <HorizontalScrollableSection
          title="Top Ten Movies"
          slideW={200}
          slideH={220}
          showSeeMoreW={150}
          showSeeMoreH={210}
          showSeeMore={true}
          showPrevNextButtons={false}
          slidesPerView={1.2}
          slidesPerView_sm={2}
          slidesPerView_md={3}
          slidesPerView_lg={4}
          slidesPerView_xl={5}
          spaceBetween={25}
          renderSlideTemplate={item => <MovieCard_5 {...item} />}
          items={topTenMovies}
        />
      </div>

      
      <div className="mt-11 px-[25px] lg:px-[50px] grid gap-y-6 grid-cols-1 max-md:grid-rows-[220px_220px] lg:grid-rows-1 md:grid-cols-[1fr_65%] lg:h-[240px] gap-x-9">
        <MovieCard_6
          text_tl="Apr 05, 2023"
          text_tr="1 hr 32 min"
          text_bl="The Super Mario Bros"
          height="100%"
          img={{
            width: 720,
            height: 480,
            src: "/movie-images/img4.jpg"
          }}
        />

        <SeriesCard_2
          width="100%"
          height="100%"
          img={{
            width: 720,
            height: 480,
            src: "/movie-images/img1.jpg"
          }}
          title="Oppenheimer"
          episodesCount={10}
          date={{
            year:"2023"
          }}
          desc="The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II."
        />
      </div>


      {/* Animations */}
      <div className="w-full lg:px-[50px] mt-[34px]">
        <HorizontalScrollableSection
          title="Animations"
          slideH="100%"
          slideW={230}
          showSeeMore={false}
          showPrevNextButtons={true}
          slidesPerView={1.3}
          slidesPerView_sm={2}
          slidesPerView_md={3}
          slidesPerView_lg={5}
          slidesPerView_xl={5}
          spaceBetween={25}
          renderSlideTemplate={item => <MovieCard_7 {...item} />}
          items={animations}
        />
      </div>


      <div className="w-full mt-[100px] flex items-center gap-x-1.5 justify-center">
        <Image
          width={60}
          height={60}
          alt=""
          src="/pop-corn.svg"
          className="object-center object-cover"
        />
        
        <p className="text-xl text-white font-bold font-[Raleway] leading-none">Best Features</p>
      </div>

      <p className="text-white/80 text-sm xl:text-base px-8 text-center max-w-prose font-light font-[Lexend] mx-auto mt-[30px]">
        Experience the excitement of cinema from the comfort of your own screen, with the best features all in one place!
      </p>


      {/* Features Section */}
      <div className="mt-[60px] flex max-md:flex-col items-stretch gap-14 max-md:items-center justify-center px-10">
        <FeatureCard
          title="Official Movies"
          desc="Experience the legitimacy, quality, and magic of Official Movies"
          img="/medal-star.svg"
        />

        <FeatureCard
          title="Best Choose"
          desc="Find Your Perfect Match with Our Varied Movie Selection"
          img="/magicpen.svg"
        />

        <FeatureCard
          title="Greatest Archive"
          desc="Unlock a World of Cinematic Treasures with Our Great Movie Archive"
          img="/direct.svg"
        />

      </div>


      {/* TestiMotionals */}
      {/* <div className="mt-[100px] grid grid-cols-1 md:grid-cols-3 w-10/12 sm:w-8/12 md:w-11/12 mx-auto gap-20 max-w-6xl"> */}
      <div className="mt-[100px] w-full px-2 lg:px-[160px] max-w-6xl mx-auto">

        <HorizontalScrollableSection
          title=""
          buttonsPlace="lr"
          showSeeMore={false}
          showPrevNextButtons={true}
          slidesPerView={1}
          slidesPerView_sm={2}
          slidesPerView_md={3}
          slidesPerView_lg={3}
          slidesPerView_xl={3}
          spaceBetween={60}
          renderSlideTemplate={item => <Testimotional {...item} />}
          items={TestiMotionals}
        />

      </div>

      <p className="text-xl text-white font-bold font-[Raleway] text-center tracking-wide mt-16">
        About US
      </p>

      <div className="mt-9 w-full px-[25px] flex flex-col items-center justify-center lg:grid lg:grid-cols-[65%_1fr] max-w-6xl mx-auto">

        <div className="max-lg:flex flex-col items-center justify-center">

          <div className="p-3 bg-white/5 rounded-lg max-w-lg">
            <p className="text-white text-xs lg:text-sm leading-[18px] font-[Lexend] font-light line-clamp-6">
              Welcome to our movie website, where you'll find everything you need to know about the latest movies and upcoming releases. We offer an extensive selection of trailers, reviews, and behind-the-scenes content that will keep you informed and entertained.
            </p>
          </div>

          <div className="lg:hidden w-max">
            <Image
              width={250}
              height={250}
              alt=""
              src="/3D glasses-rafiki.svg"
              className="object-center object-cover max-md:w-full w-72 h-60 -translate-y-14"
            />
          </div>

          <div className="p-3 bg-white/5 rounded-lg max-w-xl lg:mt-[12px] max-lg:-translate-y-6">
            <p className="text-white text-xs lg:text-sm leading-[18px] font-[Lexend] font-light line-clamp-6">              
              Our website is designed with the user in mind, providing easy navigation and a clean, modern design. You can browse by genre or search for specific titles using our intuitive search function.
              Once you've found the movie you're interested in, you can read reviews from other users, watch trailers, and get all the information you need to make an informed decision about whether to see it.
            </p>
          </div>

        </div>

        <div className="max-lg:hidden">
          <Image
            width={250}
            height={250}
            alt=""
            src="/3D glasses-rafiki.svg"
            className="object-center object-cover w-80 h-60 -translate-y-14"
          />
        </div>


      </div>

      <div className="lg:mt-9 w-full px-[25px] flex flex-col items-center justify-center lg:grid lg:grid-cols-[1fr_65%] max-w-6xl mx-auto">
        
        <Image
          width={250}
          height={250}
          alt=""
          src="/3D glasses-amico.svg"
          className="object-center object-cover w-64 h-64 max-lg:hidden lg:mx-auto"
        />

        <div className="flex flex-col items-end max-lg:items-center">

          <div className="p-3 bg-white/5 rounded-lg max-w-lg">
            <p className="text-white text-xs lg:text-sm leading-[18px] font-[Lexend] font-light line-clamp-6">
              We also offer exclusive content and interviews with actors and directors, giving you an inside look at the making of some of your favorite films. Whether you're a casual movie-goer or a die-hard cinephile, our website has something for everyone.
            </p>
          </div>
        
          <Image
            width={250}
            height={250}
            alt=""
            src="/3D glasses-amico.svg"
            className="object-center object-cover w-64 h-64 lg:hidden"
          />

          <div className="p-3 bg-white/5 rounded-lg max-w-lg mt-[12px]">
            <p className="text-white text-xs lg:text-sm leading-[18px] font-[Lexend] font-light line-clamp-6">
              In addition to our features and content, we offer targeted advertising opportunities for businesses looking to reach our highly engaged audience. Our ad options include display ads, sponsored content, and native advertising, all of which can be customized to fit your brand's unique needs.
            </p>
          </div>

        </div>

      </div>


      <div className="mt-[79px] w-full">
        <Footer />
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