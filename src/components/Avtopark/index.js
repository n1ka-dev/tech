import { useState } from "react";
// , icon, child
export default function Accordeon({url, title, classes, child, icon, action}){
    return (
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
				<a className="apply-filter  w-[50px] h-[50px] colorful-shadow inline-block relative  rounded-full" href="#"/>
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
				<div className="col items-center py-3 w-full md:w-auto">
					<a className="block rounded-full bg-white text-black px-5 py-1.5 mb-4
                                    text-center" href="#">Забронировать</a>
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
				<div className="col items-center py-3 w-full md:w-auto">
					<a className="block rounded-full bg-white text-black px-5 py-1.5 mb-4
                                        text-center" href="#">Забронировать</a>
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
				<div className="col items-center py-3 w-full md:w-auto">
					<a className="block rounded-full bg-white text-black px-5 py-1.5 mb-4
                                        text-center" href="#">Забронировать</a>
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
				<div className="col items-center py-3 w-full md:w-auto">
					<a className="block rounded-full bg-white text-black px-5 py-1.5 mb-4
                                    text-center" href="#">Забронировать</a>
					<a className="block rounded-full px-5 py-1.5 mb-4 bg-gradient border-solid
                                    border-borderColor border text-center" href="#">Подробнее</a>
				</div>
			</div>
		</div>
	</div>
</div>
    )
}