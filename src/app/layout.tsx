import React from 'react'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '../components/layouts/Header'
import PageTransition from '../components/common/PageTransition'
import StairTransition from '../components/common/StairTransition'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrainsMono',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Trey Nguyen',
  description: "Welcome to Trey Nguyen's Portfolio",
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Trey Nguyen',
    description: "Welcome to Trey Nguyen's Portfolio",
    images: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
