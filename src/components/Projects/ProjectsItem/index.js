import React, { useState } from 'react'
import { MainContainer } from './styled'

function ProjectItem(props) {
  return (
    <MainContainer style={{ height: '75vh' }}>
      <h1>
        {props.h1}
      </h1>
      <div>
        <img src={props.img} />
      </div>
      <div>
        <label>
          About:
        </label>
        <p>{props.about}</p>
        <br />
        <label>
          Technologies Used:
        </label>
        <p>{props.technologyUsed}</p>
        <div style={{
          marginTop: 40,
          display: 'flex',
          justifyContent: 'center'
        }}>
          <a
            className="button github"
            style={{ marginRight: 10 }}
            href={props.GithubLink}
          >
            Github
          </a>
          <a
            className="button project"
            href={props.ProjectLink}
          >
            View Project
          </a>
        </div>
      </div>
    </MainContainer>
  )
}

export default ProjectItem