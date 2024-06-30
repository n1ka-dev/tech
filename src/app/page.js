"use client"

import Script from "next/script";
import Faq from "@/components/Faq"
import News from "@/components/News"
import HeaderLine from "@/components/HeaderLine";
import Avtopark from "@/components/Avtopark";
import Rent from "@/components/Rent";
import MapFooter from "@/components/MapFooter";
import Footer from "@/components/Footer";
import {useState} from "react";


function UrChoose() {
    const [popup, setPopUp] = useState(false);
    return (
        <>
        {
            popup ?
                <div className="popup choose-city fixed flex flex-wrap top-0 bottom-0 left-0 right-0 overflow-hidden items-center justify-center z-50">
                    <div className="bg-blend-overlay"></div>
                    popup
                </div>
                : null
        }
            <div
            className="ur-choose-block pb-[250px] sm:pb-10 mb-10 px-7 sm:px-12 py-3 bg-gradient border-solid border-borderColor border rounded-2xl overflow-hidden mt-4">
            <h3 className="uppercase font-dela leading-relaxed text-lg sm:text-2xl xl:text-3xl mt-7 tracking-widest">Выбор
                машины для юридического лица</h3>
            <button className="relative flex pr-50 inline-block items-center mt-7 text-base tracking-2.5" onClick={()=> setPopUp(true)}>Индивидуальное
                согласование
                <span
                    className="detail inline-block relative align-middle ml-8 sm:ml-3 w-[50px] h-[50px] colorful-shadow rounded-full shrink-0"></span></button>
        </div></>)
}

function LeasingCond() {
    return <div className="cond-leasing-blocks">
        <h3 className="uppercase font-dela leading-relaxed  text-xl sm:text-2xl md:text-5xl mt-12 mb-7">Условия
            проката</h3>
        <div className="conditions-block flex justify-between border-solid border-borderColor border
					rounded-2xl lg:items-center pt-5 pb-6 lg:space-x-11 flex-wrap lg:flex-nowrap sm:text-center lg:text-left px-5 lg:px-0">
            <div className="cond-block flex px-5.5  sm:w-1/2 border-solid border-borderColor border-b
						lg:border-b-0 sm:border-r lg:max-w-[313px] pr-10 pb-3 lg:pb-0">
                <div className="cond-block-content">
                    <div className="text-6.2xl font-dela">21</div>
                    <div className="mt-3.5">На день аренды водителю должно исполниться 21 год</div>
                </div>
            </div>
            <div
                className="cond-block flex px-5.5  sm:w-1/2 border-solid border-borderColor border-b  lg:border-b-0 border-r-0 lg:border-r lg:max-w-[313px] pr-10 pb-3 lg:pb-0">
                <div className="cond-block-content">
                    <div className="text-6.2xl font-dela">3</div>
                    <div className="mt-3.5">Водительские права и стаж за рулем свыше 3 лет</div>
                </div>
            </div>
            <div
                className="cond-block flex px-5.5 pb-3  sm:w-1/2 border-solid border-borderColor border-b sm:border-r sm:border-b-0 lg:max-w-[313px] pr-10">
                <div className="cond-block-content">
                    <div className="text-6.2xl font-dela">24</div>
                    <div className="mt-3.5">Минимальное время аренды 24 часа</div>
                </div>
            </div>
            <div className="cond-block flex px-5.5 sm:w-1/2 lg:max-w-[313px] pr-10">
                <div className="cond-block-content">
                    <div className="text-6.2xl font-dela">25</div>
                    <div className="mt-3.5">Лимит пробега 250 км в день</div>
                </div>
            </div>
        </div>
    </div>;
}

export default function Page() {
  return (<div className="body">
          <header className="header overflow-hidden">
              <HeaderLine/>
              <div className="top-banner relative">
                  <div className="container mx-auto flex flex-wrap">
                      <div className="w-full lg:w-3/5">
                          <h1 className=" font-dela text-xl xs:text-3xl md:text-5xl lg:text-6xl uppercase mt-10 lg:mt-44 leading-relaxed">Легковые
                              авто <span
                                  className="block">в прокат</span></h1>
                          <a className="btn bg-white py-3 px-10 rounded-full mt-8 inline-block text-black w-full sm:w-auto text-center"
                             href="https://pay.tehmagnat.com/?theme=dark">Забронировать</a>
                      </div>
                      <div className="w-full lg:w-2/5 relative sm:h-[190px] lg:h-[582px] lg:mt-1.5 mb-[80px]">
                          <div className="car-info mt-20 sm: relative z-20 sm:absolute -bottom-7 flex flex-wrap sm:flex-nowrap justify-between sm:space-x-4
                        xl:space-x-11 left-auto right-0 lg:right-auto lg:left-0  px-8 sm:px-[15px] xl:px-[32px] py-[10px]  leading-7 z-20">
                              <div className="col sm:order-1">
                                  <div className="brand-name font-dela text-xl leading-8 my-2">BMW X5</div>
                                  <div className="brand-prop my-1.5">Коробка: Автомат</div>
                                  <div className="brand-prop my-1.5">Привод: Полный</div>
                              </div>
                              <div className="col flex items-center  sm:order-3">
                                  <a className="detail inline-block relative colorful-shadow w-[50px] h-[50px] rounded-full"
                                     href="#"></a>
                              </div>
                              <div className="col w-full sm:w-auto sm:order-2 ">
                                  <div className="cost font-dela text-xl uppercase leading-8 my-2">от 4700<span
                                      className="font-inter text-xs ml-1">₽/сут</span></div>
                                  <div className="brand-prop my-1.5 inline sm:block mr-7">Двигатель: 147 л.с</div>
                                  <div className="brand-prop my-1.5 inline sm:block">Расход: 10 л</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="car-slider relative">
                      <div className="slide">
                          <div
                              className="car-img absolute sm:z-10 bottom-0 left-auto sm:left-[15%] lg:left-[36%] w-full w-[975px] h-[315px]"
                              style={{background: `url(./img/car.png) left bottom no-repeat`}}></div>
                      </div>
                  </div>
              </div>
          </header>
          <main className="mt-4">
              <div className="container mx-auto ">
                  <Avtopark/>
                  <UrChoose/>
                  <LeasingCond/>
                  <Rent/>
                  <Faq/>
                  <News/>
                  <MapFooter/>
              </div>
          </main>
          <Footer />
          <Script src="./js/js.js"/>
      </div>

  )}