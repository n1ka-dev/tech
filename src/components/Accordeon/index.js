import { useState } from "react";
// , icon, child
export default function Accordeon({url, title, classes, child, icon, action}){
    const [isActive, setIsActive] = useState(false);
    return (
        <li className="">
            <div className={`flex justify-between items-center relative`}>
                <a href={url} className={classes}>
                    { icon ? <img alt="VK" src={icon}/> : '' }
                    { title }
                </a>
                <span  onClick={()=>setIsActive(!isActive)} className={` ${child ? isActive ? 'menu-arrow open':'menu-arrow':''}`}></span>
            </div>
            {child ?
                <ul className={isActive ? '':'hidden'} >
                    {child.map(item =>
                    <li key={item.id}><a href={item.url}>{item.title}</a></li>
                )}
                </ul>
                : null}

        </li>)
}