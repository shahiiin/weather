import Image from 'next/image'
import React from 'react'
import spinner from '../public/spinner.gif'

function Spinner() {
  return (
    <div>
      <Image className='w-[200px] m-auto block' src={spinner}/>
    </div>
  )
}

export default Spinner