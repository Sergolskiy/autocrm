import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import Man from "../../assets/img/man.jpg";
import FormControl from '@material-ui/core/FormControl';
import './Projects.css';


import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { ReactComponent as GridImg } from '../../assets/img/icon/grid-grid.svg';
import { ReactComponent as ListImg } from '../../assets/img/icon/grid-list.svg';
import ProjectCard from "../ProjectCard/ProjectCard";
import CreateTaskPopup from "../../components/ModalPopups/CreateTaskPopup/CreateTaskPopup";
import {FormattedMessage} from "react-intl";
import AddProductPopup from "../Products/Products";
import PopupWrapper from "../../hoc/PopupWrapper/PopupWrapper";



class Projects extends Component {

  state = {
    tabActive: 0,
    isOpenPopup: false,

    taskData: {
      nameTask: 'Создание лендинга "New Arrivals".',
      descTask: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.',
      createTask: '2019-07-24T11:30',
      employeeTask: 'Andrey Willin',
      statusTask: 'Выполняется',
    },
    isEditTask: false
  }

  componentDidMount() {

  }

  handleTabs = (index) => {
    this.setState({tabActive: index})
  }

  closeHandle = () => {
    this.setState({isOpenPopup: false})
  }

  openHandle = () => {
    this.setState({isEditTask: false})
    this.openPopup()
  }

  getInfoTask = (id) => {
    this.setState({isEditTask: true})
    this.openPopup()
  }

  openPopup = () => {
    this.setState({isOpenPopup: true})
  }
  doneTask = () => {
    alert('done');
  }


  render() {


    return (

      <div>
        <div className={'projects-page'}>

          <div className="page-title">
           <span className={'header__name'}>
              <FormattedMessage id="app.tasks"/>
            </span>
          </div>

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
                  <NavLink to={'/drafts'} className="top-nav__drafts">
                    <FormattedMessage id="app.drafts"/> (4)
                  </NavLink>
                  <div className="top-nav__create">

                    <Button variant="contained" size="large" color="primary" onClick={this.openHandle} >
                      <FormattedMessage id="app.createTask"/>
                    </Button>

                    {
                      !this.state.isEditTask
                        ?
                      this.state.isOpenPopup ?
                          <PopupWrapper classPopup={'task-create'} closePopup={this.closeHandle}>
                            <CreateTaskPopup isEdit={this.state.isEditTask}/>
                          </PopupWrapper>
                          : null
                        :
                        this.state.isOpenPopup ?
                          <PopupWrapper classPopup={'task-create'} closePopup={this.closeHandle}>
                            <CreateTaskPopup isEdit={this.state.isEditTask} dataTask={this.state.taskData}/>
                          </PopupWrapper>
                          : null
                    }
                    {/*<CreateTaskPopup closePopup={this.closeHandle} dataTask={this.state.taskData} isEdit={this.state.isEditTask} />*/}


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
                {/*{this.state.tabActive === 0 ?*/}
                  {/*<div className="top-nav__tabs-content">*/}
                    {/*<div className="top-nav__tabs-content-item">*/}
                      {/*<div className="top-nav__tabs-content-name">*/}
                        {/*Статус*/}
                      {/*</div>*/}
                      {/*<FormControl>*/}
                        {/*<Select*/}
                          {/*displayEmpty*/}
                          {/*inputProps={{'aria-label': 'Without label'}}*/}
                          {/*value={10}*/}
                        {/*>*/}
                          {/*<MenuItem value={10}>Any</MenuItem>*/}
                          {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                          {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                        {/*</Select>*/}
                      {/*</FormControl>*/}
                    {/*</div>*/}
                    {/*<div className="top-nav__tabs-content-item">*/}
                      {/*<div className="top-nav__tabs-content-name">*/}
                        {/*Категории*/}
                      {/*</div>*/}
                      {/*<FormControl>*/}
                        {/*<Select*/}
                          {/*displayEmpty*/}
                          {/*inputProps={{'aria-label': 'Without label'}}*/}
                          {/*value={10}*/}
                        {/*>*/}
                          {/*<MenuItem value={10}>Any</MenuItem>*/}
                          {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                          {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                        {/*</Select>*/}
                      {/*</FormControl>*/}
                    {/*</div>*/}
                    {/*<div className="top-nav__tabs-content-item">*/}
                      {/*<div className="top-nav__tabs-content-name">*/}
                        {/*Связано*/}
                      {/*</div>*/}
                      {/*<FormControl>*/}
                        {/*<Select*/}
                          {/*displayEmpty*/}
                          {/*inputProps={{'aria-label': 'Without label'}}*/}
                          {/*value={10}*/}
                        {/*>*/}
                          {/*<MenuItem value={10}>Any</MenuItem>*/}
                          {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                          {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                        {/*</Select>*/}
                      {/*</FormControl>*/}
                    {/*</div>*/}
                    {/*<div className="top-nav__tabs-content-item">*/}
                      {/*<div className="top-nav__tabs-content-name">*/}
                        {/*Сортировка по*/}
                      {/*</div>*/}
                      {/*<FormControl>*/}
                        {/*<Select*/}
                          {/*displayEmpty*/}
                          {/*inputProps={{'aria-label': 'Without label'}}*/}
                          {/*value={10}*/}
                        {/*>*/}
                          {/*<MenuItem value={10}>дате</MenuItem>*/}
                          {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                          {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                        {/*</Select>*/}
                      {/*</FormControl>*/}

                    {/*</div>*/}
                  {/*</div>*/}
                  {/*: ''}*/}

              {/*</div>*/}
              {/*<div className="top-nav__right">*/}
                {/*<NavLink to={'/drafts'} className="top-nav__drafts">*/}
                  {/*<FormattedMessage id="app.drafts"/> (4)*/}
                {/*</NavLink>*/}
                {/*<div className="top-nav__create">*/}

                  {/*<Button variant="contained" size="large" color="primary" onClick={this.openHandle} >*/}
                    {/*<FormattedMessage id="app.createTask"/>*/}
                  {/*</Button>*/}

                  {/*{ this.state.isOpenPopup ? <CreateTaskPopup closePopup={this.closeHandle} /> : null}*/}

                {/*</div>*/}
              {/*</div>*/}

            {/*</div>*/}

          </div>




          <div className="view-result">
            <div className="view-result__inner">
              <div className="view-result__col">
                <div className="view-result__items-txt">
                  <strong>8</strong> найденых элементов
                </div>
              </div>
              {/*<div className="view-result__col">*/}
                {/*<div className="view-result__subtitle">*/}
                  {/*Способ отображения*/}
                {/*</div>*/}
                {/*<span className="view-result__link active">*/}
                  {/*<GridImg className={'view-result__link-ico'} width={'20px'} height={'20px'}/>*/}
                  {/*Карточки*/}
                {/*</span>*/}
                {/*<span className="view-result__link">*/}
                  {/*<ListImg className={'view-result__link-ico'} width={'20px'} height={'20px'}/>*/}
                  {/*Список*/}
                {/*</span>*/}
              {/*</div>*/}
            </div>
          </div>

          <div className="projects-card">
            <div className="projects-card__content">
              <div className="row">
                <ProjectCard infoHandler={this.getInfoTask} doneTaskHandler={this.doneTask} />
                <ProjectCard infoHandler={this.getInfoTask} doneTaskHandler={this.doneTask} />
                <ProjectCard infoHandler={this.getInfoTask} doneTaskHandler={this.doneTask} />
                <ProjectCard infoHandler={this.getInfoTask} doneTaskHandler={this.doneTask} />

                <div className="col-md-4">
                  <div className="projects-card__i projects-card__i--create">
                    <div className="projects-card__i-content">
                      <div className="projects-card__i-create-task" onClick={this.openHandle}>
                        <div className="projects-card__i-create-ico">
                          +
                        </div>
                        <div className="projects-card__i-create-task-txt" >
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

export default Projects
