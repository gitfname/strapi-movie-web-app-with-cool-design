import GenreCard from "./GenreCard";

export default function GenresSection() {
    return (
        <div
            className="
            w-full z-10 px-[25px] md:px-[50px] md:-translate-y-20 lg:-translate-y-24 max-lg:mt-12
            grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 md:gap-x-[70px] gap-y-10
            "
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
    )
}