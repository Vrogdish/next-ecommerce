import React from 'react'
import Image from 'next/image'

interface Props {
    className? : string
}

export default function Separate({className}: Props) {
  return (
    <Image 
    src={"/svg/separate.svg"}
    alt="separate"
    width={300}
    height={20}
    className={`m-auto h-5 ${className}`}
  />
  )
}
