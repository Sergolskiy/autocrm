import React, {Component} from 'react'
import {ReactComponent as ClipImg} from "../../assets/img/icon/clip-ico.svg";
import {ReactComponent as CommentImg} from "../../assets/img/icon/comment-ico.svg";
import Man from "../../assets/img/man.jpg";
import './ProjectCard.css';
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {FormattedMessage} from "react-intl";



class ProjectCard extends Component {

  state = {
    isOpenSubtask: false,
  }

  componentDidMount() {

  }

  handleOpenSubtask = () => {
    console.log(123);
    this.setState({
      isOpenSubtask: !this.state.isOpenSubtask,
    })
  }

  infoTask = () => {
    this.props.infoHandler(1)
  }

  doneTask = () => {
    this.props.doneTaskHandler(1)
  }


  render() {
    // this.state.nameTask, this.state.descTask, this.state.createTask, this.state.employeeTask, this.state.statusTask


    return (
      <div className="col-md-4">
        <div className="projects-card__i">
          <div className="projects-card__i-content">
            {/*<NavLink to="/project/1" className="projects-card__i-name">*/}
              {/*Создание лендинга "New Arrivals".*/}
            {/*</NavLink>*/}
            <span className="projects-card__i-name" onClick={this.infoTask}>
              Создание лендинга "New Arrivals".
            </span>
            <div className="projects-card__i-description">
              Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.
            </div>
            <div className="projects-card__i-row">
              <div className="projects-card__i-row-time">
                <div className="projects-card__i-row-time-i">
                  <span><FormattedMessage id="app.taskSet"/>:</span> 04.08.2020 09:30
                </div>
                <div className="projects-card__i-row-time-i">
                  <span><FormattedMessage id="app.deadline"/>:</span> 25.08.2020 11:00
                </div>
              </div>
              {/*<div className="projects-card__i-row-i">*/}
                {/*<ClipImg className={'projects-card__i-row-ico'} width={'15px'} height={'15px'}/>*/}
                {/*7*/}
              {/*</div>*/}
              {/*<div className="projects-card__i-row-i">*/}
                {/*<CommentImg className={'projects-card__i-row-ico'} width={'15px'} height={'15px'}/>*/}
                {/*25*/}
              {/*</div>*/}
              <div className="projects-card__i-row-photo">
                    <span className="projects-card__i-row-photo-i">
                      <img src={Man} alt="img"/>
                    </span>
                    {/*<span className="projects-card__i-row-photo-i">*/}
                      {/*<img src={Man} alt="img"/>*/}
                    {/*</span>*/}
                    {/*<span className="projects-card__i-row-photo-i">*/}
                      {/*<img src={Man} alt="img"/>*/}
                    {/*</span>*/}
                    {/*<span className="projects-card__i-row-photo-i projects-card__i-row-photo-i--txt">*/}
                      {/*+3*/}
                    {/*</span>*/}
              </div>
            </div>
            <div className="projects-card__i-footer">
              <div className="projects-card__i-status yellow">
                Выполняется
              </div>
              <div className="projects-card__i-btn">
                <Button variant="contained" color="primary" className={"projects-card__i-btn-done"} onClick={this.doneTask} >Выполнено</Button>
              </div>
            </div>
            {/*<div className={"projects-card__i-subtask " + (this.state.isOpenSubtask ? 'active' : '')} >*/}
              {/*<span className="projects-card__i-subtask-link" onClick={this.handleOpenSubtask} >Показать подзадачи</span>*/}
              {/*<div className="projects-card__i-subtask-list">*/}
                    {/*<div className="projects-card__i-subtask-item">*/}
                      {/*<div className="projects-card__i-status green">*/}
                        {/*Готово*/}
                      {/*</div>*/}
                      {/*<div className="projects-card__i-name">*/}
                        {/*Создание лендинга "New Arrivals"*/}
                      {/*</div>*/}
                      {/*<div className="projects-card__i-row">*/}
                        {/*<div className="projects-card__i-row-i">*/}
                          {/*Май 13*/}
                        {/*</div>*/}
                      {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="projects-card__i-subtask-item">*/}
                      {/*<div className="projects-card__i-status yellow">*/}
                        {/*Выполняется*/}
                      {/*</div>*/}
                      {/*<div className="projects-card__i-name">*/}
                        {/*Создание веб-сайта под ключ "New Arrivals Key"*/}
                      {/*</div>*/}
                      {/*<div className="projects-card__i-row">*/}
                        {/*<div className="projects-card__i-row-i">*/}
                          {/*Май 13*/}
                        {/*</div>*/}
                      {/*</div>*/}
                    {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard
