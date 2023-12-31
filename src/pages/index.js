import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Mail from '@/components/Mail'
import profilePic from '../../public/images/profile/usman.jpg'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Usman - Home Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:hidden">
              <Image
                src={profilePic}
                alt="usman"
                className="w-80 h-auto rounded-primary lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Code and Design: Transforming Vision Into Reality"
                className="!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-2 text-base font-medium md:text-sm sm:text-xs">
                I&apos;m passionate about transforming concepts into
                cutting-edge web applications as a frontend developer. Look
                through my most recent projects to see how I&apos;ve used
                React.js and developed websites.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/myresume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 md:p-1.5 md:px-4 md:text-base rounded text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href="mailto:usmanyahaya6967@gmail.com"
                  className="ml-4 capitalize hover:underline  flex items-center p-2 px-6 md:p-1.5 md:px-4 md:text-base rounded text-lg font-semibold text-dark border-2 border-solid border-dark hover:bg-dark hover:text-light dark:border-light dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Mail />
      </main>
    </>
  )
}
