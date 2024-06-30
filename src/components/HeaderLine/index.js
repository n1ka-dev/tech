import { useState } from "react";
import { menuItems } from  "../../app/data/menu.js"
import Link from 'next/link';
import Accordeon from "@/components/Accordeon";

export default function HeaderLine(){
    const [menu, setMenu] = useState(false);
    return (
        <div className="container mx-auto">
				<div className="header-line  flex justify-between pt-7">
					<div className="header_logo content-center">
						<Link href="/">
							<img alt="Логотип Tehmagnat - прокат автомобилей" decoding="async"
								 loading="lazy" src="../../img/logo.svg" title="Tehmagnat"/>
						</Link>
					</div>
					<div className="burger flex relative z-50" onClick={()=> setMenu(!menu)}>
						<div className={`menu-icon ${menu ? 'open':''}`}><span></span><span></span><span></span></div>
							{menu ?
							<nav className="menu-items fixed  z-50 border-solid border border-borderColor backdrop-blur-2xl text-lg right-0 max-w-full pl-10 inset-y-0 sm:absolute sm:block sm:max-w-fit sm:top-full sm:bottom-auto sm:my-3 sm:-mr-3 sm:rounded-2xl">
								<div className={`back-btn-menu mb-5 sm:hidden ${menu ? 'open':''}`}>Назад</div>
								 <ul className=""  onClick={(event) => event.stopPropagation()}>
									{
										menuItems.map((info, index) => {
											return (
												<Accordeon
														key={info.id}
														title={info.title}
														url={info.url}
														classes={info.classes}
														child={info.child}
														icon={info.icon}
														action={info.action}
												/>
										)
										})
									}
								</ul>
							</nav>
							 : null}
						</div>
                </div>
            </div>)
}