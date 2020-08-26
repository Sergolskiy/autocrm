import React, {Component} from 'react'
import './Date.css'
import {FormattedMessage} from "react-intl";


class Time extends Component {

  state = {
    intervalId: false,
    currentCount: 0,
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }


  render() {


    let today = new Date();
    let mounth = today.getMonth() + 1;
    mounth = mounth < 10 ? '0' + mounth : mounth;
    let date = today.getDate() + '.' + mounth + '.' + today.getFullYear();

    return (
      <div className="date-block">
        <div className="aside__time-current">
          {date}
        </div>
      </div>
    )
  }
}

export default Time
