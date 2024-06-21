import { useState } from "react";
// , icon, child
export default function Rent(){
    return ( <div
        className="rent-block flex justify-between items-center mt-28 relative pb-[62px] flex-wrap lg:flex-nowrap">
        <div className="car-img w-full lg:w-[35%]">
            <img alt=""
                 className="blue-car relative w-full sm:absolute sm:left-[-47%] xl:left-[-38%] max-w-fit bottom-0 z-1 sm:hidden lg:block"
                 src="./img/blue-car.png"/>
        </div>
        <div className="form w-full lg:w-[65%] pt-2 z-10">
            <h3 className="uppercase font-dela text-xl sm:text-2xl md:text-5xl mb-10">Аренда за 3
                шага</h3>
            <div
                className="search-car-form bg-gradient border border-borderColor rounded-2xl p-5 pt-6 flex justify-between flex-wrap sm:flex-nowrap">
                <div className="preview-car w-auto xl:w-[55%] mr-5">
                    <div
                        className="img-wrap colorful-shadow lg:min-w-fit xl:w-[328px]  lg:h-auto xl:h-[328px] rounded-full overflow-hidden">
                        <img alt="Какую машину вы хотите" className="w-full" src="./img/omoda.png"/>
                    </div>
                </div>
                <div className="search-form pl-2 xl:pl-5  w-full  sm:w-[65%] xl:w-[45%] border-solid border-borderColor
							border-t sm:border-l sm:border-t-0 mt-10 pt-10 sm:mt-0 sm:pt-0">
                    <h4 className="uppercase font-dela text-xl">Какую машину вы хотите?</h4>
                    <form action="#rent-car" method="GET">
                        <input
                            className="bg-select bg-black rounded-full border-solid border-borderColor border px-3 py-3 my-3 w-full"
                            type="text"/>
                        <input
                            className="bg-select bg-black rounded-full border-solid border-borderColor border px-3 py-3 my-3 w-full"
                            type="text"/>
                        <input
                            className="bg-select bg-black rounded-full border-solid border-borderColor border px-3 py-3 my-3 w-full"
                            type="text"/>
                        <button
                            className="bg-white text-black py-3 px-10 rounded-full mt-2.5 w-full sm:w-auto">Далее
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}