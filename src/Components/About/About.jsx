import React from 'react'
import './About.css'
import about_img from '../Assets/about.png'
import play_icon from '../Assets/play-icon.png'


const About = ({setPlayState}) => {
  

  return (
    <div className='about'>
      <div className="about-left">
        <img className='about-img' src={about_img} alt=''/>
        <img src={play_icon} alt=''className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
         <h3>ABOUT UNIVERSITY</h3>
         <h2>Nurturing Tomorrrow's Leaders Today</h2>
         <p>Embarking on an educational journey is akin to setting sail on an adventure of knowledge, discovery,
             and personal growth. It is a voyage that transcends the boundaries of traditional classrooms, 
             encompassing a diverse array of experiences, challenges, and opportunities for individuals of all 
             ages and backgrounds.

            At its core, embarking on education is about embracing the pursuit of learning with enthusiasm
            and curiosity.
        </p>
        <p>Moreover, embarking on education fosters a culture of continuous growth and development.
             It encourages individuals to challenge assumptions, question the status quo, and cultivate 
        </p>
      </div>
    </div>
  )
}

export default About
