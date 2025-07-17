import React from 'react'
import { Link } from 'react-router-dom';
import vid from "../assets/card-CVC6gemW.png";

export default function More() {
  return (
      <section className='max-w-6xl px-4 mx-auto mt-28 mb-28'>
          <div className="text-4xl md:text-6xl text-center tracking-tighter  mb-10 mt-6">
              Learn More About We <br />
              Serve You Best
          </div>
      <Link><img src={vid} alt="" /></Link>
    </section>
  )
}
