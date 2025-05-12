'use client'

import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaDatabase,
  FaAtlassian
} from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

const about = {
  title: 'About me',
  description:
    `A passionate front-end developer with over 3 years of experience in building responsive and user-friendly web applications. 
    Skilled in modern technologies such as HTML5, CSS3, JavaScript, React, and Node.js. Strong problem-solving abilities and a keen eye 
    for detail ensure high-quality deliverables. Available for both on-site and freelance opportunities.`,
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Vu Nguyen (Trey)',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+84) 327 551 251',
    },
    {
      fieldName: 'Experience',
      fieldValue: '3+ Years',
    },
    {
      fieldName: 'Email',
      fieldValue: 'vublkaa@gmail.com',
    },
    {
      fieldName: 'Onsite',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
  ],
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    `Experienced in front-end development with a track record of delivering responsive, user-friendly web applications in agile environments. 
    Skilled in collaborating across teams to build scalable solutions and optimize UI/UX performance.`,
  items: [
    {
      company: 'Liberty Technology',
      position: 'Full-stack Developer',
      duration: '2023 - Present',
    },
    {
      company: 'Modoho Comp.',
      position: 'Front-end Developer',
      duration: '2021 - 2022',
    },
  ],
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    `Studied Software Engineering at Post and Telecommunications Institute of Technology, where I built a solid foundation in programming, 
    web development, and system design through both academic coursework and hands-on projects.`,
  items: [
    {
      institution: 'Post and Telecommunications Institute of Technology',
      degree: 'Software Engineering',
      duration: '2018 - 2023',
    },
  ],
}

const skills = {
  title: 'My skills',
  description:
    `Proficient in front-end development with expertise in modern web technologies, including HTML5, CSS3, JavaScript, 
    and frameworks like React and Node.js. Skilled in responsive design, version control (Git), cloud services (AWS), 
    and database management. Continuously learning and adapting to new tools and best practices.`,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
      color: 'skill-html5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
      color: 'skill-css3',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
      color: 'skill-javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
      color: 'skill-react',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
      color: 'skill-nextjs',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
      color: 'skill-nodejs',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
      color: 'skill-tailwindcss',
    },
    {
      icon: <FaGithub />,
      name: 'github',
      color: 'skill-github',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
      color: 'skill-figma',
      // gradient: 'skill-figma-gradient',
    },
    {
      icon: <FaAws />,
      name: 'aws',
      color: 'skill-aws',
    },
    {
      icon: <FaDatabase />,
      name: 'database',
      color: 'skill-database',
    },
    {
      icon: <FaAtlassian />,
      name: 'atlassian',
      color: 'skill-atlassian',
    },
  ],
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>
            {/* Experience */}
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 gap-[30px]'>
                    {experience.items.map((i, idx) => (
                      <li
                        key={idx}
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                      >
                        <span className='text-accent'>{i.duration}</span>
                        <h3 className='text-xl max-w-[400px] min-h-[60px] text-center lg:text-left'>
                          {i.position}
                        </h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent' />
                          <p className='text-white/60'>{i.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Education */}
            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 gap-[30px]'>
                    {education.items.map((i, idx) => (
                      <li
                        key={idx}
                        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                      >
                        <span className='text-accent'>{i.duration}</span>
                        <h3 className='text-xl max-w-[320px] min-h-[60px] text-center lg:text-left'>
                          {i.degree}
                        </h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent' />
                          <p className='text-white/60'>{i.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 xl:gap-[30px] 2xl:gap-[20px]'>
                  {skills.skillList.map((skill, idx) => (
                    <li key={idx}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className={`text-6xl group-hover:text-${skill.color} transition-all duration-300`}>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* About */}
            <TabsContent
              value='about'
              className='w-full text-center xl:text-left'
            >
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mb-8 mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-4 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((i, idx) => (
                    <li
                      key={idx}
                      className='flex items-center justify-center xl:justify-start gap-4'
                    >
                      <span className='text-white/60'>{i.fieldName}</span>
                      <span className='text-xl'>{i.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div >
    </motion.div >
  )
}

export default Resume
