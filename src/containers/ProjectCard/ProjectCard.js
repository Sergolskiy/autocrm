import React, {Component} from 'react'
import {ReactComponent as ClipImg} from "../../assets/img/icon/clip-ico.svg";
import {ReactComponent as CommentImg} from "../../assets/img/icon/comment-ico.svg";
import Man from "../../assets/img/man.jpg";
import './ProjectCard.css';
import {NavLink} from "react-router-dom";


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


  render() {

    return (
      <div className="col-md-4">
        <div className="projects-card__i">
          <div className="projects-card__i-content">
            <div className="projects-card__i-status yellow">
              Выполняется
            </div>
            <NavLink to="/project/1" className="projects-card__i-name">
              Создание лендинга "New Arrivals".  Lorem Ipsum начал как омлет, бессмысленные Латинской происходит
            </NavLink>
            <div className="projects-card__i-row">
              <div className="projects-card__i-row-i">
                Апр 13
              </div>
              <div className="projects-card__i-row-i">
                <ClipImg className={'projects-card__i-row-ico'} width={'15px'} height={'15px'}/>
                7
              </div>
              <div className="projects-card__i-row-i">
                <CommentImg className={'projects-card__i-row-ico'} width={'15px'} height={'15px'}/>
                25
              </div>
              <div className="projects-card__i-row-photo">
                    <span className="projects-card__i-row-photo-i">
                      <img src={Man} alt="img"/>
                    </span>
                <span className="projects-card__i-row-photo-i">
                      <img src={Man} alt="img"/>
                    </span>
                <span className="projects-card__i-row-photo-i">
                      <img src={Man} alt="img"/>
                    </span>
                <span className="projects-card__i-row-photo-i projects-card__i-row-photo-i--txt">
                      +3
                    </span>
              </div>
            </div>
            <div className={"projects-card__i-subtask " + (this.state.isOpenSubtask ? 'active' : '')} >
              <span className="projects-card__i-subtask-link" onClick={this.handleOpenSubtask} >Показать подзадачи</span>
              <div className="projects-card__i-subtask-list">
                    <div className="projects-card__i-subtask-item">
                      <div className="projects-card__i-status green">
                        Готово
                      </div>
                      <div className="projects-card__i-name">
                        Создание лендинга "New Arrivals"
                      </div>
                      <div className="projects-card__i-row">
                        <div className="projects-card__i-row-i">
                          Май 13
                        </div>
                      </div>
                    </div>
                    <div className="projects-card__i-subtask-item">
                      <div className="projects-card__i-status yellow">
                        Выполняется
                      </div>
                      <div className="projects-card__i-name">
                        Создание веб-сайта под ключ "New Arrivals Key"
                      </div>
                      <div className="projects-card__i-row">
                        <div className="projects-card__i-row-i">
                          Май 13
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

export default ProjectCard
