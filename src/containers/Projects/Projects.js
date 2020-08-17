import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Man from "../../assets/img/man.jpg";
import FormControl from '@material-ui/core/FormControl';


import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


class Projects extends Component {

  state = {
    tabActive: 0
  }

  componentDidMount() {

  }

  handleTabs = (index) => {
    this.setState({
      tabActive: index
    })
  }

  render() {


    return (

      <div>
        <NavLink to="/project/1" className="aside__nav-link">
          Project 1
        </NavLink>
        <div className={'projects-page'}>


          <div className="projects-page__top-nav top-nav">
            <div className="top-nav__head">
              <div className="top-nav__left">
                <div className="top-nav__tabs">
                  <div className={"top-nav__tabs-item " + (this.state.tabActive === 0 ? 'active' : '')}
                       onClick={() => this.handleTabs(0)}>
                    Tabs
                  </div>
                  <div className={"top-nav__tabs-item " + (this.state.tabActive === 1 ? 'active' : '')}
                       onClick={() => this.handleTabs(1)}>
                    Files
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
                {this.state.tabActive === 0 ?
                  <div className="top-nav__tabs-content">
                    <div className="top-nav__tabs-content-item">
                      <div className="top-nav__tabs-content-name">
                        Статус
                      </div>
                      <FormControl>
                        <Select
                          displayEmpty
                          inputProps={{'aria-label': 'Without label'}}
                          value={10}
                        >
                          <MenuItem value={10}>Any</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="top-nav__tabs-content-item">
                      <div className="top-nav__tabs-content-name">
                        Категории
                      </div>
                      <FormControl>
                        <Select
                          displayEmpty
                          inputProps={{'aria-label': 'Without label'}}
                          value={10}
                        >
                          <MenuItem value={10}>Any</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="top-nav__tabs-content-item">
                      <div className="top-nav__tabs-content-name">
                        Связано
                      </div>
                      <FormControl>
                        <Select
                          displayEmpty
                          inputProps={{'aria-label': 'Without label'}}
                          value={10}
                        >
                          <MenuItem value={10}>Any</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="top-nav__tabs-content-item">
                      <div className="top-nav__tabs-content-name">
                        Сортировка по
                      </div>
                      <FormControl>
                        <Select
                          displayEmpty
                          inputProps={{'aria-label': 'Without label'}}
                          value={10}
                        >
                          <MenuItem value={10}>дате</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>

                    </div>
                  </div>
                  : ''}

              </div>
              <div className="top-nav__right">
                <div className="top-nav__drafts">
                  Черновики (4)
                </div>
                <div className="top-nav__create">

                  <Button variant="contained" size="large" color="primary">
                    Создать задачу
                  </Button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>


    )
  }
}

export default Projects
