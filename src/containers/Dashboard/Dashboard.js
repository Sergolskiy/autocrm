import React, {Component} from 'react'
import './Dashboard.css'


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


    var today = new Date(),
      date = today.getDate() + '.' + today.getMonth()+1 + '.' + today.getFullYear();

    let nowTime;

    setInterval(function () {
      nowTime = today.getHours() + ':' + today.getMinutes() + today.getSeconds()
    }, 1000)

    return (
      <div className="dashboard">
        <div className="dashboard__time ">
          <div className="dashboard__curent-data col-3">
            <span>
              Current data
            </span>
            {/*18.08.2020*/}
            {date}
          </div>
          <div className="dashboard__current-time col-3">
            <span>
              Current time
            </span>
            {/*17.09*/}
            {this.state.currentCount}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
