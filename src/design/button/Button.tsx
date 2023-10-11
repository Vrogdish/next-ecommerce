import React, { ReactNode } from 'react'

interface Props {
    className? : string
    children : ReactNode
    action : ()=>void
}

export default function Button({children, className,action}:Props) {
  return (
    <div className={`border rounded-full cursor-pointer py-2 px-4 text-center uppercase hover:bg-black hover:text-white transition-all ${className}`} onClick={action}>
        {children}
    </div>
  )
}
