'use client'

import devLottie from '@/public/assets/dev-lottie.json'
import planetLottie2 from '@/public/assets/plane2-lottie.json'
import { motion } from 'framer-motion'
import * as React from 'react'
import dynamic from 'next/dynamic';
const LottieAnimation = dynamic(
  () => import('lottie-react').then((mod) => mod.default),
  { ssr: false }
);

const Photo = () => {
  return (
    <div className='w-full h-full relative xl:pr-[100px] 3xl:pr-0'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className='w-[268px] h-[268px] 2xl:w-[320px] 2xl:h-[320px] 3xl:w-[498px] 3xl:h-[498px] absolute'
        >
          <div className='absolute top-0 left-0 w-full h-full'>
            <LottieAnimation
              animationData={devLottie}
              className='absolute w-[70%] h-[70%] z-20 top-[0px] left-[-10px] xl:w-full xl:h-full xl:top-[30px] xl:left-[-50px] 2xl:top-[50px] 2xl:left-[-250px] 3xl:left-[-350px]'
            />
            <LottieAnimation
              animationData={planetLottie2}
              className='absolute z-0 w-[240px] h-[240px] top-[-33px] left-[47px] xl:w-[400px] xl:h-[400px] xl:top-[-55px] xl:left-[25px] 2xl:w-[500px] 2xl:h-[500px] 2xl:top-[-65px] 2xl:left-[-165px] 3xl:w-[750px] 3xl:h-[750px] 3xl:top-[-100px] 3xl:left-[-200px]'
            />
          </div>
        </motion.div>

        {/* Circle */}
        <motion.svg
          className='w-[150px] h-[150px] ml-[80px] xl:w-[250px] xl:h-[250px] 2xl:w-[320px] 2xl:h-[320px] 2xl:ml-[-100px] 3xl:w-[480px] 3xl:h-[480px]'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx={253}
            cy={253}
            r={250}
            stroke='var(--accent)'
            strokeWidth={4}
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
