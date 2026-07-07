import React from 'react'

function Service() {
return (

    <div className='realative h-screen px-6 sm:px-10 lg:px-30 w-[100%] bg-zinc-100 text-xl'>
      <div className='h-[20%] flex flex-col items-center justify-center text-center gap-10 w-full bg-zinc-100'>
        <h1 className='bg-zinc-100  w-full margin-top-10  font-bold text-zinc-900 text-4xl'>OUR SERVICES
          <br/><br/>
          <h3 className='bg-zinc-100   margin-top-10 text-zinc-600  text-[17px] '>Beyond selling exquisite jewelry, we offer comprehensive services to ensure your<br/> complete satisfaction</h3>
        </h1>

      </div>
<div className="h-[75%] grid grid-cols-1 md:grid-cols-2 gap-12 ">

   <div className='bg-orange-50 rounded-4xl gap-10 flex items-center justify-center'>
         <div className='left-50 w-20 h-20 bg-orange-400 rounded-full shrink-0'></div>
         <div className='font-bold text-4xl w-[90%]'>Custom Design
                  <p>&nbsp;</p>
               <h6 className='text-base'>Bring your vision to life with our bespoke jewelry design services.<br/> Our expert craftsmen work closely with you to create unique <br/>pieces that reflect your personal style.</h6>
          </div>
    </div>
    <div className='bg-orange-50 rounded-4xl gap-10 flex items-center justify-center'>
      <div className='w-20 h-20 bg-orange-400 rounded-full'></div>
         <div className='font-bold text-4xl  w-[90%]'>Repair & Maintenance
                  <p>&nbsp;</p>

           <h6 className=' text-base'>Professional jewelry repair and maintenance services to keep <br/>your precious pieces looking their best. From resizing to<br/> polishing, we handle it all.
              .</h6>
          </div>
      </div>    
      <div className='bg-orange-50 rounded-4xl gap-10 flex items-center justify-center'>
        <div className='w-20 h-20 bg-orange-400 rounded-full'></div>
      <div className='font-bold text-4xl  w-[90%]'>Old Gold Exchange
                <p>&nbsp;</p>
        <h6 className='text-base'>Exchange your old gold jewelry for new designs with fair and <br/>transparent pricing. Get the best value for your old ornaments.</h6>
      </div>
      </div>
      <div className='bg-orange-50 rounded-4xl gap-10 flex items-center justify-center'>
        <div className='w-20 h-20  bg-orange-400 rounded-full'></div>
      <div className='text-4xl font-bold w-[90%]'>Gift Packaging
          <p>&nbsp;</p>

        <h6 className='text-base'>Elegant gift packaging services for all occasions. Make your<br/> special moments even more memorable with our beautiful <br/>presentation.</h6>
      </div>
    </div>
       </div>
</div>
  )
}

export default Service