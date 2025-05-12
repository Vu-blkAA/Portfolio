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
          className='w-[268px] h-[268px] xl:w-[400px] xl:h-[400px] 2xl:w-[498px] 2xl:h-[498px] absolute'
        >
          <div className='absolute top-0 left-0 w-full h-full'>
            <Lottie
              animationData={devLottie}
              className='absolute w-full h-full z-20 top-[-10px] left-[-60px] xl:top-[60px] xl:left-[-300px] 2xl:top-[50px] 2xl:left-[-350px]'
            />
            <Lottie
              animationData={planetLottie2}
              className='absolute z-0 w-[340px] h-[340px] top-[-43px] left-[37px] xl:w-[630px] xl:h-[630px] xl:top-[-83px] xl:left-[-183px] 2xl:w-[750px] 2xl:h-[750px] 2xl:top-[-100px] 2xl:left-[-200px]'
            />
          </div>
        </motion.div>

        {/* Circle */}
        <motion.svg
          className='w-[220px] h-[220px] ml-[80px] xl:w-[400px] xl:h-[400px] xl:ml-[-100px] 2xl:w-[480px] 2xl:h-[480px]'
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
