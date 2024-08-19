'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='flex gap-8'>
      {links.map((link, idx) => (
        <Link
          href={link.path}
          key={idx}
          className={`capitalize font-medium hover:text-accent transition-all ${link.path === pathname ? 'text-accent border-b-2 border-accent' : ''}`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar

// "use client";
// import CodeIcon from "@/src/assets/icons/Code";
// import HomeIcon from "@/src/assets/icons/Home";
// import Hourglass from "@/src/assets/icons/Hourglass";
// import PersonIcon from "@/src/assets/icons/Person";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";
// import { motion } from "framer-motion";

// const NavbarList = [
//     {
//         id: 1,
//         label: "Homepage",
//         icon: <HomeIcon />,
//         href: "/",
//     },
//     {
//         id: 2,
//         label: "About",
//         icon: <PersonIcon />,
//         href: "/about",
//     },
//     {
//         id: 3,
//         label: "Experience",
//         icon: <Hourglass />,
//         href: "/experience",
//     },
//     {
//         id: 4,
//         label: "Skills",
//         icon: <CodeIcon />,
//         href: "/skills",
//     },
// ];

// const NavBar = () => {
//     const pathName = usePathname();

//     return (
//         <div className="w-full flex justify-around absolute bottom-0 left-0 bg-[rgba(255,255,255,0.4)] md:flex-col md:top-1/2 md:right-10 md:left-auto md:-translate-y-1/2 md:w-fit md:rounded-full md:items-center">
//             {NavbarList.map((item) => (
//                 <div
//                     key={item.id}
//                     className="relative group hover:cursor-pointer"
//                 >
//                     <motion.div whileHover={{
//                         rotate: "360deg",
//                         scale: 0.7,
//                         transition: { duration: 0.3 }
//                     }}>
//                         <Link
//                             href={item.href}
//                             className={`inline-block p-4 ${pathName === item.href ? "text-accent" : ""
//                                 }`}
//                         >

//                             {React.cloneElement(item.icon, {
//                                 ...(pathName === item.href
//                                     ? { fill: "#f13024" }
//                                     : {}),
//                             })}

//                         </Link>
//                     </motion.div>
//                     <div className="absolute bg-white text-black top-1/2 right-[calc(100%+4px)] -translate-y-1/2 px-2 py-1 rounded-lg hidden group-hover:hidden md:group-hover:block">
//                         {item.label}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default NavBar;
