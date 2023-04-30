
export default function StatusCard({status=[], containerClass, itemClass}) {
    return (
        <div
            className={
                `relative w-64 rounded-sm bg-[#D9D9D9]/10 py-[35px]
                backdrop-blur-[2px]`
                + " " +
                containerClass
            }
        >

            <div className="absolute -left-10 top-4 w-full h-full border-t border-red-500"></div>
            <div className="absolute -top-4 left-4 w-full h-full border-l border-red-500"></div>
            <div className="absolute top-6 right-4 w-full h-full border-r border-red-500"></div>
            <div className="absolute -right-5 -bottom-3 w-full h-full border-b border-red-500"></div>

            <div className="w-full h-full flex items-center justify-center flex-col gap-y-[14px]">
                {
                    status.map(stat => (
                        <div
                            className={
                                `flex items-center justify-center gap-x-3.5 w-full`
                                + " " +
                                itemClass
                            }
                        >
                            {/* <div className="w-14 border"> */}
                                {stat.img}
                            {/* </div> */}

                            <div className="w-24">
                                <p className="text-xs text-gray-300 font-[200] font-[Lexend] leading-none">
                                    {stat.title}
                                </p>
                                <p className="text-xs text-gray-300/90 font-[200] font-[Lexend] mt-1 leading-none">
                                    {stat.subtitle}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}