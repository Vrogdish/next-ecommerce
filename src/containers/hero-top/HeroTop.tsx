import React from 'react'
import Image from 'next/image'
import Typography from '@/design/typography/Typography'

export default function HeroTop() {
  return (
    <div className='relative h-[800px]'>
        <Image src={"/images/carrousel-1.jpg"} alt='' fill className='absolute object-cover brightness-90'/>
        <Typography component='h1' variant='h1' color='light' className='absolute top-1/4 left-40'>
        Be <br />Fashion !
        </Typography>
    </div>
  )
}
