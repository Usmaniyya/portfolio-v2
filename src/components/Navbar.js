import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Logo from './Logo'
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from './Icons'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[2px] inline-block  bg-dark 
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
       dark:bg-light `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter()
  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[2px] inline-block  bg-light
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
       dark:bg-dark/75 `}
      >
        &nbsp;
      </span>
    </button>
  )
}
const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative lg:px-16 md:px-12 sm:px-8 z-10">
      <button
        className="hidden lg:flex flex-col items-center justify-center"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex flex-col items-center justify-center  dark:text-dark/75">
            <CustomMobileLink
              href="/"
              title="Home"
              className="text-xl"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className="my-3 text-xl"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className="text-xl"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="hhtps://twitter.com/Y_Uthmaan"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com/Usmaniyya"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/usman-yahaya-5b232b137"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`ml-3 flex items-center justify-center p-1 rounded-full
          ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
          `}
            >
              {mode === 'dark' ? (
                <SunIcon className={'fill-dark'} />
              ) : (
                <MoonIcon className={'fill-dark'} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="w-full flex items-center justify-between lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 text-xl" />
          <CustomLink href="/about" title="About" className="mx-4 text-xl" />
          <CustomLink
            href="/projects"
            title="Projects"
            className="ml-4 text-xl"
          />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="hhtps://twitter.com/Y_Uthmaan"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/Usmaniyya"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="hhtps://linkedin.com"
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3 flex items-center justify-center p-1 rounded-full
          ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
          `}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%] md:left-[85%] ">
        <Logo />
      </div>
    </header>
  )
}

export default Navbar
