'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Socials from '../components/common/Socials'
import Photo from '../components/common/Photo'
import { motion } from 'framer-motion'

const colors = [
  '#ff0080',
  '#ff8c00',
  '#40e0d0',
  '#00ff95',
  '#6a5acd',
  '#ff69b4',
  '#ffd700',
  '#00ffff',
  '#ff0080',
  '#ff8c00',
  '#40e0d0',
  '#00ff95',
  '#6a5acd',
]

const gradientStyle = {
  backgroundSize: "400% 400%",
  backgroundImage: `linear-gradient(
  270deg,
  ${[...colors, ...colors, ...colors].map((color, index) => `${color} ${index * 10}%`).join(', ')}
)`,
  willChange: "background-position",
}

const CV_LINK = 'https://www.topcv.vn/xem-cv/UFMOBFIEAwdTWFEOUFVQAVhcVVECDVBdBFBWBg8d5b'

const Page = () => {

  const onDownloadCV = () => {
    window.open(CV_LINK, '_blank')
  }

  return (
    <section className='h-full relative'>
      <div className='container mx-auto h-full z-10'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-6 2k:pt-12 2k:pb-24'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.4, ease: 'easeInOut' }}
            className='order-2 xl:order-none text-center xl:text-left'
          >
            <div className="flex flex-col mt-6 xl:mt-0 gap-9 2k:gap-12">
              <p className='text-2xl'>Full-stack Developer</p>
              <h1 className='h1'>
                Hello I&apos;m <br />
                <motion.span
                  className="text-transparent bg-clip-text"
                  style={gradientStyle}
                  animate={{ backgroundPosition: ["25% 50%", "100% 50%", "25% 50%"], }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  Trey Nguyen
                </motion.span>
              </h1>
              <p className='w-full text-center xl:max-w-[500px] xl:text-left text-white/80'>
                I’m a frontend developer with 3 years of experience in building responsive and user-friendly web apps.
                My expertise lies in crafting intuitive UI/UX using React and TypeScript.
                While I’m still learning backend development with Node.js and RESTful APIs,
                I’m passionate about becoming a full-stack developer.
              </p>
              <p className='w-full text-cetner xl:max-w-[500px] xl:text-left text-white/80'>
                Let’s connect and build something impactful together!
              </p>
              <div className='flex flex-col xl:flex-row items-center gap-8 mt-4'>
                <Button
                  variant='outline'
                  size='lg'
                  className='uppercase flex items-center gap-2'
                  onClick={onDownloadCV}
                >
                  <span>Download CV</span>
                  <FiDownload className='text-xl' />
                </Button>
                <div className='mb-8 xl:mb-0'>
                  <Socials
                    containerStyles='flex gap-6'
                    iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
