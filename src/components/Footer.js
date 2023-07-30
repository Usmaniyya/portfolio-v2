import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full border-t border-solid border-dark  dark:border-light font-medium text-xl md:text-base dark:text-light">
      <Layout className="py-6 flex items-center justify-between lg:flex-col lg:py-4">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by &nbsp;
          <Link
            href={'https://github.com/Usmaniyya'}
            className="underline underline-offset-2"
          >
            Usmaniyya
          </Link>
        </div>
        <Link
          href={'https://github.com/Usmaniyya'}
          className="underline underline-offset-2"
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
