import newMovies from "@/lib/db/newMovies";
import HorizontalScrollableSection from "./HorizontalScrollableSection";
import MovieCard_1 from "./MovieCard_1";

export default function NewMoviesSection() {
    return (
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
    )
}