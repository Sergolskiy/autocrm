import React, {Component} from 'react'


class ErrorPage extends Component {

  render() {

    return (
      <div className="wrapper-404">
        <span className="p-404">Страница не найдена <span> 404</span></span>
        <a href="/" className="back-to-main">Перейти на главную</a>
      </div>
    )
  }
}

export default ErrorPage
