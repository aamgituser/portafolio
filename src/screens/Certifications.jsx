import React from 'react'
import { FaFreeCodeCamp } from "react-icons/fa";

const Certifications = () => {
  return (
    <main className='main'>
        <h1>Certificacions</h1>
        <section className='certification__container'>
          <div className='certification__item'>
            <div className='certification__icon-ct'>
              <FaFreeCodeCamp/>
            </div>
            <div className='certification__item-info'>
              <span className='certification__item-info-ttl'>Diseño web adaptativo</span>
              <a target='_blank' href='https://www.freecodecamp.org/certification/fcc6f507e86-2390-4483-8447-505a4a0db0a6/javascript-algorithms-and-data-structures'>Ver certificacion</a>
              
            </div>
          </div>
          <div className='certification__item'>
            <div className='certification__icon-ct'>
              <FaFreeCodeCamp/>
            </div>
            <div className='certification__item-info'>
              <span className='certification__item-info-ttl'>Javascript Algorithms and Data Structures</span>
              <a target='_blank' href='https://www.freecodecamp.org/certification/fcc6f507e86-2390-4483-8447-505a4a0db0a6/javascript-algorithms-and-data-structures'>Ver certificacion</a>
              
            </div>
          </div>
          <div className='certification__item'>
            <div className='certification__icon-ct'>
              <FaFreeCodeCamp/>
            </div>
            <div className='certification__item-info'>
              <span className='certification__item-info-ttl'>Back End Developement and APIs</span>
              <a target='_blank' href='https://www.freecodecamp.org/certification/fcc6f507e86-2390-4483-8447-505a4a0db0a6/back-end-development-and-apis'>ver certificacion</a>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Certifications