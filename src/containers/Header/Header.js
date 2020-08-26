import React, {Component} from 'react'
import './Header.css';
import {NavLink} from 'react-router-dom'
import LanguagesHead from "../../components/Languages/LanguagesHead/LanguagesHead";

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import { ReactComponent as SettingsImg } from '../../assets/img/icon/gear.svg';
import { ReactComponent as NotificationImg } from '../../assets/img/icon/notification.svg';
import Button from "@material-ui/core/Button";
import {FormattedMessage} from 'react-intl'
import {connect} from "react-redux";
import {auth, logout} from "../../store/action/auth";

class Header extends Component {

  componentDidMount() {

  }

  render() {

    return (
      <header className={'header'}>

        <Container maxWidth="xl" className={'header__inner'}>
          <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center"
          >
            <Grid item xs={12}>
              <Grid container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    spacing={2}
              >
                <Grid item className={'header__time'}>

                </Grid>
                <Grid item className={'header__lang'}>
                  <LanguagesHead/>
                </Grid>
                <Grid item className={'header__search'}>

                  <TextField
                    label=<FormattedMessage id="app.search"/>
                    margin="dense"
                    variant="outlined"
                  />
                  <span className={'header__search-btn'}> </span>
                </Grid>
                <Grid item >
                  <SettingsImg className={'header__settings'}/>
                </Grid>
                <Grid item >
                  <NotificationImg className={'header__notification'}/>
                </Grid>
                <Grid item >
                  <Button variant="contained" color="primary"
                  onClick={this.props.logout}>
                    <FormattedMessage id="app.logout"/>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </header>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Header)
