import React from 'react'
import card from "../assets/card3-C1ytzxdn.png"

export default function CTA() {
  return (
    <section className='bg-[#FFF9EC] pt-1 rounded-lg'>
          <div className='max-w-6xl mx-auto grid grid-col lg:grid-cols-2 items-center px-8 gap-2 mt-28'>
              <div>
                  <h1 className='text-2xl lg:text-6xl tracking-tighter'>
                      Start Your
                      Flawless <br />
                      Payment Journey <br />
                      Today
                  </h1>
                  <button className='mt-6 bg-[#510453] px-12 py-4 text-white rounded-lg'>DownloadNow</button>
              </div>
              <img src={card} width={500} alt="" />
      </div>
    </section>
  )
}
