import ApplicationLayout from "@/components/ApplicationLayout"
import Image from "next/image"

export default function HomePage() {
  return (
    <div>

      <div className="w-full h-screen relative">
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#1E1E1E] to-[#1E1E1E]/5"></div>
        <Image
          width={1920}
          height={1080}
          src="/bg-desktop.png"
          className="object-center object-cover"
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