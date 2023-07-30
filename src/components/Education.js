import React, { use, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%]  mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitaize text-2xl font-bold sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 sm:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full  md:text-sm">{info}</p>
      </motion.div>
    </li>
  )
}

const Education = ({ title }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })
  return (
    <div className="my-24 mb-16">
      <h2 className="font-bold text-5xl md:text-4xl xs:text-2xl mb-12 md:mb-8 w-full text-center text-dark dark:text-light ">
        {title}
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark dark:bg-light origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor of Science In Computer Science"
            time="2017-2023"
            place="Federal University Dutse"
            info="Relevant courses included 
            Data Structures and Algorithms, Operating Systems, 
            Computer Architecture and Artificial Intelligence"
          />
          <Details
            type="Online Coursework"
            time="2022-2023"
            place="Zero to Mastery Academy"
            info="Completed coursework on Javascript Advanced Concepts, 20 Javascript Projects, and Complete Web Developer 2023"
          />
          <Details
            type="Online Certification"
            time="2018-2020"
            place="Openclassroom"
            info="Completed coursework on Leran Javascript for the Web, Learn to Learn, Introduction to Programming using Javascript, and Learn HTML and CSS3"
          />
        </ul>
      </div>
    </div>
  )
}

export default Education
