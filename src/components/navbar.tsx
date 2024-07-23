import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-center w-full'>

   
    <div className='bg-gray-300 h-[10rem]  flex justify-between items-center'>
      <div>
<Image src={'/vedanta-logo.svg'} alt={'vedanta'}  width={500} height={500} className='h-44 w-44'></Image>
      </div>
      <div className='flex gap-4'>
<Link href={'/home'}><h1>home</h1></Link>
<h1>demo</h1>
<h1>demo</h1>
<h1>demo</h1>

</div>
<div className='flex gap-4'>
<h1>demo</h1>
<h1>demo</h1>
</div>
<div>

</div>
    </div>
    </div>
    
  )
}

export default Navbar