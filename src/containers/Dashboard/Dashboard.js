import React, {Component} from 'react'
import './Dashboard.css'
import Grid from "../Header/Header";
import {FormattedMessage} from "react-intl";


class Dashboard extends Component {

  state = {
    intervalId: false,
    currentCount: 0,
  }

  componentDidMount() {
    let that = this;
    let today = new Date();
    let nowTime = today.getHours() + ':' + today.getMinutes();
    that.setState({ currentCount: nowTime });
    let intervalId = setInterval(function () {
      let today = new Date();
      let nowTime = today.getHours() + ':' + today.getMinutes();
      that.setState({ currentCount: nowTime });
    }, 1000);
    // store intervalId in the state so it can be accessed later:

    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }

  timer(that) {
    // setState method is used to update the state

  }

  render() {


    let today = new Date();
    let mounth = today.getMonth() + 1;
    mounth = mounth < 10 ? '0' + mounth : mounth;
    let date = today.getDate() + '.' + mounth + '.' + today.getFullYear();

    let nowTime;

    setInterval(function () {
      nowTime = today.getHours() + ':' + today.getMinutes() + today.getSeconds()
    }, 1000)

    return (
      <div className="dashboard">
        <div className="page-title">
           <span className={'header__name'}>
             <FormattedMessage id="app.dashboard"/>
            </span>
          {/*<span className={'header__edit'}>Edit</span>*/}
        </div>

        <div className="dashboard__time ">
          <div className="dashboard__curent-data col-3">
            <span>
              <FormattedMessage id="app.currentDate"/>
            </span>
            {date}
          </div>
          <div className="dashboard__current-time col-3">
            {/*<span>*/}
              {/*Current time*/}
            {/*</span>*/}
            <div className="aside__time">
              <div className="aside__time-title">
                <FormattedMessage id="app.time"/>
              </div>
              <div className="aside__time-block">
                <div className="aside__time-current">
                  {this.state.currentCount}
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="dashboard-cards">
          <div className="dashboard-cards__inner row">
            <div className="col-md-3">
              <div className="dashboard-cards__item">
                <div className="dashboard-cards__title">
                  Сегодня
                </div>
                <div className="dashboard-cards__caption">
                  Теперешний баланс
                </div>
                <div className="dashboard-cards__money">
                  $243.65
                </div>
                <div className="dashboard-cards__count">
                  Ведет
                  <b>
                    4
                  </b>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="dashboard-cards__item">
                <div className="dashboard-cards__title">
                  Вчера
                </div>
                <div className="dashboard-cards__caption">
                  Общай баланс
                </div>
                <div className="dashboard-cards__money">
                  $243
                </div>
                <div className="dashboard-cards__count">
                  Ведет
                  <b>
                    345
                  </b>
                </div>
              </div>

            </div>
            <div className="col-md-2">
              <div className="dashboard-cards__item dashboard-cards__item--blue">
                <div className="dashboard-cards__title">
                  Сентябрь
                </div>
                <div className="dashboard-cards__caption">
                  За последний месяц
                </div>
                <div className="dashboard-cards__money">
                  $53 421
                </div>
                <div className="dashboard-cards__count">
                  Ведет
                  <b>
                    14 249
                  </b>
                </div>
              </div>

            </div>
            <div className="col-md-2">
              <div className="dashboard-cards__item">
                <div className="dashboard-cards__title">
                  Октябрь
                </div>
                <div className="dashboard-cards__caption">
                  Баланс за этот месяц
                </div>
                <div className="dashboard-cards__money">
                  $53 421
                </div>
                <div className="dashboard-cards__count">
                  Ведет
                  <b>
                    18 209
                  </b>
                </div>
              </div>

            </div>
            <div className="col-md-2">
              <div className="dashboard-cards__item">
                <div className="dashboard-cards__title">
                  Поточный баланс
                </div>
                <div className="dashboard-cards__caption">
                  Вы заработали
                </div>
                <div className="dashboard-cards__money">
                  $3 526
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Dashboard
