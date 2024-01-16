"use client";
import CodeIcon from "@/src/assets/icons/Code";
import HomeIcon from "@/src/assets/icons/Home";
import Hourglass from "@/src/assets/icons/Hourglass";
import PersonIcon from "@/src/assets/icons/Person";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarList = [
    {
        id: 1,
        label: "Homepage",
        icon: <HomeIcon />,
        href: "/",
    },
    {
        id: 2,
        label: "About",
        icon: <PersonIcon />,
        href: "/about",
    },
    {
        id: 3,
        label: "Experience",
        icon: <Hourglass />,
        href: "/experience",
    },
    {
        id: 4,
        label: "Skills",
        icon: <CodeIcon />,
        href: "/skills",
    },
];

const NavBar = () => {
    const pathName = usePathname();

    return (
        <div className="w-full flex justify-around absolute bottom-0 left-0 bg-[rgba(255,255,255,0.4)] md:flex-col md:top-1/2 md:right-10 md:left-auto md:-translate-y-1/2 md:w-fit md:rounded-full md:items-center">
            {NavbarList.map((item) => (
                <div
                    key={item.id}
                    className="relative group hover:cursor-pointer"
                >
                    <Link
                        href={item.href}
                        className={`inline-block p-4 ${
                            pathName === item.href ? "text-accent" : ""
                        }`}
                    >
                        {React.cloneElement(item.icon, {
                            ...(pathName === item.href
                                ? { fill: "#f13024" }
                                : {}),
                        })}
                    </Link>
                    <div className="absolute bg-white text-black top-1/2 right-[calc(100%+4px)] -translate-y-1/2 px-2 py-1 rounded-lg hidden group-hover:hidden md:group-hover:block">
                        {item.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NavBar;
