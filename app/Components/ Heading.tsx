import React from 'react'
interface HeadingProps {
    children: React.ReactNode
    className?: string
}
const  Heading:React.FC <HeadingProps>= (props) => {
  return (
    <h1 className={` text-[#C1C2C6] text-6xl font-extralight ${props.className}`}>
      {props.children}
    </h1>
  )
}

export default  Heading
