"use client"
import {useState} from "react";
export default function ChooseCity(){
    let savedCity = typeof window !== 'undefined' ?window.localStorage.getItem('city'):'';
    const [city, setCity] = useState(savedCity);
    const handle = (e) => {
        setCity(e.target.value);
        localStorage.setItem('city', e.target.value);
    }
    return ( !city ? <div className="choose-city fixed flex flex-wrap top-0 bottom-0 left-0 right-0 overflow-hidden items-center justify-center z-50">
              <div className="bg-choose-city"></div>
                  <div className="inner-choose text-center">
                      <div className="h1 uppercase text-5xl relative font-dela">Выберите город</div>
                      <div className="mt-12 w-auto inline-block">
                           <div className="custom-select relative mt-4 m-auto">
                                <select className="text-black hidden" id="ch-city" name="city" onChange={handle}>
                                    <option value="spb">Санкт-Петербург</option>
                                    <option value="msk">Москва</option>
                                    <option value="krsk">Курск</option>
                                    <option value="lpk">Липецк</option>
                                </select>
                            </div>
                      </div>
                  </div>
              </div>:"")
}