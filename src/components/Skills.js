import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaSass } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { MdHtml, MdCss } from 'react-icons/md'
import { DiNodejs } from 'react-icons/di'

const SkillCard = ({ icon, className = '' }) => {
  return (
    <motion.div
      className={`${className}`}
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.3,
        },
      }}
    >
      {icon}
    </motion.div>
  )
}

const Skills = ({ title }) => {
  return (
    <div className="my-16 mb-12 mt-28 md:mt-12 md:mb-8">
      <h1 className="font-bold text-dark dark:text-light text-5xl md:text-4xl mb-12 text-center">
        {title}
      </h1>
      <div className="grid grid-cols-4 gap-4 px-16 sm:px-6 mb-6">
        <SkillCard
          className={`col-span-1 md:col-span-2 flex items-center justify-center border border-solid border-dark dark:border-light p-8`}
          icon={
            <FaReact className="w-full h-auto hover:text-cyan-600 cursor-pointer" />
          }
        />
        <SkillCard
          className={`col-span-1 md:col-span-2 flex items-center justify-center border border-solid border-dark dark:border-light p-8`}
          icon={<TbBrandNextjs className="w-full h-auto cursor-pointer" />}
        />
        <SkillCard
          className={`col-span-1 md:col-span-2 flex items-center justify-center border border-solid border-dark dark:border-light p-8`}
          icon={
            <SiTailwindcss className="w-full h-auto hover:text-blue-400 cursor-pointer" />
          }
        />
        <SkillCard
          className={`col-span-1 md:col-span-2 flex items-center justify-center border border-solid border-dark dark:border-light p-8`}
          icon={
            <IoLogoJavascript className="w-full h-auto hover:text-yellow-400 cursor-pointer" />
          }
        />
      </div>
      <div className="grid grid-cols-4 gap-4 px-16 sm:px-6 mb-6">
        <SkillCard
          className={`col-span-1 md:col-span-2 flex items-center justify-center border border-solid border-dark dark:border-light p-8`}
          icon={
            <MdHtml className="w-full h-auto hover:text-red-500 cursor-pointer" />
          }
        />

        <SkillCard
          className={`col-span-1 md:col-span-2 flex items-center justify-center border border-solid border-dark dark:border-light p-8`}
          icon={
            <MdCss className="w-full h-auto hover:text-blue-700 cursor-pointer" />
          }
        />

        <SkillCard
          className={`col-span-1 md:col-span-2 flex items-center justify-center border border-solid border-dark dark:border-light p-8`}
          icon={
            <FaSass className="w-full h-auto hover:text-pink-800 cursor-pointer" />
          }
        />

        <SkillCard
          className={`col-span-1 md:col-span-2 flex items-center justify-center border border-solid border-dark dark:border-light p-8`}
          icon={
            <DiNodejs className="w-full h-auto hover:text-green-600 cursor-pointer" />
          }
        />
      </div>
    </div>
  )
}

export default Skills
