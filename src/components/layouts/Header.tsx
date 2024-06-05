"use client";
import { ProfileSocial } from "@/src/constants/profile";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
    return (
        <div className="mx-auto p-4 justify-between md:items-center md:p-8 md:flex md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <Link href="/" className="text-center text-2xl md:text-left">
                <motion.div whileHover={{ scale: 1.2 }}>Vu Nguyen</motion.div>
            </Link>
            <div className="flex justify-center space-x-8 mt-4 md:mt-0">
                {ProfileSocial.map((item) => (
                    <motion.a
                        target="_blank"
                        href={item.href}
                        className="border p-2 rounded-full hover:cursor-pointer"
                        key={item.key}
                        whileHover={{ scale: 1.4 }}
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Header;
