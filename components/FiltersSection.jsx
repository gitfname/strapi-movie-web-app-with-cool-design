import FiltersWithDropDown from "./FiltersWithDropDown";

export default function FiltersSection() {
    return (
        <div className="md:px-[50px] overflow-hidden max-md:mt-12">

        <FiltersWithDropDown
          items={
            [
              {
                key: 0,
                text: "Sort by Year",
                img: "/calendar.svg",
                items: [
                  {
                    text: "2023 - 2022",
                  },
                  {
                    text: "2022 - 2021",
                  },
                  {
                    text: "2021 - 2020",
                  }
                ]
              },
              {
                key: 1,
                text: "Sort by Genre",
                img: "/more.svg",
                items: [
                  {
                    text: "Action",
                  },
                  {
                    text: "Adventure",
                  },
                  {
                    text: "Comedy",
                  }
                ]
              },
              {
                key: 2,
                text: "Sort by Rating",
                img: "/star1.svg",
                items: [
                  {
                    text: "10 - 5",
                  },
                  {
                    text: "5 - 0",
                  }
                ]
              },
              {
                key: 3,
                text: "Sort by Vote",
                img: "/like1.svg",
                items: [
                  {
                    text: "1000",
                  },
                  {
                    text: "900",
                  },
                  {
                    text: "800",
                  },
                  {
                    text: "700",
                  },
                  {
                    text: "600",
                  }
                ]
              }
            ]
          }
        />

      </div>
    )
}