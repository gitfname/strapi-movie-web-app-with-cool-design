import recommendMovies from "@/lib/db/recommendMovies";
import HorizontalScrollableSection from "./HorizontalScrollableSection";
import MovieCard_2 from "./MovieCard_2";

export default function RecommendSection() {
    return (
        <div className="mt-[34px] px-[25px] lg:px-[50px]">
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
    )
}