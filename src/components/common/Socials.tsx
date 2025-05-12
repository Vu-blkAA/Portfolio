import { PROFILE_LINK } from '@/src/constants/profile'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface Props {
  containerStyles: string
  iconStyles: string
}

const socials = [
  {
    icon: <FaGithub />,
    path: PROFILE_LINK.github,
  },
  {
    icon: <FaLinkedin />,
    path: PROFILE_LINK.linkedin,
  },
]

const Socials = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, idx) => (
        <a
          target='_blank'
          rel='noreferrer'
          key={idx}
          href={item.path}
          className={iconStyles}
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default Socials
