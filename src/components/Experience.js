import React, { use, useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitaize text-2xl font-bold sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 sm:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = ({ title }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })
  return (
    <div className="my-24">
      <h2 className="font-bold text-5xl md:text-4xl xs:text-2xl  mb-12 md:mb-8 w-full text-center text-dark dark:text-light">
        {title}
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark dark:bg-light origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Intern"
            company="Mahshell Soft Ltd"
            companyLink="https://mahshellsoft.com"
            time="2020-2021"
            address="Nasiriyya House, Dutse"
            work="Through my internship in Mashell Soft Ltd,
                    I was able to combine my technical expertise in HTML, CSS, and
                    JavaScript frameworks like React with a deep understanding of user
                    needs to deliver solutions that truly made a difference. The joy of
                    continuously learning and keeping up with the latest industry trends
                    allowed me to bring fresh ideas and innovation to every project"
          />
          <Details
            position="Intern"
            company="Techub Dyanmix Solution"
            companyLink="www.google.com"
            time="2022"
            address="Asmau Plaza, Dutse"
            work="Developed database schema for the company, Worked with a team to create inventory management system and schools portal"
          />
          <Details
            position="Instructor/Volunteer"
            company="Startup Jigawa"
            companyLink="https://startupjigawa.com.ng/"
            time="2022-2023"
            address="Dutse, Jigawa"
            work="As a volunteer, I have actively
                participated in various initiatives aimed at empowering others
                through technology. Whether it's organizing coding workshops for
                underprivileged youth or contributing to open-source projects, I
                believe in the transformative power of technology and its ability to
                bridge gaps and create opportunities."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
