import topTenMovies from "@/lib/db/topTenMovies";
import HorizontalScrollableSection from "./HorizontalScrollableSection";
import MovieCard_5 from "./MovieCard_5";

export default function TopTenMoviesSection() {
    return (
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
    )
}