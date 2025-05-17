'use client'

import React, { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci'

const links = [
  {
    name: 'home',
    path: '/',
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

const MobileNavbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className='flex justify-center items-end' aria-label='Menu' asChild>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent>
        <div className='mt-32 mb-20 text-center text-2xl'>
          <Link href='/'>
            <h1 className='text-4xl font-semibold'>
              Trey<span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className={`text-xl capitalize hover:text-accent transition-all ${pathname === link.path ? 'text-accent border-b-2 border-accent' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar
