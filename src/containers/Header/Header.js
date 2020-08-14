import React, {Component} from 'react'
import './Header.css';
import {NavLink} from 'react-router-dom'
import LanguagesHead from "../../components/Languages/LanguagesHead/LanguagesHead";

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import { ReactComponent as SettingsImg } from '../../assets/img/icon/gear.svg';
import { ReactComponent as NotificationImg } from '../../assets/img/icon/notification.svg';

class Header extends Component {

  componentDidMount() {

  }

  render() {

    return (
      <header className={'header'}>
        {/*<LanguagesHead/>*/}
        <Container maxWidth="xl" className={'header__inner'}>
          <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center"
          >
            <Grid item xs={6}>
              <span className={'header__name'}>
                St. Pete Landburd
              </span>
              <span className={'header__edit'}>Edit</span>
            </Grid>
            <Grid item xs={6}>
              <Grid container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    spacing={2}
              >
                <Grid item className={'header__search'}>
                  <TextField
                    label="Search"
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
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </header>
    )
  }
}

export default Header
