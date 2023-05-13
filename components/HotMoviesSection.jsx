import HorizontalScrollableSection from "./HorizontalScrollableSection";
import MovieCard_1 from "./MovieCard_1";

export default function HotMoviesSection() {
    return (
        <div id="movies" className="mt-[34px] px-[25px] lg:px-[50px]">
            <HorizontalScrollableSection
            title="Hot Movies"
            spaceBetween={20}
            showSeeMore={true}
            showPrevNextButtons={false}
            slideH={195}
            slidesPerView={1}
            slidesPerView_sm={2}
            slidesPerView_md={3}
            slidesPerView_lg={3}
            slidesPerView_xl={4}
            renderSlideTemplate={item => <MovieCard_1 {...item}/>}
            items={[
                {
                id: "0",
                title: "movie-1",
                desc: "movie-1 description and with other text is goes here",
                img: {
                    width: 500,
                    height: 400,
                    src: "/movie-images/production/img1.avif"
                },
                width: "100%",
                height: 195,
                date: {
                    year: "2023",
                    month: "03",
                    dat: "11",
                    total: "2023/03/11"
                },
                pageLink: "http://example.com/movie-1details",
                },
                {
                id: "1",
                title: "movie-2",
                desc: "movie-2 description and with other text is goes here",
                img: {
                    width: 500,
                    height: 400,
                    src: "/movie-images/production/img24.avif"
                },
                width: "100%",
                height: 195,
                date: {
                    year: "2023",
                    month: "11",
                    dat: "03",
                    total: "2023/11/03"
                },
                pageLink: "http://example.com/movie-2-details"
                },
                {
                id: "2",
                title: "movie-3",
                desc: "movie-3 description and with other text is goes here",
                img: {
                    width: 500,
                    height: 400,
                    src: "/movie-images/production/img25.avif"
                },
                width: "100%",
                height: 195,
                date: {
                    year: "2022",
                    month: "05",
                    dat: "04",
                    total: "2022/05/04"
                },
                pageLink: "http://example.com/movie-3-details"
                },
                {
                id: "3",
                title: "movie-4",
                desc: "movie-4 description and with other text is goes here",
                img: {
                    width: 500,
                    height: 400,
                    src: "/movie-images/production/img26.avif"
                },
                width: "100%",
                height: 195,
                date: {
                    year: "2023",
                    month: "01",
                    dat: "19",
                    total: "2023/01/19"
                },
                pageLink: "http://example.com/movie-4-details"
                },
                {
                id: "4",
                title: "movie-5",
                desc: "movie-5 description and with other text is goes here",
                img: {
                    width: 500,
                    height: 400,
                    src: "/movie-images/production/img29.avif"
                },
                width: "100%",
                height: 195,
                date: {
                    year: "2023",
                    month: "05",
                    dat: "21",
                    total: "2023/05/21"
                },
                pageLink: "http://example.com/movie-5-details"
                },
            ]}
            />
      </div>
    )
}