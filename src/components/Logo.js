import React from 'react'
import { motion } from 'framer-motion'

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <motion.div
        className="w-16 h-16 bg-dark text-light flex justify-center items-center rounded-full text-2xl font-bold cursor-pointer border border-transparent dark:border-light md:w-8 md:h-8 md:text-xl md:p-6"
        whileHover={{
          backgroundColor: [
            '#121212',
            'rgba(131,58,180,1)',
            'rgba(253,29,29,1)',
            'rgba(252,176,69,1)',
            'rgba(131,58,180,1)',
            '#121212',
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        UY
      </motion.div>
    </div>
  )
}

export default Logo
