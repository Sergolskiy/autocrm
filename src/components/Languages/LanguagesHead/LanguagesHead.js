import React, {Component} from 'react'
import './LanguagesHead.css';
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import {updateIntl} from "react-intl-redux/lib";
import localRu from '../../../languages/ru'
import localEn from '../../../languages/en'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class LanguagesHead extends Component{

  handleChange = (event) => {
    if(event.target.value === 'ru') {
      this.props.changeLocale('ru', localRu)
    }
    if(event.target.value === 'en') {
      this.props.changeLocale('en', localEn)
    }

  }

  render() {

    return (
      <React.Fragment>
        {/*<p>*/}
          {/*<FormattedMessage id="app.greeting2" defaultMessage="привет" />*/}
        {/*</p>*/}
        {/*<button onClick={() => this.props.changeLocale('ru', localRu)}>Ru</button>*/}
        {/*<button onClick={() => this.props.changeLocale('en', localEn)}>EN</button>*/}

        <FormControl>
          <Select
            labelId="demo-controlled-open-select-label"
            onChange={this.handleChange}
            defaultValue={this.props.currentLocale.locale}
          >
            <MenuItem value={'ru'}>Ru</MenuItem>
            <MenuItem value={'en'}>En</MenuItem>
          </Select>
        </FormControl>
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
