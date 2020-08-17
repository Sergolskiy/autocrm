import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Man from "../../assets/img/man.jpg";

class ProjectItem extends Component {

  state = {

  }

  componentDidMount() {

  }



  render() {
    // let pageId = this.props.match.params.id;

    return (

      <div className={'project'}>
        <div className="project__inner">
          <div className="project__left">
            <div className="project__title">
              Website Design and Development (Html&CSS, JS, PHP)
            </div>
            <div className="project__back">
              All Projects
            </div>

            <div className="project__status-block">
              <div className="project__status-name">
                <div className="project__status-title">
                  Status
                </div>
                <div className="project__status-progress">
                  In Progress
                </div>
              </div>
              <div className="project__create">
                <div className="project__status-name">
                  Created by
                </div>
                <div className="project__status-desc">
                  <img src={Man} alt="img"/>
                  Andrew Willington
                </div>
              </div>
              <div className="project__date">
                <div className="project__status-name">
                  Creation Date
                </div>
                <div className="project__status-desc">
                  Feb 14
                </div>
              </div>
            </div>


            <div className="project__sub-tasks sub-tasks">
              <div className="sub-tasks__top">
                <div className="sub-tasks__title site-title-block">
                  Sub tasks
                </div>
                <div className="sub-tasks__create-btn">
                  + Create Sub tasks
                </div>
              </div>

              <div className="sub-tasks__items">
                <div className="sub-tasks__item">
                  <div className="sub-tasks__input">

                  </div>
                  <div className="sub-tasks__name">
                    Functionality development (PHP)
                  </div>
                  <div className="sub-tasks__status">
                    Not finished
                  </div>
                </div>

                <div className="sub-tasks__item">
                  <div className="sub-tasks__input">

                  </div>
                  <div className="sub-tasks__name">
                    Website Design and Development (Html&CSS, JS, PHP)
                  </div>
                  <div className="sub-tasks__status">
                    waits for approval
                  </div>
                </div>

                <div className="sub-tasks__item">
                  <div className="sub-tasks__input">

                  </div>
                  <div className="sub-tasks__name">
                    Inner Pages Design (16 items)
                  </div>
                  <div className="sub-tasks__status">
                    Approved
                  </div>
                </div>
              </div>
            </div>

            <div className="project__detail project-detail">
              <div className="project-detail__title">
                Task Detail
              </div>

              <div className="project-detail__desc">
                <div className="project-detail__desc-name">
                  Task Description
                </div>

                <div className="project-detail__desc-txt">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  <p>
                    The main steps to release are: <br/>
                    - design
                    - frontend
                    - functionality
                  </p>

                  <p>
                    Deadline - 28 jun 2020
                  </p>
                </div>

                <div className="project-detail__desc-name">
                  Files Attached
                  <span className={'site-link'}>Download All</span>
                </div>

                <div className="project-detail__img">
                  <div className="project-detail__img-items">
                    <div className="project-detail__img-i">
                      <img src={Man} alt="img"/>
                      <div className="project-detail__img-desc">
                        <b>
                          image.png
                        </b>
                        <span>
                          36.8 KБ
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="project-detail__show-link">
                    Show All (41)
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="project-detail__desc-name">
                      Categories
                    </div>
                    <div className="project-detail__categories">
                      Design, Frontend
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="project-detail__desc-name">
                      Deadline
                    </div>
                    <div className="project-detail__deadline">
                      Jul 28
                    </div>
                  </div>
                </div>

              </div>


              <div className="project-detail__title">
                Management
              </div>
              <div className="project-detail__desc-name">
                Assigned to
              </div>
              <div className="project-detail__assigned">
                <div className="project-detail__assigned-i">
                  <img src={Man} alt="img"/>
                  Alice Walker
                </div>
                <div className="project-detail__assigned-i">
                  <img src={Man} alt="img"/>
                  Diana Rliam
                </div>
                <div className="project-detail__assigned-i">
                  <img src={Man} alt="img"/>
                  Diana Rigby
                </div>
              </div>

              <div className="project-detail__desc-name">
                Notes And Comments
              </div>

              <div className="project-detail__notes">
                <div>
                  1. Let PM know the result of communication with the client
                </div>
                <div>
                  2. Track time to the project (hourly payment)
                </div>
                <div>
                  3. Communicate with the team in task not in social network
                </div>
              </div>


            </div>

          </div>
        </div>

      </div>

    )
  }
}

export default ProjectItem
