import React from 'react'
import { FaFreeCodeCamp } from "react-icons/fa";

const Certifications = () => {
  return (
    <main className='main'>
        <div className='titulo__container'>
          <p className='titulo certifications'>Certifications</p>
        </div>
        <section className='certification__container'>
          <div className='certification__item'>
            <div className='certification__icon-ct'>
              <FaFreeCodeCamp/>
            </div>
            <div className='certification__item-info'>
              <span className='ttl'>Responsive Web Design</span>
              <a className='link' target='_blank' href='https://www.freecodecamp.org/certification/fcc6f507e86-2390-4483-8447-505a4a0db0a6/javascript-algorithms-and-data-structures'>Ver certificacion</a>
              
            </div>
          </div>
          <div className='certification__item'>
            <div className='certification__icon-ct'>
              <FaFreeCodeCamp/>
            </div>
            <div className='certification__item-info'>
              <span className='ttl'>Javascript Algorithms and Data Structures</span>
              <a className='link' target='_blank' href='https://www.freecodecamp.org/certification/fcc6f507e86-2390-4483-8447-505a4a0db0a6/javascript-algorithms-and-data-structures'>Ver certificacion</a>
              
            </div>
          </div>
          <div className='certification__item'>
            <div className='certification__icon-ct'>
              <FaFreeCodeCamp/>
            </div>
            <div className='certification__item-info'>
              <span className='ttl'>Back End Developement and APIs</span>
              <a className='link' target='_blank' href='https://www.freecodecamp.org/certification/fcc6f507e86-2390-4483-8447-505a4a0db0a6/back-end-development-and-apis'>ver certificacion</a>
            </div>
          </div>
        </section>
    </main>
  )
}

export default Certifications