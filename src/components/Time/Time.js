import React, {Component} from 'react'
import './Time.css'
import {FormattedMessage} from "react-intl";


class Time extends Component {

  state = {
    intervalId: false,
    currentCount: 0,
  }

  componentDidMount() {
    let that = this;
    let today = new Date();
    let nowTime = today.getHours() + ':' + (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes());
    that.setState({ currentCount: nowTime });
    let intervalId = setInterval(function () {
      let nowTime = today.getHours() + ':' + (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes());
      that.setState({ currentCount: nowTime });
    }, 1000);
    // store intervalId in the state so it can be accessed later:

    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }


  render() {


    let today = new Date();
    let nowTime;

    setInterval(function () {
      nowTime = today.getHours() + ':' + (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()) + today.getSeconds()
    }, 1000)

    return (
      <div className="time-block">
        <div className="aside__time-current">
          {this.state.currentCount}
        </div>
      </div>
    )
  }
}

export default Time
