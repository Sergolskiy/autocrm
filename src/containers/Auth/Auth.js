import React, {Component} from 'react'
import './Auth.css'


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
import {auth} from "../../store/action/auth";
import {NavLink} from "react-router-dom";
import {FormattedMessage} from "react-intl";

class Auth extends Component {

  loginHandler = () => {
    // this.props.auth(
    //   'email',
    //   'pass',
    //   true
    // )
  }

  state = {
    email: '',
    pass: '',
  }

  handleLogin = (event) => {
    event.preventDefault();
    if(this.state.email.length === 0){
      return;
    }

    if(this.state.pass.length === 0){
      return;
    }

    this.props.auth(
      this.state.email,
      this.state.pass,
      true
    )
  }

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value});
  }

  handleChangePass = (event) => {
    this.setState({pass: event.target.value});
  }

  render() {

    return (
      <div className={'login-page'}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div >
            <Typography component="h1" variant="h5">
              <FormattedMessage id="app.signIn"/>
            </Typography>
            <form  noValidate onSubmit={this.handleLogin}>
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
                onChange={this.handleChangeEmail}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label={<FormattedMessage id="app.password"/>}
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChangePass}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                <FormattedMessage id="app.signIn"/>
              </Button>
              <Grid container className={'forgot-block'}>
                <Grid item xs>
                  <div href="#" variant="body2">
                    <NavLink to="/forgot">
                      <FormattedMessage id="app.forgotPassword"/>
                    </NavLink>
                  </div>

                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>

        </Container>
      </div>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
  }
}

export default connect(null, mapDispatchToProps)(Auth)
