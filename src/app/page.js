"use client"

import Script from "next/script";
import Faq from "@/components/Faq"
import News from "@/components/News"
import { useState } from "react";
import { menuItems } from  "./data/menu.js"
import Accordeon from "@/components/Accordeon";

export default function Page() {
  const [menu, setMenu] = useState(menuItems);
  return (<div className="bg-black font-inter text-white overflow-x-hidden w-full">
        <header className="header overflow-hidden">
        <div className="container mx-auto">
        <div className="header-line  flex justify-between pt-7">
            <div className="header_logo content-center">
                <a href="/">
                    <img alt="Логотип Tehmagnat - прокат автомобилей" decoding="async"
                         loading="lazy" src="./img/logo.svg" title="Tehmagnat"/>
                </a>
            </div>
            {
                menu && menu.map((info, index) => {
                    return (
                        <Accordeon
                                key={index}
                                title={info.title}
                                url={info.url}
                                classes={info.classes}
                                child={info.child}
                        />
                )
                })
            }
            <div className="burger flex relative z-50" onClick={()=> setMenu(!menu)}>
                <div className={`menu-icon ${menu ? 'open':''}`}><span></span><span></span><span></span></div>
                {menu ?
                <nav className="menu-items open absolute right-0 z-50 border-solid border border-borderColor rounded-2xl backdrop-blur-2xl text-lg">
                    <ul className="">
                        <li className="has-child">
                            <a href="#">Автопарк</a>
                            <ul className="sub-menu text-sm">
                                <li><a href="#">Пункт 1</a></li>
                                <li><a href="#">Пункт 2</a></li>
                                <li><a href="#">Пункт 3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Условия</a></li>
                        <li>
                            <a href="#">Правила</a>
                            <ul className="sub-menu text-sm">
                                <li><a href="#">Пункт 1</a></li>
                                <li><a href="#">Пункт 2</a></li>
                                <li><a href="#">Пункт 3</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Отзывы</a></li>
                        <span className="shadow-line"></span>
                        <li><a href="#">Контакты</a></li>
                        <li><a className="text-nowrap" href="tel:88006009894">8 (800) 600-98-94</a></li>
                        <li><a href="https://vk.com/#"><img alt="VK" src="img/vk-white.svg"/></a></li>
                    </ul>
                </nav>
                     : null}
            </div>
        </div>
        </div>
        <div className="top-banner relative">
        <div className="container mx-auto flex flex-wrap">
            <div className="w-full lg:w-3/5">
                <h1 className=" font-dela text-xl xs:text-3xl md:text-5xl lg:text-6xl uppercase mt-10 lg:mt-44 leading-relaxed">Легковые авто <span
                        className="block">в прокат</span></h1>
                <a className="btn bg-white py-3 px-10 rounded-full mt-8 inline-block text-black"
                   href="https://pay.tehmagnat.com/?theme=dark">Онлайн оплата</a>
            </div>
            <div className="w-full lg:w-2/5 relative h-[190px] lg:h-[582px] lg:mt-1.5 mb-[80px]">
                <div className="car-info absolute -bottom-7 flex justify-around space-x-4 xl:space-x-11
                left-auto right-0 lg:right-auto lg:left-0  px-[15px] xl:px-[32px] py-[10px]  leading-7 bg-gradientCarInfo z-20">
                    <div className="col">
                        <div className="brand-name font-dela text-xl leading-8 my-2">BMW X5</div>
                        <div className="brand-prop my-1.5">Коробка: Автомат</div>
                        <div className="brand-prop my-1.5">Привод: Полный</div>
                    </div>
                    <div className="col">
                        <div className="cost font-dela text-xl uppercase leading-8 my-2">от 4700<span
                                className="font-inter text-xs ml-1">₽/сут</span></div>
                        <div className="brand-prop my-1.5">Двигатель: 147 л.с</div>
                        <div className="brand-prop my-1.5">Расход: 10 л</div>
                    </div>
                    <div className="col flex items-center">
                        <a className="detail inline-block relative colorful-shadow w-[50px] h-[50px] rounded-full"
                           href="#"></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="car-slider relative">
            <div className="slide">
                <div className="car-img absolute z-10 bottom-0 left-auto sm:left-[15%] lg:left-[36%] w-full w-[975px] h-[315px]"
                     style={{background: `url(./img/car.png) left bottom no-repeat`}}>
                </div>
            </div>
        </div>
        </div>
        </header>
        <main className="mt-4">
            <div className="container mx-auto ">
                <div className="avtopark-block">
                    <h2 className="uppercase font-dela leading-relaxed text-xl mt-7">Наш автопарк</h2>
                    <div className="head-line flex justify-between items-center">
                        <div className="filter-line flex justify-between  space-x-7 pr-4">
                            <div className="hidden xl:flex justify-between  space-x-7">
                                <div className="custom-select relative  mt-4">
                                    <select className="hidden bg-select" id="type-ts" name="type">
                                        <option value="all">Тип автомобиля</option>
                                        <option value="sedan">Седан</option>
                                        <option value="offroad">Внедорожник</option>
                                        <option value="pickup">Пикап</option>
                                    </select>
                                </div>
                                <div className="custom-select relative mt-4">
                                    <select className="hidden" id="mark-name" name="mark-name">
                                        <option value="all">Марка</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Volkswagen">volkswagen</option>
                                        <option value="renault">Renault</option>
                                    </select>
                                </div>
                                <div className="custom-select relative mt-4">
                                    <select className="hidden" id="transmission" name="mark-name">
                                        <option value="all">Привод</option>
                                        <option value="front">Передний</option>
                                        <option value="back">Задний</option>
                                        <option value="full">Полный</option>
                                    </select>
                                </div>
                                <div className="custom-select relative mt-4">
                                    <select className="hidden" id="power" name="power">
                                        <option value="all">Мощность</option>
                                        <option value="less-100">до 100 л.с</option>
                                        <option value="100-150">100 - 150л.с.</option>
                                        <option value="150-250">150 - 250л.с.</option>
                                        <option value="more-250">больше 250л.с</option>
                                    </select>
                                </div>
                            </div>
                            <div className="btn-filter flex  mt-4 items-center">
                                <a className="apply-filter  w-[50px] h-[50px] colorful-shadow inline-block relative  rounded-full"
                                   href="#"></a>
                            </div>
                        </div>
                        <a className="see-all rounded-full mt-3 p-3 content-center text-center bg-gradient" href="#all">Посмотреть все машины</a>
                    </div>
                    <div className="cars-view flex justify-between items-center mt-16 flex-wrap">
                    <div className="card-car mb-10 bg-gradient border-solid border-borderColor border rounded-2xl overflow-hidden w-full lg:w-auto">
                        <div className="car-preview relative">
                            <div className="car-img">
                                <img alt="BMW X5" className="w-full" src="./img/blue-car.png"/>
                            </div>
                            <span className="city-point absolute top-9 left-8 inline-block bg-gradient rounded-full
                                border-solid border-borderColor border">Санкт-Петербург</span>
                        </div>
                        <div className="car-props pt-4 xl:pt-7 py-4 pb-5 px-2.5 xl:px-10 flex justify-between space-x-3 xl:space-x-16">
                            <div className="col">
                                <div className="brand-name font-dela text-xl leading-8 my-2">BMW X5</div>
                                <div className="brand-prop leading-7 my-1.5">Коробка: Автомат</div>
                                <div className="brand-prop leading-7 my-1.5">Привод: Полный</div>
                            </div>
                            <div className="col">
                                <div className="cost font-dela text-xl uppercase leading-8 my-2">от 4700 <span
                                        className="font-inter text-xs ml-1">₽/сут</span></div>
                                <div className="brand-prop leading-7 my-1.5">Двигатель: 147 л.с</div>
                                <div className="brand-prop leading-7 my-1.5">Расход: 10 л</div>
                            </div>
                            <div className="col items-center py-3">
                                <a className="block rounded-full bg-white text-black px-5 py-1.5 mb-4
                                    text-center" href="#">Онлайн оплата</a>
                                <a className="block rounded-full px-5 py-1.5 mb-4 bg-gradient border-solid
                                    border-borderColor border text-center" href="#">Подробнее</a>
                            </div>
                        </div>
                    </div>

                    <div className="card-car mb-10 bg-gradient border-solid border-borderColor border rounded-2xl overflow-hidden w-full lg:w-auto">
                        <div className="car-preview relative">
                            <div className="car-img">
                                <img alt="BMW X5" className="w-full" src="./img/car-ex.png"/>
                            </div>
                            <span className="city-point absolute top-9 left-8 inline-block bg-gradient rounded-full
                                border-solid border-borderColor border">Санкт-Петербург</span>
                        </div>
                        <div className="car-props pt-4 xl:pt-7 py-4 pb-5 px-2.5 xl:px-10 flex justify-between space-x-3 xl:space-x-16">
                            <div className="col">
                                <div className="brand-name font-dela text-xl leading-8 my-2">BMW X5</div>
                                <div className="brand-prop leading-7 my-1.5">Коробка: Автомат</div>
                                <div className="brand-prop leading-7 my-1.5">Привод: Полный</div>
                            </div>
                            <div className="col">
                                <div className="cost font-dela text-xl uppercase leading-8 my-2">от 4700 <span
                                        className="font-inter text-xs ml-1">₽/сут</span></div>
                                <div className="brand-prop leading-7 my-1.5">Двигатель: 147 л.с</div>
                                <div className="brand-prop leading-7 my-1.5">Расход: 10 л</div>
                            </div>
                            <div className="col items-center py-3">
                                <a className="block rounded-full bg-white text-black px-5 py-1.5 mb-4
                                    text-center" href="#">Онлайн оплата</a>
                                <a className="block rounded-full px-5 py-1.5 mb-4 bg-gradient border-solid
                                    border-borderColor border text-center" href="#">Подробнее</a>
                            </div>
                        </div>
                    </div>

                    <div className="card-car mb-10 bg-gradient border-solid border-borderColor border rounded-2xl overflow-hidden w-full lg:w-auto">
                        <div className="car-preview relative">
                            <div className="car-img">
                                <img alt="BMW X5" className="w-full" src="./img/car-ex.png"/>
                            </div>
                            <span className="city-point absolute top-9 left-8 inline-block bg-gradient rounded-full
                                border-solid border-borderColor border">Санкт-Петербург</span>
                        </div>
                        <div className="car-props pt-4 xl:pt-7 py-4 pb-5 px-2.5 xl:px-10 flex justify-between space-x-3 xl:space-x-16">
                            <div className="col">
                                <div className="brand-name font-dela text-xl leading-8 my-2">BMW X5</div>
                                <div className="brand-prop leading-7 my-1.5">Коробка: Автомат</div>
                                <div className="brand-prop leading-7 my-1.5">Привод: Полный</div>
                            </div>
                            <div className="col">
                                <div className="cost font-dela text-xl uppercase leading-8 my-2">от 4700 <span
                                        className="font-inter text-xs ml-1">₽/сут</span></div>
                                <div className="brand-prop leading-7 my-1.5">Двигатель: 147 л.с</div>
                                <div className="brand-prop leading-7 my-1.5">Расход: 10 л</div>
                            </div>
                            <div className="col items-center py-3">
                                <a className="block rounded-full bg-white text-black px-5 py-1.5 mb-4
                                    text-center" href="#">Онлайн оплата</a>
                                <a className="block rounded-full px-5 py-1.5 mb-4 bg-gradient border-solid
                                    border-borderColor border text-center" href="#">Подробнее</a>
                            </div>
                        </div>
                    </div>

                    <div className="card-car mb-10 bg-gradient border-solid border-borderColor border rounded-2xl overflow-hidden w-full lg:w-auto">
                        <div className="car-preview relative">
                            <div className="car-img">
                                <img alt="BMW X5" className="w-full" src="./img/car-ex.png"/>
                            </div>
                            <span className="city-point absolute top-9 left-8 inline-block bg-gradient rounded-full
                                border-solid border-borderColor border">Санкт-Петербург</span>
                        </div>
                        <div className="car-props pt-4 xl:pt-7 py-4 pb-5 px-2.5 xl:px-10 flex justify-between space-x-3 xl:space-x-16">
                            <div className="col">
                                <div className="brand-name font-dela text-xl leading-8 my-2">BMW X5</div>
                                <div className="brand-prop leading-7 my-1.5">Коробка: Автомат</div>
                                <div className="brand-prop leading-7 my-1.5">Привод: Полный</div>
                            </div>
                            <div className="col">
                                <div className="cost font-dela text-xl uppercase leading-8 my-2">от 4700 <span
                                        className="font-inter text-xs ml-1">₽/сут</span></div>
                                <div className="brand-prop leading-7 my-1.5">Двигатель: 147 л.с</div>
                                <div className="brand-prop leading-7 my-1.5">Расход: 10 л</div>
                            </div>
                            <div className="col items-center py-3">
                                <a className="block rounded-full bg-white text-black px-5 py-1.5 mb-4
                                    text-center" href="#">Онлайн оплата</a>
                                <a className="block rounded-full px-5 py-1.5 mb-4 bg-gradient border-solid
                                    border-borderColor border text-center" href="#">Подробнее</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="ur-choose-block px-12 py-3 pb-10 bg-gradient border-solid border-borderColor border rounded-2xl overflow-hidden mt-4 mb-10">
                <h3 className="uppercase font-dela leading-relaxed text-2xl xl:text-3xl mt-7 tracking-widest">Выбор машины для юридического
                    лица</h3>
                <a className="relative pr-50 inline-block align-middle mt-7 text-base tracking-2.5" href="#">Индивидуальное
                    согласование
                    <span className="detail inline-block relative align-middle ml-3 w-[50px] h-[50px] colorful-shadow  rounded-full"></span></a>
            </div>
                <div className="cond-leasing-blocks">
                <h3 className="uppercase font-dela leading-relaxed text-5xl mt-12 mb-7">Условия проката</h3>
                <div className="conditions-block flex justify-between border-solid border-borderColor border
                rounded-2xl lg:items-center pt-5 pb-6 lg:space-x-11 flex-wrap lg:flex-nowrap text-center lg:text-left px-5 lg:px-0">
                    <div className="cond-block flex px-5.5  w-1/2 border-solid border-borderColor border-b  lg:border-b-0 border-r lg:max-w-[313px] pr-10 pb-3 lg:pb-0">
                        <div className="cond-block-content">
                            <div className="text-6.2xl font-dela">21</div>
                            <div className="mt-3.5">На день аренды водителю должно исполниться 21 год</div>
                        </div>
                    </div>
                    <div className="cond-block flex px-5.5  w-1/2 border-solid border-borderColor border-b  lg:border-b-0 border-r-0 lg:border-r lg:max-w-[313px] pr-10 pb-3 lg:pb-0">
                        <div className="cond-block-content">
                            <div className="text-6.2xl font-dela">3</div>
                            <div className="mt-3.5">Водительские права и стаж за рулем свыше 3 лет</div>
                        </div>
                    </div>
                    <div className="cond-block flex px-5.5  w-1/2 border-solid border-borderColor border-r  lg:max-w-[313px] pr-10">
                        <div className="cond-block-content">
                            <div className="text-6.2xl font-dela">24</div>
                            <div className="mt-3.5">Минимальное время аренды 24 часа</div>
                        </div>
                    </div>
                    <div className="cond-block flex px-5.5 w-1/2 lg:max-w-[313px] pr-10">
                        <div className="cond-block-content">
                            <div className="text-6.2xl font-dela">25</div>
                            <div className="mt-3.5">Лимит пробега 250 км в день</div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="rent-block flex justify-between items-center mt-28 relative pb-[62px] flex-wrap lg:flex-nowrap">
                <div className="car-img w-full lg:w-[35%]">
                    <img alt="" className="blue-car relative w-full sm:absolute sm:left-[-47%] xl:left-[-38%] max-w-fit bottom-0 z-1 sm:hidden lg:block"
                         src="./img/blue-car.png"/>
                </div>
                <div className="form w-full lg:w-[65%] pt-2 z-10">
                    <h3 className="uppercase font-dela text-5xl mb-10">Аренда за 3 шага</h3>
                    <div className="search-car-form bg-gradient border border-borderColor rounded-2xl p-5 pt-6 flex justify-between flex-wrap sm:flex-nowrap">
                        <div className="preview-car w-auto xl:w-[55%] mr-5">
                            <div className="img-wrap colorful-shadow lg:min-w-fit xl:w-[328px]  lg:h-auto xl:h-[328px] rounded-full overflow-hidden">
                                <img alt="Какую машину вы хотите" className="w-full" src="./img/omoda.png"/>
                            </div>
                        </div>
                        <div className="search-form pl-2 xl:pl-5  w-full  sm:w-[65%] xl:w-[45%] border-solid border-borderColor
                        border-t sm:border-l sm:border-t-0 mt-10 pt-10 sm:mt-0 sm:pt-0">
                            <h4 className="uppercase font-dela text-xl">Какую машину вы хотите?</h4>
                            <form action="#rent-car" method="GET">
                                <input className="bg-select rounded-full border-solid border-borderColor border px-3 py-3 my-3 w-full"
                                       type="text" />
                                <input className="bg-select rounded-full border-solid border-borderColor border px-3 py-3 my-3 w-full"
                                       type="text" />
                                <input className="bg-select rounded-full border-solid border-borderColor border px-3 py-3 my-3 w-full"
                                       type="text"/>
                                <button className="bg-white text-black py-3 px-10 rounded-full mt-2.5 w-full sm:w-auto">Далее</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                <Faq/>
                <News/>
                <div className="map-footer mt-[8rem]">
                <div className="head-block flex justify-between">
                    <h3 className="uppercase font-dela text-5xl w-4/5">Готовы арендовать авто?</h3>
                    <a href="#">Связаться<span
                            className="detail inline-block relative align-middle ml-3 w-[50px] h-[50px] colorful-shadow  rounded-full"></span></a>
                </div>
                <div className="line-contacts flex my-[30px] space-x-7">
                    <span className="address">г. Курск ул. Менделеева, 59</span>
                    <span className="phone"><a href="tel:88006009894">8 800 600-98-94</a></span>
                </div>
                <div className="map-img">
                    <img alt="г. Курск ул. Менделеева, 59" src="./img/map.png" />
                </div>
            </div>
            </div>
        </main>
        <footer className="border-solid border-borderColor border-t mt-28">
                <div className="container mx-auto  py-14">
                <div className="footer-row flex justify-between">
                    <div className="footer-left-col pl-16 flex flex-wrap content-between">
                        <div className="footer_logo">
                            <a href="/">
                                <img alt="Логотип Tehmagnat - прокат автомобилей" decoding="async"
                                     loading="lazy" src="./img/logo.svg" title="Tehmagnat"/>
                            </a>
                        </div>
                        <p className="copyright w-full py-4">
                            2024 Все права защищены
                        </p>
                    </div>
                    <div className="footer-right-col flex justify-between md:space-x-7 xl:space-x-20">
                        <div className="footer-menu leading-normal">
                            <ul>
                                <li><a className="pb-2.5 block" href="#">Автопарк</a></li>
                                <li><a className="pb-2.5 block" href="#">Условия проката</a></li>
                                <li><a className="pb-2.5 block" href="#">Правила проекта</a></li>
                                <li><a className="pb-2.5 block" href="#">Отзывы</a></li>
                                <li><a className="pb-2.5 block" href="#">Сертификат</a></li>
                            </ul>
                        </div>
                        <div className="footer-menu">
                            <ul>
                                <li><a className="pb-2.5 block" href="#">О компании</a></li>
                                <li><a className="pb-2.5 block" href="#">FAQ</a></li>
                                <li><a className="pb-2.5 block" href="#">Сотрудничество</a></li>
                                <li><a className="pb-2.5 block" href="#">Контакты</a></li>
                            </ul>
                        </div>
                          <div className="footer-contacts order-last lg:order-first">
                            <div>
                                <h5 className="title font-bold text-xl">Контакты</h5>
                                <div className="flex pr-4">
                                    <a className="text-sm xl:text-lg shrink-0" href="tel:88006009894">8 (800) 600-98-94</a>
                                </div>
                                <a className="block w-[50px] h-[50px] rounded-xl bg-vk mt-5" href="https://vk.com/#"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <Script src="./js/js.js" />
  </div>

  )}