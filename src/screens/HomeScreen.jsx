import React, { useEffect } from 'react'

const HomeScreen = () => {
  useEffect(() => {
    let pall = "I'm Agos, Full Stack developer"
    console.log(pall.length)
  }, [])
  
  return (
    <main className='main'>
      <section className='main__hero'>
        <p className='int__home'>{`<h1> Hello Word! </h1>`}</p>
        <div className='titulo__container'>
          <p className='titulo titulo_home'><span style={{color:'#4abdac'}}>I'm Agos,</span> Full Stack developer</p>
        </div>        
      </section>
      {
        /*
        <div className='type__container'>
          <p className='type__text'>Typewriter CSS.</p>
        </div>
        */
      }
    </main>
  )
}

export default HomeScreen