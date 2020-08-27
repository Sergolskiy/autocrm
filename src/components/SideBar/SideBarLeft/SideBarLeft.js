import React, {Component} from 'react'
import './SideBarLeft.css';
import Man from '../../../assets/img/man.jpg'
import Logo from '../../../assets/img/new-logo-min.png'
import {NavLink} from 'react-router-dom'
import {FormattedMessage} from "react-intl";
import Bills from "../../../containers/Bills/Bills";

class SideBarLeft extends Component {


  render() {
    return (
      <aside className={'aside'}>

          <div className="aside__inner">
            <div className="aside__top">
              <NavLink className={'logo-name'} to="/">
                <span className={'logo'}>New </span>
                <span className="logo-sub">Life Auto</span>
              </NavLink>
            </div>
            <div className="aside__user">
              <div className="aside__user-img">
                <img src={Man} alt=""/>
              </div>
              <div className="aside__user-right">
                <div className="aside__user-name">
                  <FormattedMessage id="app.asideUserName"/>
                </div>
                <div className="aside__user-position">
                  <FormattedMessage id="app.asideUserPosition"/>
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
                    <FormattedMessage id="app.dashboard"/>
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/projects" className="aside__nav-link">
                    <FormattedMessage id="app.tasks"/>
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/clients" className="aside__nav-link">
                    <FormattedMessage id="app.clients"/>
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/s" className="aside__nav-link">
                    <FormattedMessage id="app.overhead"/>
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/products" className="aside__nav-link">
                    <FormattedMessage id="app.products"/>
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/recording" className="aside__nav-link">
                    <FormattedMessage id="app.recording"/>
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/bills" className="aside__nav-link">
                    <FormattedMessage id="app.bills"/>
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/d" className="aside__nav-link">
                    <FormattedMessage id="app.reports"/>
                  </NavLink>
                </li>
                <li className="aside__nav-item">
                  <NavLink to="/d" className="aside__nav-link">
                    <FormattedMessage id="app.settings"/>
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
