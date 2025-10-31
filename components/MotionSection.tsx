"use client";


import { motion, HTMLMotionProps } from 'framer-motion'
import React from 'react'




type MotionSectionProps = HTMLMotionProps<'section'>

const MotionSection: React.FC<MotionSectionProps> = (props) => {
  return <motion.section {...props} />
}

export default MotionSection
