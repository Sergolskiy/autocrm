import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './ProjectItem.css';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Man from "../../assets/img/man.jpg";
import {FormattedMessage} from "react-intl";

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
          <div className="project__left col-8">
            {/*<div className="project__title">*/}
              {/*Website Design and Development (Html&CSS, JS, PHP)*/}
            {/*</div>*/}
            <div className="project__back site-back">
              All Projects
            </div>

            <div className="site-block">
              <div className="project__status-block">
                <div className="project__create">
                  <div className="project__status-name">
                    <FormattedMessage id="app.status"/>
                  </div>
                  <div className="project__status-progress">
                    <FormattedMessage id="app.inProgress"/>
                  </div>
                </div>
                <div className="project__create">
                  <div className="project__status-name">
                    <FormattedMessage id="app.createdBy"/>
                  </div>
                  <div className="project__status-desc">
                    <img src={Man} alt="img"/>
                    Andrew Willington
                  </div>
                </div>
                <div className="project__date">
                  <div className="project__status-name">
                    <FormattedMessage id="app.creationDate"/>
                  </div>
                  <div className="project__status-desc">
                    Feb 14
                  </div>
                </div>
              </div>
            </div>



            <div className="site-block">
              <div className="project__sub-tasks sub-tasks">
                <div className="sub-tasks__top">
                  <div className="sub-tasks__title site-title-block">
                    Sub tasks
                  </div>
                  <div className="sub-tasks__create-btn">
                    <Button variant="contained"  className={'sub-tasks__create-btn'} size="large" color="primary">
                      + Create Subtasks
                    </Button>
                  </div>
                </div>

                <div className="sub-tasks__items">
                  <div className="sub-tasks__item">
                    <div className="sub-tasks__input">
                      <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        className={'sub-tasks__input-checkbox'}
                      />
                    </div>
                    <div className="sub-tasks__name">
                      Functionality development (PHP)
                    </div>
                    <div className="sub-tasks__status sub-tasks__status--process">
                      Not finished
                    </div>
                  </div>

                  <div className="sub-tasks__item">
                    <div className="sub-tasks__input">
                      <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        className={'sub-tasks__input-checkbox'}
                      />
                    </div>
                    <div className="sub-tasks__name">
                      Website Design and Development (Html&CSS, JS, PHP)
                    </div>
                    <div className="sub-tasks__status sub-tasks__status--waits">
                      Waits for approval
                    </div>
                  </div>

                  <div className="sub-tasks__item">
                    <div className="sub-tasks__input">
                      <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                        className={'sub-tasks__input-checkbox'}
                      />
                    </div>
                    <div className="sub-tasks__name">
                      Inner Pages Design (16 items)
                    </div>
                    <div className="sub-tasks__status sub-tasks__status--approved">
                      Approved
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="site-block">
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
                      <ul>
                        <li>- design</li>
                        <li>- frontend</li>
                        <li>- functionality</li>
                      </ul>

                    </p>

                    <p>
                      Deadline - 28 jun 2020
                    </p>
                  </div>

                  <div className="project-detail__desc-name">
                    Files Attached
                    <span className={'site-link'}>Download All</span>
                  </div>

                  <div className="project-detail__img ">
                    <div className="project-detail__img-items row">
                      <div className="project-detail__img-i col-6">
                        <div className="project-detail__img-i-w">
                          <img src={Man} alt="img"/>
                        </div>

                        <div className="project-detail__img-desc">
                          <b>
                            image.png
                          </b>
                          <span>
                          36.8 KБ
                        </span>
                        </div>
                      </div>


                      <div className="project-detail__img-i col-6">
                        <div className="project-detail__img-i-w">
                          <img src={Man} alt="img"/>
                        </div>

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

                  <div className="project-detail__info row">
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
        </div>

      </div>

    )
  }
}

export default ProjectItem
