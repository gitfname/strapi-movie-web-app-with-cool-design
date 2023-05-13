import TvSeries from "@/lib/db/TvSeries";
import HorizontalScrollableSection from "./HorizontalScrollableSection";
import MovieCard_4 from "./MovieCard_4";

export default function TvSeriesSection() {
    return (
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
    )
}