import React, { useEffect } from 'react'
import ProjectItem from './ProjectsItem'
import MainProjectsContainer from './styled'
import UseAOS from '../_HOOKS/UseAos'

function Projects({ background, textColor }) {
  UseAOS()
  return (
    <MainProjectsContainer
      style={{ backgroundColor: background, color: textColor }}
    >
      <div>
        <h1 data-aos='fade-up'>Projects</h1>
        <ProjectItem
          data-aos='fade-up'
          h1='Safe Parking La'
          img='https://i.imgur.com/lUB1whV.png?1'
          about="Safe Parking LA is a Hackathon project designed to help those in need of a place to park for the night that are homeless. You can get help by finding resources in the custom API for resources all over Los Angeles ranging from groceries to showers."
          technologyUsed="HTML5, CSS3, JavaScript, React.js, styled-components, Zeplin.io, Git, Github, Sketch"
          GithubLink='https://github.com/vianneychin/Safe-Parking-LA'
          ProjectLink='https://safe-parking-la.herokuapp.com/'
        />
        <ProjectItem
          data-aos='fade-up'
          h1='Subscribe to Smells that Matter'
          img='https://i.imgur.com/WtrpYyk.png?1'
          about='Subscribe to Smells that Matter is a subscription website based on my love for subscription based models. Why not create another one based on lovely smelling candles!'
          technologyUsed='HTML5, CSS3, JavaScript, Mongoose, MongoDB, Node.js, Express, React.js, React Hooks, styled-components, Mobile-Responsive, Git, Github'
          GithubLink='https://github.com/vianneychin/Subscribe-to-Smells-That-Matter'
          ProjectLink='https://subscribe-to-smells.herokuapp.com/'
        />
        <ProjectItem
          h1='Muscle Maker'
          img='https://i.imgur.com/qGfFQsI.png?1'
          about='Muscle Maker is a workout fitness tracking app where you can keep track of workouts you want to do in the future. You can add a workout and check them off your list. You can also search YouTube videos through their API directly on the website.'
          technologyUsed='HTML5, CSS3, JavaScript, Python, Flask, React.js, styled-components, Axios, YouTube API, Git, Github'
          GithubLink='https://github.com/vianneychin/Muscle-Maker'
          ProjectLink='https://muscle-maker-2.herokuapp.com/'
        />
        <ProjectItem
          h1='Weatherful'
          img='https://i.imgur.com/mygNn3v.png?1'
          about='Weatherful is a weather tracking app used for Los Angeles live weather data. The weather data is being pulled from Dark Sky API which is update every minute. You can check the weather for the next 12 hours and the next 7 days.'
          technologyUsed='HTML5, CSS3, JavaScript, Moment.js, Axios, Node.js, Mongoose, MongoDB, Express, React.js, styled-components, Dark Sky Weather API, Git, Github'
          GithubLink='https://github.com/vianneychin/Nature-Enthusiasts-Meetup'
          ProjectLink='http://californature.herokuapp.com/'
        />
        <ProjectItem
          h1='Californature'
          img='https://i.imgur.com/sPIYblv.png?1'
          about='Californature is a meetup inspired for nature enthusiasts alike. You can create an event or join an event if you login or create an account.'
          technologyUsed='HTML5, CSS3, JavaScript, EJS, Node Fetch, Google Maps API, Geocoding API, Node.js, Mongoose, MongoDB, Express, Git, Github'
          GithubLink='https://github.com/vianneychin/Nature-Enthusiasts-Meetup'
          ProjectLink='http://californature.herokuapp.com/'
        />
        <ProjectItem
          h1='Two Player Connect Four II'
          img='https://i.imgur.com/BtB7aqL.png?1'
          about='Two Player Connect Four II is an extension of my first game. For this project I collaborated with a UX Designer to sharpen my skills. Used Zeplin.io to match her Sketch wireframes.'
          technologyUsed='HTML5, CSS3, JavaScript, jQuery, Zeplin.io'
          GithubLink='https://github.com/vianneychin/Two-Player-Connect-Four-with-Zeplin.io'
          ProjectLink='https://vianneychin.github.io/Two-Player-Connect-Four-with-Zeplin.io/'
        />
        <ProjectItem
          h1='Two Player Connect Four I'
          img='https://i.imgur.com/vuSgoQa.jpg?1'
          about='Two Player Connect Four I was my first project created to solidify and master my practice of JavaScript, HTML5, CSS3, and jQuery. Grab a friend or coworker and play some Connect Four!'
          technologyUsed='HTML5, CSS3, JavaScript, jQuery, Unsplash'
          GithubLink='https://github.com/vianneychin/Two-Player-Connect-Four'
          ProjectLink='https://vianneychin.github.io/Two-Player-Connect-Four/'
        />
      </div>
    </MainProjectsContainer>
  )
}

export default Projects