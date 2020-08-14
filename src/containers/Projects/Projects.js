import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Projects extends Component {

  render() {

    return (


      <NavLink to="/project/1" className="aside__nav-link">
        Project 1
      </NavLink>

    )
  }
}

export default Projects
