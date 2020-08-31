import React, {Component} from 'react'
import {FormattedMessage} from "react-intl";


class ErrorPage extends Component {

  render() {

    return (
      <div className="wrapper-404">
        <span className="p-404"> <FormattedMessage id="app.pageNotFound"/> <span> 404</span></span>
        <a href="/" className="back-to-main"><FormattedMessage id="app.goToMainPage"/></a>
      </div>
    )
  }
}

export default ErrorPage
