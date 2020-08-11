import React, {Component} from 'react'
import './LanguagesHead.css';
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import {updateIntl} from "react-intl-redux/lib";
import localRu from '../../../languages/ru'
import localEn from '../../../languages/en'

class LanguagesHead extends Component{

  render() {
    return (
      <React.Fragment>
        <p>
          <FormattedMessage id="app.greeting2" defaultMessage="привет" />
        </p>
        <button onClick={() => this.props.changeLocale('ru', localRu)}>Ru</button>
        <button onClick={() => this.props.changeLocale('en', localEn)}>EN</button>
      </React.Fragment>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentLocale: state.intl
  }
}

function mapDispatchToProps(dispath) {
  return{
    changeLocale: (loc,messages) => dispath(
      updateIntl({
        locale: loc,
        messages
      })
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesHead);
