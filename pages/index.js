import dynamic from "next/dynamic"
import ApplicationLayout from "@/components/ApplicationLayout"
import CTA from "@/components/CTA"
import StatusCard from "@/components/StatusCard"
import Image from "next/image"
import MovieCard_1 from "@/components/MovieCard_1"
import HeroBg from "@/components/HeroBg"
const HorizontalScrollableSection = dynamic(() => import("@/components/HorizontalScrollableSection"), {ssr: false})
import newMovies from "@/lib/db/newMovies"
import TvSeries from "@/lib/db/TvSeries"
import MovieCard_4 from "@/components/MovieCard_4"
import topTenMovies from "@/lib/db/topTenMovies"
import MovieCard_5 from "@/components/MovieCard_5"
import animations from "@/lib/db/animations"
import MovieCard_7 from "@/components/MovieCard_7"
import FeatureCard from "@/components/FeatureCard"
import Testimotional from "@/components/TestimotionalCard"
import TestiMotionals from "@/lib/db/TestiMotionals"
import Banners from "@/components/Banners"
const GenresSection = dynamic(() => import("@/components/GenresSection"), {ssr: false})
const FiltersSection = dynamic(() => import("@/components/FiltersSection"), {ssr: false})
const FiltersByGenresSection = dynamic(() => import("@/components/FiltersByGenreSection"), {ssr: false})
const HotMoviesSection = dynamic(() => import("@/components/HotMoviesSection"), {ssr: false})
const RecommendSection = dynamic(() => import("@/components/RecommendSection"), {ssr: false})
const MovieCard_3 = dynamic(() => import("@/components/MovieCard_3"), {ssr: false})
const SeriesCard_1 = dynamic(() => import("@/components/SeriesCard_1"), {ssr: false})


export default function HomePage() {

  return (
    <div className="w-full">

      
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
      <GenresSection />


      {/* filters section */}
      <FiltersSection />


      {/* filters bye genre */}
      <FiltersByGenresSection />



      {/* hot movies */}
      <HotMoviesSection />


      {/* Recommend section */}
      <RecommendSection />


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
      <div id="new-movies" className="w-full px-[25px] lg:px-[50px] mt-[34px]">
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
      <div id="series" className="w-full px-[25px] lg:px-[50px] mt-[34px]">
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
      <div className="w-full px-[25px] lg:px-[50px] mt-[34px]">
        <HorizontalScrollableSection
          title="Top Ten Movies"
          slideW={300}
          slideH={200}
          showSeeMoreW={150}
          showSeeMoreH={210}
          showSeeMore={true}
          showPrevNextButtons={false}
          slidesPerView="auto"
          slidesPerView_sm="auto"
          slidesPerView_md="auto"
          slidesPerView_lg="auto"
          slidesPerView_xl="auto"
          spaceBetween={25}
          renderSlideTemplate={item => <MovieCard_5 {...item} />}
          items={topTenMovies}
        />
      </div>

      <Banners />

      {/* Animations */}
      <div className="w-full px-[25px] lg:px-[50px] mt-[34px]">
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
      <div className="mt-[100px] lg:px-10 px-1 w-full max-w-6xl mx-auto overflow-x-auto">

        <HorizontalScrollableSection
          title=""
          slideW="300px"
          buttonsPlace="lr"
          showSeeMore={false}
          showPrevNextButtons={true}
          slidesPerView="auto"
          slidesPerView_sm="auto"
          slidesPerView_md="auto"
          slidesPerView_lg="auto"
          slidesPerView_xl="auto"
          spaceBetween={30}
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

      <div className="w-full max-md:max-w-xl max-lg:mx-auto mt-12 px-[25px] lg:px-[50px] flex flex-wrap items-center justify-evenly">

        <Image
          width={250}
          height={250}
          alt=""
          src="/cinema.svg"
          className="object-center object-cover w-24 h-24 lg:w-32 lg:h-32"
        />

          <div className="p-3 bg-white/5 rounded-lg max-w-lg max-md:hidden">
            <p className="text-white text-xs lg:text-sm leading-[18px] font-[Lexend] font-light line-clamp-6">
              Thank you for choosing our movie website as your go-to source for all things cinema. We're committed to providing the best possible experience for our users, and we hope you enjoy exploring our site!
            </p>
          </div>

        <Image
          width={250}
          height={250}
          alt=""
          src="/movie.svg"
          className="object-center object-cover w-24 h-24 lg:w-36 lg:h-36 max-md:ml-auto"
        />

          <div className="p-3 bg-white/5 rounded-lg max-w-lg md:hidden mt-4">
            <p className="text-white text-xs lg:text-sm leading-[18px] font-[Lexend] font-light line-clamp-6">
              Thank you for choosing our movie website as your go-to source for all things cinema. We're committed to providing the best possible experience for our users, and we hope you enjoy exploring our site!
            </p>
          </div>

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