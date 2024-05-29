import { useState } from "react";
// , icon, child
export default function Accordeon({url, title, classes, child}){
    const [isActive, setIsActive] = useState(false);
    return (
        <>
        <li>
            <a href={url} className={classes}>{title}</a>
            <span  onClick={()=>setIsActive(!isActive)}>{child ? isActive ? '<': '>': '' }</span>
            <ul className={isActive ? '':'hidden'}>{
                child && child.map(item =>
                    <li>
                        <a href={item.url}>{item.title}</a>
                    </li>
                )
            }
            </ul>
        </li>
        </>)
}