"use client"
import React, {useState} from "react";
import {getCookie, hasCookie, setCookie} from "cookies-next";
export default function ChooseCity(){
    const [city, setCity] = useState(true);
    const handle = (e) => {
        setCookie('city', e.target.value);
        setCity(hasCookie('city'))
    }
    React.useEffect(()=>{
        setCity(hasCookie('city'))
    }, [city])
    if(!city){
        return (<div className="choose-city fixed flex flex-wrap top-0 bottom-0 left-0 right-0 overflow-hidden items-center justify-center z-50">
                  <span className="bg-choose-city"></span>
                  <div className="inner-choose text-center">
                      <p className="h1 uppercase text-5xl relative font-dela">Выберите город</p>
                      <div className="mt-12 w-auto inline-block">
                           <div className="relative mt-4 m-auto">
                                <select className="text-black" id="ch-city" name="city" onChange={handle}>
                                    <option value="spb">Санкт-Петербург</option>
                                    <option value="msk">Москва</option>
                                    <option value="krsk">Курск</option>
                                    <option value="lpk">Липецк</option>
                                </select>
                            </div>
                      </div>
                  </div>
              </div>
        )
    }else {
        return null
    }
}