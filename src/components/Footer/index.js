import { useState } from "react";
// , icon, child
export default function Footer(){
    return (
          <footer className="border-solid border-borderColor border-t mt-28  text-center sm:text-left">
              <div className="container mx-auto  py-14">
                  <div className="footer-row flex justify-between flex-wrap sm:flex-nowrap">
                      <div className="footer-left-col pl-16 flex flex-wrap content-between">
                          <div className="footer_logo mb-10">
                              <a href="/">
                                  <img alt="Логотип Tehmagnat - прокат автомобилей" decoding="async"
                                       loading="lazy" src="./img/logo.svg" title="Tehmagnat"/>
                              </a>
                          </div>
                          <p className="copyright w-full py-4 hidden sm:block">
                              2024 Все права защищены
                          </p>
                      </div>
                      <div
                          className="footer-right-col flex flex-wrap sm:flex-nowrap justify-between md:space-x-7 xl:space-x-20">
                          <div className="footer-menu leading-normal w-full sm:w-auto">
                              <ul>
                                  <li><a className="pb-2.5 block" href="#">Автопарк</a></li>
                                  <li><a className="pb-2.5 block" href="#">Условия проката</a></li>
                                  <li><a className="pb-2.5 block" href="#">Правила проекта</a></li>
                                  <li><a className="pb-2.5 block" href="#">Отзывы</a></li>
                                  <li><a className="pb-2.5 block" href="#">Сертификат</a></li>
                              </ul>
                          </div>
                          <div className="footer-menu w-full sm:w-auto mt-10 sm:mt-0">
                              <ul>
                                  <li><a className="pb-2.5 block" href="#">О компании</a></li>
                                  <li><a className="pb-2.5 block" href="#">FAQ</a></li>
                                  <li><a className="pb-2.5 block" href="#">Сотрудничество</a></li>
                                  <li><a className="pb-2.5 block" href="#">Контакты</a></li>
                              </ul>
                          </div>
                          <div className="footer-contacts order-last lg:order-first w-full sm:w-auto">
                              <div>
                                  <h5 className="title font-bold text-xl">Контакты</h5>
                                  <div className="sm:flex pr-4">
                                      <a className="text-sm xl:text-lg shrink-0" href="tel:88006009894">8 (800)
                                          600-98-94</a>
                                  </div>
                                  <a className="block w-[50px] h-[50px] rounded-xl bg-vk mt-5 mx-auto sm:mx-0"
                                     href="https://vk.com/#"></a>
                              </div>
                          </div>
                      </div>
                      <p className="copyright w-full py-4 sm:hidden">
                          2024 Все права защищены
                      </p>
                  </div>
              </div>
          </footer>
    )
}