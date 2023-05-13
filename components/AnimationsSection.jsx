import animations from "@/lib/db/animations";
import HorizontalScrollableSection from "./HorizontalScrollableSection";
import MovieCard_7 from "./MovieCard_7";

export default function AnimationsSection() {
    return (
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
    )
}