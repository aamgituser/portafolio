import React from 'react'
import { SiJavascript,SiReact,SiSocketdotio } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  return (
    <main className='main'>
      <div className='titulo__container'>
        <p className='titulo projects'>Projects</p>
      </div>
      <section className='container'>
        <div className='project__item'>
          <span className='ttl'>Movies Api</span>
          <div className='project__item-dpn'>
            <SiJavascript/>
            <SiReact/>
            <SiSocketdotio/>
          </div>
          <div className='project__item-gt'>
            <BsGithub className='BsGithub' />
            <a className='git_link' target='_blank' href='https://github.com/aamgituser/socket-chat'>https://github.com/aamgituser/socket-chat</a>
          </div>
        </div>
        <div className='project__item'>
          <span className='ttl'>Chat con socket io</span>
          <div className='project__item-dpn'>
            <SiJavascript/>
            <SiReact/>
            <SiSocketdotio/>
          </div>
          {
            /*
            <iframe className='ytb-min'  src="https://www.youtube.com/embed/_R_yjcw7pk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            */
          }
          <div className='project__item-gt'>
            <BsGithub className='BsGithub' />
            <a className='git_link' target='_blank' href='https://github.com/aamgituser/socket-chat'>https://github.com/aamgituser/socket-chat</a>
          </div>
        </div>
        <div className='project__item'>
          <span className='ttl'>Task CRUD</span>
          <div className='project__item-dpn'>
            <SiJavascript/>
            <SiReact/>
            <SiSocketdotio/>
          </div>
          <div className='project__item-gt'>
            <BsGithub className='BsGithub' />
            <a className='git_link' target='_blank' href='https://github.com/aamgituser/socket-chat'>https://github.com/aamgituser/socket-chat</a>
          </div>
        </div>


      </section>
    </main>
  )
}

export default Projects