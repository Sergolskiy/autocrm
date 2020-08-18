import React, {Component} from 'react'
import './Dashboard.css'


class Dashboard extends Component {

  render() {

    return (
      <div className="dashboard">
        <div className="dashboard__time ">
          <div className="dashboard__curent-data col-3">
            <span>
              Current data
            </span>
            18.08.2020
          </div>
          <div className="dashboard__current-time col-3">
            <span>
              Current time
            </span>
            17.09
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
