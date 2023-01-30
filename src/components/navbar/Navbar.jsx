import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'; 
import './navbar.css';

const Navbar = () => {
    
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "experience",
        },
        {
            id: 3,
            link: "projects",
        },
        {
            id: 4,
            link: "contact",
        }
    ]

    return (
    <div class = "flex justify-between items-center w-full h-20 md:px-40 px-10 bg-black text-white fixed shadow-[0_15px_15px_15px_rgba(0,0,0,1)]">
        <div class = "flex-shrink-0">
            <img class = "h-10 w-10" src={require("../../assets/logo.png")} alt ="Arki's logo"></img>
        </div>
        <div id = "item-list">
            <ul class = "hidden md:flex font-header item-list">
                {links.map(({i, link}) => (
                    <li key={i} class = "px-10 cursor-pointer item"><Link to={link} smooth duration ={500} offset = {-50}>{link}</Link></li>
                ))}
            </ul>
        </div>
        <div onClick = {() => setNav(!nav)} class = "cursor-pointer z-30 md:hidden duration-150">
            {nav ? <FaTimes size={15} />: <FaBars size={15}/>}
        </div>
        {nav && (
            <div id = "item-list" class = "md:hidden">
                <ul class = "flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-white">
                {links.map(({id, link}) => (
                    <li key={id} class = "py-10 cursor-pointer item"><Link onClick = {() => setNav(!nav)} to ={link} smooth duration ={500} >{link}</Link></li>
                ))}
                {/* <li class = "pt-40 px-20 font-extralight"> made by ark1 </li> */}
                </ul>
            </div>
        )}
        
    </div>
    )
}

export default Navbar