"use client";

import { motion } from "framer-motion";

interface Props {

  children: React.ReactNode;

  onClick?: () => void;

  className?: string;

}

export default function PremiumButton({

  children,

  onClick,

  className = "",

}: Props){

  return(

<motion.button

whileHover={{
scale:1.04,
y:-3,
}}

whileTap={{
scale:.96
}}

onClick={onClick}

className={`
relative

overflow-hidden

rounded-2xl

px-8

py-4

font-bold

text-white

bg-gradient-to-r

from-emerald-600

to-green-500

shadow-xl

shadow-green-900/30

transition-all

${className}

`}

>

<div

className="
absolute
inset-0

bg-white/10

opacity-0

hover:opacity-100

transition

"

/>

<span className="relative">

{children}

</span>

</motion.button>

  )

}