import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'

const Mail = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="fixed right-8 bottom-8 inline-block w-20 md:hidden"
    >
      <Link href="mailto:usmanyahaya6967@gmail.com" target="_blank">
        <FiMail className="w-full text-4xl dark:text-light text-dark " />
      </Link>
    </motion.div>
  )
}

export default Mail
