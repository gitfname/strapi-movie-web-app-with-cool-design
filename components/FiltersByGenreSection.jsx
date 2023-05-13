import FilterByeGenreTag from "@/components/FilterByeGenreTag"
import { useEffect, useId } from "react"
import BScroll from "better-scroll"

export default function FiltersByGenresSection() {
    const filtersByeTypeId = useId()
    let bscrollInstance = null

    useEffect(
      () => {
        const element = document.getElementById(filtersByeTypeId)
        bscrollInstance = new BScroll(element, {
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
    )
}