"use client";

import Link from "next/link"
import { useEffect, useState } from "react"
import { BiMenu, BiX } from "react-icons/bi"
import { BsBehance, BsTwitter } from "react-icons/bs"
import { LuLinkedin } from "react-icons/lu"

const data = [
    {
        id: 1,
        name: "Home",
        url: "/",
    },
    {
        id: 2,
        name: "Case Studies",
        url: "/#case-studies",
    },
    {
        id: 3,
        name: "Testimonials",
        url: "/#testimonials",
    },
    {
        id: 4,
        name: "Recent Works",
        url: "/#recent-works",
    },
    {
        id: 5,
        name: "Get in touch",
        url: "/#contact",
    },
]

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (showMenu) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [showMenu])

    return (
        <div className="max-w-7xl bg-[#1b1b1b] mx-auto rounded-bl-lg rounded-br-lg py-3 md:py-6 px-5">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-14">
                {/* desktop nav */}
                <div className="flex-1 hidden md:flex items-center justify-between text-slate-400">
                    {
                        data.map(item => (
                            <Link key={item.id} href={item.url} className="hover:text-slate-200 transition">{item.name}</Link>
                        ))
                    }
                </div>

                {/* mobile nav button */}
                <div className="md:hidden ms-auto z-50">
                    <button className="ml-auto">
                        {showMenu ? <BiX className="text-3xl text-slate-500 cursor-pointer" onClick={handleMenuToggle} /> : <BiMenu className="text-3xl text-slate-500 cursor-pointer" onClick={handleMenuToggle} />}
                    </button>
                </div>

                {/* mobile nav */}
                <div className={`md:hidden absolute top-15 left-0 w-full bg-[#1b1b1b] rounded-bl-lg rounded-br-lg z-30 ${showMenu ? '' : '-translate-y-64 opacity-0'} transition duration-300`}>
                    <div className="flex flex-col items-center justify-center gap-8 py-8 border-t-slate-800 border-t">
                        {
                            data.map(item => (
                                <Link key={item.id} href={item.url} className="text-slate-400 hover:text-slate-200 transition">{item.name}</Link>
                            ))
                        }
                    </div>
                </div>


                <div className="hidden lg:flex gap-10 items-center ">
                    <LuLinkedin className="text-slate-400 hover:text-slate-200 cursor-pointer transition" size={22} />
                    <BsBehance className="text-slate-400 hover:text-slate-200 cursor-pointer transition" size={22} />
                    <BsTwitter className="text-slate-400 hover:text-slate-200 cursor-pointer transition" size={22} />
                </div>
            </div>

            {/* menu overlay for mobile nav */}
            {
                showMenu && <div className="absolute top-16 left-0 w-full h-screen backdrop-blur-sm bg-black/50"
                    onClick={() => setShowMenu(false)}></div>
            }
        </div>
    )
}

export default Navbar