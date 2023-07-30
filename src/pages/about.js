import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Mail from '@/components/Mail'
import AnimatedText from '@/components/AnimatedText'
import profilePic from '../../public/images/profile/usman.jpg'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const about = () => {
  return (
    <>
      <Head>
        <title>Usman | About</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full flex flex-col justify-center items-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-12 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-6"
          />
          <div className="w-full grid grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start md:items-center justify-start md:col-span-8 md:order-2">
              <h2 className="mb-4 text-lg md:text-base  font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I am Usman, a web developer with a passion for creating
                beautiful, functional, and user-centered digital experiences.
                With 3 years of experience in the field. I am always looking for
                new and innovative ways to bring my client&apos;s visions to
                life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look
                pretty – it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I&apos;m working on a website or other digital product,
                I bring my commitment to design excellence and user-centered
                thinking to every project I work on. I look forward to the
                opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className="col-span-4 md:col-span-8 md:order-1 relative h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 md:p-4 dark:border-light dark:bg-dark">
              <Image
                src={profilePic}
                alt="usman"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <Skills title="Skills" />
          <Experience title="Experience" />
          <Education title="Education" />
        </Layout>
        <Mail />
      </main>
    </>
  )
}

export default about
