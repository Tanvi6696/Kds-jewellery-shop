import React from 'react'

const Collections = () => {
  return (
<div className='realative h-screen w-full bg-zinc-100 text-xl margin-10 '>
          <div className='h-[20%] lex flex-col items-center justify-center margin-top text-center gap-10 w-full bg-zinc-100'>
                          <p>&nbsp;</p>

            <h1 className='bg-zinc-100  w-full margin-top-10  font-bold text-zinc-900 text-5xl'>Our Collection
              <br/>
              <br/>
                               <h3 className='bg-zinc-100  margin-top-10 px-20 text-zinc-500 text-2xl'>Browse through our exquisite collection of handcrafted jewelry, designed to make <br />every moment special
            </h3>
            </h1>

             
          </div>
          <div className="h-[80%] flex items-center justify-center gap-5 mt-6">

  {/* Image 1 */}
  <div className="relative w-[25%] h-[40%] sm:h-[50%]">
    <img
      src="https://lh3.googleusercontent.com/p/AF1QipMQwVoB2Y1TXxS7uGF25qLmxRvSF4KPAGAOt1PU=w141-h118-n-k-no-nu"
      alt=""
      className="w-full h-full object-cover rounded-lg"
    />

    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white rounded-lg">
      <h2 className="text-4xl font-bold">Necklaces</h2>
      <p className="text-sm">Elegant gold and diamond necklaces</p>
    </div>
  </div>

  {/* Image 2 */}
  <div className="relative w-[25%] h-[40%] sm:h-[50%]">
    <img
      src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzw54sWuNj8jQb73wckzD8yAPlCwj7tTCU-LAp-PR0IFZGZQR9TNG11XTKPZ-2cGvrrOahpZAZKEegs6zK4fS9KRIvG2G1E81PuGep-0suF9LK4ZZbkNm7qMY727O8BBlVwCAOf=s1360-w1360-h1020-rw"
      alt=""
      className="w-full h-full object-cover rounded-lg"
    />

    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end  text-white rounded-lg">
      <h2 className="text-4xl font-bold">Rings</h2>
      <p className="text-sm">Stunning diamond and gold rings</p>
    </div>
  </div>

  {/* Image 3 */}
  <div className="relative w-[25%] h-[40%] sm:h-[50%]">
    <img
      src="https://lh3.googleusercontent.com/p/AF1QipPPtqZeFkuc78XDS7k9QaIqIAPnj6l1UE1U_RnE=s1360-w1360-h1020-rw"
      alt=""
      className="w-full h-full object-cover rounded-lg"
    />

    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white rounded-lg">
      <h2 className="text-4xl font-bold">Bangles</h2>
      <p className="text-sm">Traditional and modern gold bangles</p>
    </div>
  </div>

  {/* Image 4 */}
  <div className="relative w-[25%] h-[40%] sm:h-[50%]">
    <img
      src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzw54sWuNj8jQb73wckzD8yAPlCwj7tTCU-LAp-PR0IFZGZQR9TNG11XTKPZ-2cGvrrOahpZAZKEegs6zK4fS9KRIvG2G1E81PuGep-0suF9LK4ZZbkNm7qMY727O8BBlVwCAOf=s1360-w1360-h1020-rw"
      alt=""
      className="w-full h-full object-cover rounded-lg"
    />

    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white rounded-lg">
      <h2 className="text-4xl font-bold">Earrings</h2>
      <p className="text-sm">Exquisite earrings for every occasion</p>
    </div>
  </div>

</div>

          

    </div>
  )
}

export default Collections