import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Man from "../../assets/img/man.jpg";
import FormControl from '@material-ui/core/FormControl';
import './Drafts.css';


import Button from '@material-ui/core/Button';
import ProjectCard from "../ProjectCard/ProjectCard";
import {FormattedMessage} from "react-intl";



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
             <FormattedMessage id="app.drafts"/>
            </span>
        </div>
        <div className={'projects-page'}>


          <div className="projects-page__top-nav top-nav">
            <div className="top-nav__head">
              <div className="top-nav__left">
                <div className="top-nav__tabs">
                  <div className={"top-nav__tabs-item " + (this.state.tabActive === 0 ? 'active' : '')}
                       onClick={() => this.handleTabs(0)}>
                    <FormattedMessage id="app.projects"/>
                  </div>
                  {/*<div className={"top-nav__tabs-item " + (this.state.tabActive === 1 ? 'active' : '')}*/}
                       {/*onClick={() => this.handleTabs(1)}>*/}
                    {/*<FormattedMessage id="app.files"/>*/}
                  {/*</div>*/}
                  {/*<div className={"top-nav__tabs-item " + (this.state.tabActive === 2 ? 'active' : '')}*/}
                       {/*onClick={() => this.handleTabs(2)}>*/}
                    {/*<FormattedMessage id="app.notes"/>*/}
                  {/*</div>*/}
                  {/*<div className={"top-nav__tabs-item " + (this.state.tabActive === 3 ? 'active' : '')}*/}
                       {/*onClick={() => this.handleTabs(3)}>*/}
                    {/*<FormattedMessage id="app.activity"/>*/}
                  {/*</div>*/}
                </div>
              </div>
              <div className="top-nav__right">
                <NavLink to={'/projects'} className="top-nav__drafts">
                  <FormattedMessage id="app.tasks"/> (12)
                </NavLink>
                <div className="top-nav__create">

                  <Button variant="contained" size="large" color="primary">
                    <FormattedMessage id="app.createTask"/>
                  </Button>
                </div>
                {/*<div className="top-nav__team">*/}
                  {/*<div className="top-nav__title">*/}
                    {/*<FormattedMessage id="app.team"/>*/}
                  {/*</div>*/}
                  {/*<div className="top-nav__photo">*/}
                    {/*<img src={Man} alt="img"/>*/}
                  {/*</div>*/}
                  {/*<div className="top-nav__photo">*/}
                    {/*<img src={Man} alt="img"/>*/}
                  {/*</div>*/}
                  {/*<div className="top-nav__photo">*/}
                    {/*<img src={Man} alt="img"/>*/}
                  {/*</div>*/}
                  {/*<div className="top-nav__photo">*/}
                    {/*<img src={Man} alt="img"/>*/}
                  {/*</div>*/}
                  {/*<div className="top-nav__photo">*/}
                    {/*<img src={Man} alt="img"/>*/}
                  {/*</div>*/}
                  {/*<div className="top-nav__manage">*/}
                    {/*<FormattedMessage id="app.teamManagement"/>*/}
                  {/*</div>*/}
                {/*</div>*/}
              </div>
            </div>
            {/*<div className="top-nav__bottom">*/}
              {/*<div className="top-nav__left">*/}

              {/*</div>*/}
              {/*<div className="top-nav__right">*/}
                {/*<NavLink to={'/projects'} className="top-nav__drafts">*/}
                  {/*<FormattedMessage id="app.tasks"/> (12)*/}
                {/*</NavLink>*/}
                {/*<div className="top-nav__create">*/}

                  {/*<Button variant="contained" size="large" color="primary">*/}
                    {/*<FormattedMessage id="app.createTask"/>*/}
                  {/*</Button>*/}
                {/*</div>*/}
              {/*</div>*/}

            {/*</div>*/}

          </div>




          <div className="view-result">
            <div className="view-result__inner">
              <div className="view-result__col">
                <div className="view-result__items-txt">
                  <strong>8</strong> <FormattedMessage id="app.foundItems"/>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-card">
            <div className="projects-card__content">
              <div className="row">
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
                          <FormattedMessage id="app.createTask"/>
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
