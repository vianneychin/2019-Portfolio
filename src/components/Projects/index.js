import React from 'react'
import { Wrapper } from './styled'
import ProjectCard from './ProjectCard'
import useAos from '../../hooks/useAos'

const Projects = () => {
  useAos()
  return (
    <Wrapper>
      <div className='Title'>
        <h1 data-aos='flip-left'>⚒ Projects</h1>
      </div>
      <div className='Projects-Container'>
        <ProjectCard
          image={'https://i.imgur.com/ZTCBcxs.png'}
          alt={'safe parking la screenshot'}
          linkTo='https://safeparkinglosangeles.herokuapp.com/'
          github='https://github.com/vianneychin/Safe-Parking-LA'
          projectName=' 🚙 SafeParkingLA'
          technologiesUsed='React, React Router, Styled Components, JavaScript, HTML5, CSS3, Zeplin, Git, GitHub, Responsive Design'
          about='A hackathon project made in the course of a three day sprint. This website was created to assist the homeless living in their cars and provide them the necessary resources for safe, legal, and overnight parking. Data was gathered from an excel spreadsheet and converted into JSON format to search for resources such as food, supplies, showers, etc. '
        />
        <ProjectCard
          image={'https://i.imgur.com/B53Wr44.png'}
          alt={'subscribe to smells that matter screenshot'}
          linkTo='https://subscribe-to-smells.herokuapp.com/'
          github='https://github.com/vianneychin/Subscribe-to-Smells-That-Matter'
          technologiesUsed='React, React Hooks, React Router, Styled Components, JavaScript, HTML5, CSS3, Git, Github, Responsive Design'
          about='This project is a mockup design of a candle subscription service I had of mind. This mostly has frontend work and light backend work for a login. The website currently has one mockup candle and you can add it to your cart and checkout.'
          projectName='🕯 Candle Subscription'
        />
        <ProjectCard
          image={'https://i.imgur.com/NnwwVxe.jpg'}
          alt={'muscle maker screenshot'}
          github='https://github.com/vianneychin/Muscle-Maker'
          linkTo='https://muscle-maker-2.herokuapp.com/'
          projectName='🏋️‍ Muscle Maker Fitness'
          technologiesUsed='React, React Router, Styled Components, JavaScript, HTML5, CSS3, Python 3, Flask, Git, GitHub YouTube API'
          about='A fitness tracking website with a Python backend and a React frontend. Has Modals for registering and signing up. Implemented Youtube API search engine and video rendering.'
        />
        <ProjectCard
          image={'https://i.imgur.com/5lhbTh0.jpg'}
          alt={'weatherful screenshot'}
          linkTo='https://cryptic-plateau-22152.herokuapp.com/'
          projectName='☔ Weatherful Weather️️'
          github='https://github.com/vianneychin/Weatherful-Weather-App'
          technologiesUsed='React, React-Router, Moment, Styled Components, JavaScript, HTML5, CSS3, Node.js, Express.js, Mongoose.js, MongoDB, Git, GitHub, Dark Sky API'
          about="A minimalist weather tracking application to get your next 12 hour and 7 day forecast. Inspired by the Momentum dashboard for it's simplistic signup method and feel-good clutter-free UI."
        />
        <ProjectCard
          image={'https://i.imgur.com/sx11xwy.jpg'}
          alt={'californature screenshot'}
          github='https://github.com/vianneychin/Nature-Enthusiasts-Meetup'
          linkTo='http://californature.herokuapp.com/'
          projectName='⛰ Californature Meetup'
          technologiesUsed='HTML5, CSS3, JavaScript, EJS, Express.js, Node.js, Mongoose.js, MongoDB, Git, GitHub, Google Maps API, Geocoding API'
          about='A meetup website for nature enthusiasts and nature lovers alike. Register and join a local meetup or create one of your own. '
        />
        <ProjectCard
          image={'https://i.imgur.com/A8Xlvx1.jpg'}
          alt={'connect four two screenshot'}
          linkTo='https://vianneychin.github.io/Two-Player-Connect-Four-with-Zeplin.io/'
          github='https://github.com/vianneychin/Two-Player-Connect-Four-with-Zeplin.io'
          projectName='🎲 Connect Four Remake'
          technologiesUsed='HTML5, CSS3, jQuery, JavaScript, Zeplin'
          about='A remake created with the help of a UX Designer to gain more knowledge on better design and UI fundamentals for a better user experience.'
        />
        <ProjectCard
          image={'https://i.imgur.com/OSCsChB.jpg'}
          alt={'connect four one screenshot'}
          linkTo='https://vianneychin.github.io/Two-Player-Connect-Four/'
          github='https://github.com/vianneychin/Two-Player-Connect-Four'
          projectName='🎲 Connect Four'
          technologiesUsed='HTML5, CSS3, jQuery, JavaScript'
          about='My first project created on my own to further develop my JavaScript logic.'
        />
      </div>
    </Wrapper>
  )
}

export default Projects
