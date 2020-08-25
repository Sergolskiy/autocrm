import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Man from "../../assets/img/man.jpg";
import FormControl from '@material-ui/core/FormControl';
import './Drafts.css';


import Button from '@material-ui/core/Button';
import ProjectCard from "../ProjectCard/ProjectCard";



class Drafts extends Component {

  state = {
    tabActive: 0
  }

  componentDidMount() {

  }

  handleTabs = (index) => {
    this.setState({
      tabActive: index,
    })
  }



  render() {


    return (

      <div>
        <div className="page-title">
           <span className={'header__name'}>
              Drafts
            </span>
        </div>
        <div className={'projects-page'}>


          <div className="projects-page__top-nav top-nav">
            <div className="top-nav__head">
              <div className="top-nav__left">
                <div className="top-nav__tabs">
                  <div className={"top-nav__tabs-item " + (this.state.tabActive === 0 ? 'active' : '')}
                       onClick={() => this.handleTabs(0)}>
                    Проекты
                  </div>
                  <div className={"top-nav__tabs-item " + (this.state.tabActive === 1 ? 'active' : '')}
                       onClick={() => this.handleTabs(1)}>
                    Файлы
                  </div>
                  <div className={"top-nav__tabs-item " + (this.state.tabActive === 2 ? 'active' : '')}
                       onClick={() => this.handleTabs(2)}>
                    Notes
                  </div>
                  <div className={"top-nav__tabs-item " + (this.state.tabActive === 3 ? 'active' : '')}
                       onClick={() => this.handleTabs(3)}>
                    Activity
                  </div>
                </div>
              </div>
              <div className="top-nav__right">
                <div className="top-nav__team">
                  <div className="top-nav__title">
                    Команда
                  </div>
                  <div className="top-nav__photo">
                    <img src={Man} alt="img"/>
                  </div>
                  <div className="top-nav__photo">
                    <img src={Man} alt="img"/>
                  </div>
                  <div className="top-nav__photo">
                    <img src={Man} alt="img"/>
                  </div>
                  <div className="top-nav__photo">
                    <img src={Man} alt="img"/>
                  </div>
                  <div className="top-nav__photo">
                    <img src={Man} alt="img"/>
                  </div>
                  <div className="top-nav__manage">
                    Управление командой
                  </div>
                </div>
              </div>
            </div>
            <div className="top-nav__bottom">
              <div className="top-nav__left">

              </div>
              <div className="top-nav__right">
                <NavLink to={'/projects'} className="top-nav__drafts">
                  Проекты (12)
                </NavLink>
                <div className="top-nav__create">

                  <Button variant="contained" size="large" color="primary">
                    Создать задачу
                  </Button>
                </div>
              </div>

            </div>

          </div>




          <div className="view-result">
            <div className="view-result__inner">
              <div className="view-result__col">
                <div className="view-result__items-txt">
                  <strong>8</strong> найденых элементов
                </div>
              </div>
            </div>
          </div>

          <div className="projects-card">
            <div className="projects-card__content">
              <div className="row">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>

                <div className="col-md-4">
                  <div className="projects-card__i projects-card__i--create">
                    <div className="projects-card__i-content">
                      <div className="projects-card__i-create-task">
                        <div className="projects-card__i-create-ico">
                          +
                        </div>
                        <div className="projects-card__i-create-task-txt">
                          Создать задачу
                        </div>
                      </div>
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

export default Drafts
