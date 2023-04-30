import ApplicationLayout from "@/components/ApplicationLayout"
import CTA from "@/components/CTA"
import StatusCard from "@/components/StatusCard"
import { clapperboard_svg } from "@/lib/svg"
import Image from "next/image"

export default function HomePage() {
  return (
    <div>

      <div className="w-full h-screen relative">

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
            <p className="text-3xl font-[Raleway] font-semibold text-white max-w-xs">
              Let’s Make Your
            </p>
            <p className="text-3xl font-[Raleway] font-semibold text-white max-w-xs">
              Own Cinema
            </p>

            <p className="text-sm text-white left-6 font-[Lexend] font-light text-opacity-90 mt-5 max-w-xs">
              You can still enjoy the latest movies and other movies online and at a lower price
            </p>

            <div className="mt-5 flex items-center gap-x-2">
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