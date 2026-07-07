import React from 'react'

function className () {
  return (
    <div className='relative min-h-screen w-[100%] bg-zinc-100 text-xl'>
      <div className='h-[30%] flex flex-col items-center justify-center text-center bg-zinc-100'>
        <h1 className='text-5xl justify-contain-center'>Visit Us
          <h6 className='text-2xl'>We'd love to see you at our store. Come experience our collection in person</h6>
        </h1>
      </div>
      <div className='flex align items-center justify-center sm:px-6 lg:px-12 gap-10 padding-0,20 margin-40 bg-zinc-100 h-[70%]'>
        <div className='bg-zinc-200 flex flex-col items-center justify-center h-[60%] w-[20%]'>
          <div className='w-20 h-20 bg-orange-500 rounded-full'></div>
          <h3 className='text-center'>Address
<h6>Main Market Road,<br />
City Center,<br />
Maharashtra, India</h6></h3>

        </div>
                <div className='bg-zinc-200  flex flex-col items-center justify-center h-[60%] w-[20%]'>
                  <div className='w-20 h-20 bg-orange-500 rounded-full'></div>
          <h3 className='text-center'>Phone
<h6>+91 98765 43210<br />
+91 98765 43211</h6></h3>
        </div>
                <div className='bg-zinc-200 flex flex-col items-center justify-center h-[60%] w-[20%]'>
                  <div className='w-20 h-20 bg-orange-500 rounded-full'></div>
          <h3 className='text-center'>Email
<h6>info@kakadahalesaraf.com
<br />
sales@kakadahalesaraf.com</h6></h3>
        </div>
                <div className='bg-zinc-200 flex flex-col items-center justify-center h-[60%] w-[20%]'>
                  <div className='w-20 h-20 bg-orange-500 rounded-full'></div>
          <h3 className='text-center'>Hou
<h6>Mon - Sat<br />
10:00 AM - 8:00 PM</h6></h3>
        </div>
        
        

      </div>
    </div>
  )
}

export default className 