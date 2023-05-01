import ApplicationLayout from "@/components/ApplicationLayout"
import CTA from "@/components/CTA"
import FiltersWithDropDown from "@/components/FiltersWithDropDown"
import GenreCard from "@/components/GenreCard"
import StatusCard from "@/components/StatusCard"
import { calendar_svg, clapperboard_svg } from "@/lib/svg"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="pb-56">

      
      {/* hero section */}
      <div className="w-full min-h-screen relative">

        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#1E1E1E] to-[#1E1E1E]/5"></div>

        <Image
          alt=""
          width={1920}
          height={1080}
          src="/bg-desktop.png"
          className="object-center object-cover"
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-h-[50%] w-full px-[50px]
          grid grid-cols-2"
        >
          <div className="flex flex-col">
            <p className="text-4xl font-[Raleway] font-bold text-white max-w-xs">
              Let’s Make Your
            </p>
            <p className="text-4xl font-[Raleway] font-bold text-white max-w-xs">
              Own Cinema
            </p>

            <p className="text-sm text-white left-6 font-[Lexend] font-light text-opacity-90 mt-5 max-w-xs">
              You can still enjoy the latest movies and other movies online and at a lower price
            </p>

            <div className="mt-5 flex items-center gap-x-10">
              <CTA text="Get Started" />
              <CTA text="More" type="outline" />
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

        <div className="absolute bottom-0 translate-y-1/2 backdrop-blur-xl bg-transparent left-0 w-full h-16 bg-gradient-to-b from-transparent to-[#1E1E1E]/30"></div>
        
      </div>

      {/* Genres section */}
      <div
        className="w-full px-[50px] -translate-y-1/2 grid grid-cols-4 gap-x-[70px] gap-y-10"
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
      <div className="px-[50px] mt-[0px]">

        <FiltersWithDropDown
          items={
            [
              {
                key: 0,
                text: "Sort by Year",
                img: "/calendar.svg",
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