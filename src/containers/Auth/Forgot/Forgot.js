import React, {Component} from 'react'
import './Forgot.css'


import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import Logo from "../../../assets/img/new-logo-min.png";
import {FormattedMessage} from "react-intl";

class Forgot extends Component {


  state = {
    email: '',
  }


  render() {

    return (
      <div className={'forgot-page'}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <Typography component="h1" variant="h5">
              <FormattedMessage id="app.resetPassword"/>
            </Typography>

            <form noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={<FormattedMessage id="app.emailAddress"/>}
                name="email"
                autoComplete="email"
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                <FormattedMessage id="app.reset"/>
              </Button>

              <Grid container className={'to-login-block'}>
                <Grid item xs>
                  <div variant="body2">
                    <NavLink to="/auth">
                      <FormattedMessage id="app.login"/>
                    </NavLink>
                  </div>
                </Grid>
              </Grid>

            </form>
          </div>

        </Container>
      </div>

    )
  }
}


export default Forgot
