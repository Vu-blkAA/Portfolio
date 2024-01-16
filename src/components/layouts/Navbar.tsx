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
        <div className="w-full flex absolute bottom-0 left-0 justify-around bg-[rgba(255,255,255,0.4)] md:flex-col md:top-1/2 md:right-10 md:left-auto md:-translate-y-1/2 md:w-fit md:rounded-full md:items-center">
            {NavbarList.map((item) => (
                <Link
                    href={item.href}
                    className={`p-4 ${
                        pathName === item.href ? "text-accent" : ""
                    }`}
                    key={item.id}
                >
                    {React.cloneElement(item.icon, {
                        ...(pathName === item.href ? { fill: "#f13024" } : {}),
                    })}
                </Link>
            ))}
        </div>
    );
};

export default NavBar;
