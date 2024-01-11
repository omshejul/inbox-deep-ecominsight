import React from 'react'
interface CardProps {
    children: React.ReactNode
    className?: string
    headText?: string
    headSpan?: string
}
const Card:React.FC <CardProps> = (props) => {
  return (
    <div className='flex flex-col overflow-hidden h-max rounded-xl bg-white text-gray-800'>
      <div className="flex font-semibold head p-4 bg-slate-100">

      <span className="">{props.headText}</span>
      {props.headSpan && <span className="opacity-50">&nbsp;⋅ {props.headSpan}</span>}
      </div>
    <div className={`flex h-max bg-white p-8 text-gray-800 ${props.className}`}>
      {props.children}
    </div>
    </div>
  )
}

export default Card
