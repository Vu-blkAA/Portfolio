'use client'

import devLottie from '@/public/assets/dev-lottie.json'
import planetLottie2 from '@/public/assets/plane2-lottie.json'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import * as React from 'react'

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
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
          className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute'
        >
          <div className='absolute top-0 left-0 w-full h-full'>
            <Lottie
              animationData={devLottie}
              className='absolute top-[20px] left-[-240px] w-full h-full z-20'
            />
            <Lottie
              animationData={planetLottie2}
              className='absolute w-[800px] h-[800px] top-[-105px] left-[-105px] z-0'
            />
          </div>
        </motion.div>

        {/* Circle */}
        <motion.svg
          className='w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]'
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
