import React from 'react'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'
import Socials from '../components/common/Socials'
import Photo from '../components/common/Photo'
import Stats from '../components/common/Stats'

const Page = () => {
  return (
    <section className='h-full relative'>
      <div className='container mx-auto h-full z-10'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='order-2 xl:order-none text-center xl:text-left'>
            <span className='text-xl'>Front-end Developer</span>
            <h1 className='h1 mb-6'>
              Hello I&apos;m <br /> <span>Trey Nguyen</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              Hi, I’m a front-end developer passionate about building responsive
              and visually appealing websites. I love turning ideas into smooth,
              user-friendly digital experiences with the help of modern web
              technologies, and I have a special passion for creating engaging
              animations that bring designs to life.
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
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
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Page
