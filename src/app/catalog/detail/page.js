"use client"
import HeaderLine from "@/components/HeaderLine";
import Avtopark from "@/components/Avtopark";
import Rent from "@/components/Rent";
import Faq from "@/components/Faq";
import MapFooter from "@/components/MapFooter";
import Footer from "@/components/Footer";

export default function CarDetail() {
  return<>
            <header className="header"><HeaderLine /></header>
            <main className="mt-11">
                <div className="container mx-auto ">
                    <div className="breadcrumbs">
                        <a href="/catalog" className="bc-item text-xl uppercase font-dela">Назад</a>
                    </div>
                     <div className="car-detail-inner py-14">
                         <div className="flex justify-between">
                             <div className="card-car shrink-0 mb-10 bg-gradient border-solid border-borderColor border rounded-2xl overflow-hidden w-full lg:w-auto">
                                <div className="car-preview relative">
                                    <div className="car-img">
                                        <img alt="BMW X5" className="w-full" src="../../img/car-detail.png"/>
                                    </div>
                                    <span className="city-point absolute top-9 left-8 inline-block bg-gradient rounded-full
                                                    border-solid border-borderColor border">Санкт-Петербург</span>
                                </div>
                                <div className="car-props pt-4 flex-wrap sm:flex-nowrap xl:pt-7 py-4 pb-5 px-4 sm:px-2.5 xl:px-10 flex justify-between sm:space-x-3 xl:space-x-16">
                                    <div className="col">
                                        <div className="brand-name font-dela text-xl leading-8 my-2">BMW X5</div>
                                        <div className="brand-prop leading-7 my-1.5">Коробка: Автомат</div>
                                        <div className="brand-prop leading-7 my-1.5">Привод: Полный</div>
                                    </div>
                                    <div className="col">
                                        <div className="cost font-dela text-xl uppercase leading-8 my-2">от 4700 <span className="font-inter text-xs ml-1">₽/сут</span>
                                        </div>
                                        <div className="brand-prop leading-7 my-1.5">Двигатель: 147 л.с</div>
                                        <div className="brand-prop leading-7 my-1.5">Расход: 10 л</div>
                                    </div>
                                    <div className="col">
                                        <div className="cost font-dela text-xl uppercase leading-8 my-2">от 4700 <span className="font-inter text-xs ml-1">₽/сут</span>
                                        </div>
                                        <div className="brand-prop leading-7 my-1.5">Двигатель: 147 л.с</div>
                                        <div className="brand-prop leading-7 my-1.5">Расход: 10 л</div>
                                    </div>
                                </div>
                            </div>
                             <div className="car-descr ml-10">
                                 <div className="text-5xl">BMW X5</div>
                                 <div className="detail-car-props flex flex-wrap sm:flex-nowrap mt-8">
                                     <ul className="space-y-2">
                                         <li><span className="font-dela">Марка: </span>OMODA</li>
                                         <li><span className="font-dela">Модель: </span>Х5</li>
                                         <li><span className="font-dela">Год выпуска: </span>2024</li>
                                         <li><span className="font-dela">Кузов: </span> Внедорожник</li>
                                         <li><span className="font-dela">Поколение: </span> Z</li>
                                         <li><span className="font-dela">Двигатель: </span> Бензин</li>
                                         <li><span className="font-dela">Привод: </span> Передний</li>
                                         <li><span className="font-dela">Коробка передач: </span> Автомат</li>
                                         <li><span className="font-dela">Модификация: </span>1.5 CVT (147 л.с.)</li>
                                         <li><span className="font-dela">Руль: </span>Левый</li>
                                         <li><span className="font-dela">Копмлектация: </span>Ultimate</li>
                                         <li><span className="font-dela">Класс авто: </span>Комфорт</li>
                                     </ul>
                                     <ul className="space-y-2 ml-10">
                                         <li><span className="font-dela">Марка: </span>OMODA</li>
                                         <li><span className="font-dela">Модель: </span>Х5</li>
                                         <li><span className="font-dela">Год выпуска: </span>2024</li>
                                         <li><span className="font-dela">Кузов: </span> Внедорожник</li>
                                         <li><span className="font-dela">Поколение: </span> Z</li>
                                         <li><span className="font-dela">Двигатель: </span> Бензин</li>
                                         <li><span className="font-dela">Привод: </span> Передний</li>
                                         <li><span className="font-dela">Коробка передач: </span> Автомат</li>
                                         <li><span className="font-dela">Модификация: </span>1.5 CVT (147 л.с.)</li>
                                         <li><span className="font-dela">Руль: </span>Левый</li>
                                         <li><span className="font-dela">Копмлектация: </span>Ultimate</li>
                                         <li><span className="font-dela">Класс авто: </span>Комфорт</li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                         <div className="cond-leasing-blocks">
                            <h3 className="uppercase font-dela leading-relaxed text-xl sm:text-2xl md:text-5xl mt-12 mb-7">Цена</h3>
                            <div className="conditions-block flex justify-between border-solid border-borderColor border
                                        rounded-2xl lg:items-center pt-5 pb-6 lg:space-x-11 flex-wrap lg:flex-nowrap sm:text-center lg:text-left px-5 lg:px-0">
                                <div className="cond-block flex px-5.5  sm:w-1/2 border-solid border-borderColor border-b
                                            lg:border-b-0 sm:border-r lg:max-w-[313px] pr-10 pb-3 lg:pb-0">
                                    <div className="cond-block-content">
                                        <div className="text-4xl font-dela">5000 р</div>
                                        <div className="mt-3.5">На день аренды водителю должно исполниться 21 год</div>
                                    </div>
                                </div>
                                <div
                                    className="cond-block flex px-5.5  sm:w-1/2 border-solid border-borderColor border-b  lg:border-b-0 border-r-0 lg:border-r lg:max-w-[313px] pr-10 pb-3 lg:pb-0">
                                    <div className="cond-block-content">
                                        <div className="text-4xl font-dela">4900 р</div>
                                        <div className="mt-3.5">Водительские права и стаж за рулем свыше 3 лет</div>
                                    </div>
                                </div>
                                <div
                                    className="cond-block flex px-5.5 pb-3  sm:w-1/2 border-solid border-borderColor border-b sm:border-r sm:border-b-0 lg:max-w-[313px] pr-10">
                                    <div className="cond-block-content">
                                        <div className="text-4xl font-dela">4700 р</div>
                                        <div className="mt-3.5">Минимальное время аренды 24 часа</div>
                                    </div>
                                </div>
                                <div className="cond-block flex px-5.5 sm:w-1/2 lg:max-w-[313px] pr-10">
                                    <div className="cond-block-content">
                                        <div className="text-4xl font-dela">4500 р</div>
                                        <div className="mt-3.5">Лимит пробега 250 км в день</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                    <Footer /> 
                </div>
            </main>

        </>
}