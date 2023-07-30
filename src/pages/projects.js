import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Mail from '@/components/Mail'
import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import project1 from '../../public/images/projects/ne.png'
import project2 from '../../public/images/projects/next.png'
import project3 from '../../public/images/projects/infinite.png'
import project4 from '../../public/images/projects/agecalc.png'
import project5 from '../../public/images/projects/interactive.png'
import project6 from '../../public/images/projects/mosters.png'

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex lg:flex-col p-6 lg:p-8 md:p-6 xs:p-4 items-center justify-between border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl dark:text-light">
      <Link
        href=""
        target="_blank"
        className="w-1/2 lg:w-full overflow-hidden cursor-pointer rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto ml-1.5 md:ml-0"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 lg:w-full flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl mt-4 xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full font-bold text-3xl text-left sm:text-xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark/75 dark:text-light/75">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 sm:px-4 sm:text-sm text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center bg-light text-dark border border-solid border-dark dark:bg-dark dark:text-light dark:border-light p-6 sm:p-4 relative">
      <Link
        href=""
        target="_blank"
        className="w-full overflow-hidden cursor-pointer rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto ml-2"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl mt-4 lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full font-bold text-2xl text-left sm:text-xs md:text-base ">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}
const projects = () => {
  return (
    <>
      <Head>
        <title>Usman | Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-12 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Knowledge is trumped by creativity!"
            className="mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-6"
          />

          <div className="grid grid-cols-12 gap-20 gap-y-32 md:gap-y-20 sm:gap-y-6 xl:gap-x-8 lg:gap-x-6">
            <div className="col-span-12">
              <FeaturedProject
                title="NE Diversified"
                img={project1}
                summary="Single page application using Nextjs and Tailwindcss"
                type="Featured Project"
                link="https://ne-diversified.vercel.app/"
                github="https://github.com/Usmaniyya/ne-diversified"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Next Movies"
                img={project2}
                type="Featured Project"
                link="https://nextjs-movies-gamma.vercel.app/"
                github="https://github.com/Usmaniyya/nextjs-movies"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Infinite Scroll"
                img={project3}
                type="Featured Project"
                link="https://infinite-scroll-kohl.vercel.app/"
                github="https://github.com/Usmaniyya/infinite-scroll"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Monsters Rolodex"
                img={project6}
                summary="Monsters Rolodex using React, CSS, 
                               and JSONPlaceholder API. It fetches an API of Monsters and display their picture and Name."
                type="Featured Project"
                link="https://monsters-rolodex-ten-liart.vercel.app/"
                github="https://github.com/Usmaniyya/monsters-rolodex"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Age Calculator"
                img={project4}
                type="Featured Project"
                link="https://age-calculater.vercel.app/"
                github="https://github.com/Usmaniyya/age-calculater"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Interactive Card Form"
                img={project5}
                type="Featured Project"
                link="https://interactive-card-form-delta.vercel.app/"
                github="https://github.com/Usmaniyya/interactive-card-form"
              />
            </div>
          </div>
        </Layout>
        <Mail />
      </main>
    </>
  )
}

export default projects
