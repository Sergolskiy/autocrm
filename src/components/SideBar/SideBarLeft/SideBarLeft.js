import React, {Component} from 'react'
import './SideBarLeft.css';
import Man from '../../../assets/img/man.jpg'
import Logo from '../../../assets/img/new-logo-min.png'
import {NavLink} from 'react-router-dom'

class SideBarLeft extends Component {


  render() {
    return (
      <aside className={'aside'}>

          <div className="aside__inner">
            <div className="aside__top">
              <NavLink to="/">
                <img src={Logo} alt="logo"/>
              </NavLink>
            </div>
            <div className="aside__user">
              <div className="aside__user-img">
                <img src={Man} alt=""/>
              </div>
              <div className="aside__user-right">
                <div className="aside__user-name">
                  Andrew Willington
                </div>
                <div className="aside__user-position">
                  Project Manager
                </div>
              </div>
            </div>
            {/*<div className="aside__time">*/}
              {/*<div className="aside__time-title">*/}
                {/*Today*/}
              {/*</div>*/}
              {/*<div className="aside__time-block">*/}
                {/*<div className="aside__time-current">*/}
                  {/*1:42*/}
                {/*</div>*/}
                {/*<div className="aside__time-btn">*/}

                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
            <nav className="aside__nav">
              <ul className="aside__nav-items">
                <li className="aside__nav-item">
                  <NavLink to="/" exact={true} className="aside__nav-link">
                    Дашборт
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/projects" className="aside__nav-link">
                    Projects
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/a" className="aside__nav-link">
                    Клиенты
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/s" className="aside__nav-link">
                    Накладные
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/d" className="aside__nav-link">
                    Товары
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/d" className="aside__nav-link">
                    Запись
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/d" className="aside__nav-link">
                    Отчеты
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/d" className="aside__nav-link">
                    Настройки
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="aside__copyright">
              Copyright 2020 All rights reserved
            </div>

          </div>

      </aside>
    )
  }
}

export default SideBarLeft
