import React from 'react'
import { motion } from 'framer-motion'

const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
}

const reverseIndex = (idx: number) => {
  const totalStep = 6
  return totalStep - idx
}

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, idx) => {
        return (
          <motion.div
            key={idx}
            variants={stairAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              delay: reverseIndex(idx) * 0.1,
            }}
            className='h-full w-full bg-white relative'
          />
        )
      })}
    </>
  )
}

export default Stairs
