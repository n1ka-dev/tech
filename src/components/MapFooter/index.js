import { useState } from "react";
// , icon, child
export default function MapFooter(){
    return (  <div className="map-footer mt-[6rem]">
                      <div className="head-block flex justify-between flex-wrap sm:flex-nowrap">
                          <h3 className="uppercase font-dela text-xl sm:text-2xl md:text-5xl w-4/5">Готовы арендовать
                              авто?</h3>
                          <a href="#" className="shrink-0 md:pl-10">Связаться<span
                              className="detail inline-block relative align-middle ml-3 w-[50px] h-[50px] colorful-shadow  rounded-full"></span></a>
                      </div>
                      <div className="line-contacts flex my-[30px] sm:space-x-7 flex-wrap sm:flex-nowrap">
                          <span className="address block sm:inline w-full">г. Курск ул. Менделеева, 59</span>
                          <span className="phone block sm:inline w-full"><a
                              href="tel:88006009894">8 800 600-98-94</a></span>
                      </div>
                      <div className="map-img">
                          <img alt="г. Курск ул. Менделеева, 59" src="./img/map.png"/>
                      </div>
                  </div>
    )
}