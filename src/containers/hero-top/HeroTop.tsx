import React from 'react'
import Image from 'next/image'
import Typography from '@/design/typography/Typography'

export default function HeroTop() {
  return (
    <div className='relative h-[800px]'>
        <Image src={"/images/carrousel-1.webp"} alt='woman with bags' fill className='absolute object-cover brightness-90 h-full'/>
        <Typography component='h1' variant='h1' color='light' className='absolute top-1/4 md:left-40 left-10'>
        Be <br />Fashion !
        </Typography>
    </div>
  )
}
