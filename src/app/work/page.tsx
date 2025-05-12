'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Swiper as SwiperType } from 'swiper/types'
import Image from 'next/image'
import WorkSliderBtns from '@/src/components/common/WorkSliderBtns'

const projects = [
  {
    num: '01',
    category: 'Belink HRM',
    description:
      `Belink HRM is comprehensive digital HR platform designed to streamline workforce management, optimize operations, and enhance employee engagement within Liberty Group.
       It enables seamless coordination, allocation, and administration of human resources, helping organizations achieve their strategic goals.`,
    stack: [
      {
        name: 'ReactJS',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'AntDesign',
      },
      {
        name: 'TailwindCSS',
      },
      {
        name: 'Sass',
      },
      {
        name: 'React Query',
      },
      {
        name: 'NestJS',
      },
      {
        name: 'MongoDB',
      },
    ],
    image: '/assets/work/HRM.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'Liberty Carz',
    description:
      `Liberty Carz is a digital automotive marketplace powered by Liberty Technology. With Liberty Carz, customers can find high-quality cars to buy and rent, 
      and sellers can connect with potential customers. This application has revolutionized the auto industry in Cambodia and become No.1 Car Trading App in this country.`,
    stack: [
      {
        name: 'NextJS',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'AntDesign',
      },
      {
        name: 'TailwindCSS',
      },
      {
        name: 'Sass',
      },
      {
        name: 'Zustand',
      },
    ],
    image: '/assets/work/Carz.png',
    live: 'https://www.libertycarz.com/',
    github: '',
  },
  {
    num: '03',
    category: 'Cafefinz',
    description:
      `Cafefinz focuses on content, knowledge, and news related to investing. In addition, it serves as a platform where users can share 
      their personal perspectives on investing in general, and financial investment in particular.
`,
    stack: [
      {
        name: 'NextJS',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'React Query',
      },
      {
        name: 'Redux',
      },
      {
        name: 'TailwindCSS',
      },
    ],
    image: '/assets/work/Cafefinz.jpg',
    live: '',
    github: '',
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex

    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.category} project
              </h2>
              <p className='text-white/60'>{project.description}</p>
              {/* Stack */}
              <ul className='flex flex-wrap gap-4'>
                {project.stack.map((i, idx) => (
                  <li key={idx} className='text-xl text-accent'>
                    {i.name} {idx !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              {/* Border */}
              {(project.live || project.github) && (
                <div className='border border-white/20' />
              )}
              {/* Button */}
              <div className='flex items-center gap-4'>
                {/* Live project button */}
                {
                  project.live && (
                    <Link href={project.live} target='_blank'>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                            <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )
                }
                {/* Github project button */}
                {
                  project.github && (
                    <Link href={project.github} target='_blank'>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                            <BsGithub className='text-white text-3xl group-hover:text-accent' />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )
                }
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((prj, idx) => (
                <SwiperSlide key={idx} className='w-full'>
                  <div className='h-[380px] relative group flex justify-center items-center'>
                    {/* Overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full z-10' />
                    {/* Image */}
                    <div>
                      <Image
                        src={prj.image}
                        width={600}
                        height={600}
                        className='object-cover'
                        alt=''
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
