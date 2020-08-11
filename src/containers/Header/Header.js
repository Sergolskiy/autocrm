import React, {Component} from 'react'
import './Header.css';
import {NavLink} from 'react-router-dom'
import LanguagesHead from "../../components/Languages/LanguagesHead/LanguagesHead";


class Header extends Component {

  componentDidMount() {

  }

  render() {

    return (
      <header className={'header'}>
        {/*<LanguagesHead/>*/}
      </header>
    )
  }
}

export default Header
