import React from 'react';
import './App.css';
import '../node_modules/normalize.css/normalize.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import {connect} from 'react-redux'
import Layout from "./hoc/Layout/Layout";
import {Route, Switch, Redirect} from 'react-router-dom'
import Dashboard from "./containers/Dashboard/Dashboard";
import Projects from "./containers/Projects/Projects";
import ProjectItem from "./containers/ProjectItem/ProjectItem";
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import Auth from "./containers/Auth/Auth";
import {autoLogin} from "./store/action/auth";
import Forgot from "./containers/Auth/Forgot/Forgot";
import Drafts from "./containers/Drafts/Drafts";
import Clients from "./containers/Clients/Clients";
import Products from "./containers/Products/Products";
import Recording from "./containers/Recording/Recording";
import Settings from "./containers/Settings/Settings";
import Bills from "./containers/Bills/Bills";

class App extends React.Component {

  state = {
    login: true
  }

  componentDidMount() {
    let login = this.props.autoLogin()
    // this.setState({login: login});
  }

  render() {

    console.log();

    let routes = (

      <Switch>
        <Route path='/' exact render={() => <Dashboard/>}/>
        <Route exact path="/autocrm">
          <Redirect to="/"/>
        </Route>
        <Route exact path="/auth">
          <Redirect to="/"/>
        </Route>
        <Route path='/projects' exact render={() => <Projects/>}/>
        <Route path='/project/:id' exact render={(props) => <ProjectItem {...props} />}/>
        <Route path='/drafts' exact render={() => <Drafts/>}/>
        <Route path='/clients' exact render={() => <Clients/>}/>
        <Route path='/products' exact render={() => <Products/>}/>
        <Route path='/recording' exact render={() => <Recording/>}/>
        <Route path='/Settings' exact render={() => <Settings/>}/>
        <Route path='/bills' exact render={() => <Bills/>}/>
        <Route render={() => <ErrorPage/>}/>
      </Switch>
    )

    if (!this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/auth' exact render={() => <Auth/>}/>
          <Route path='/forgot' exact render={() => <Forgot/>}/>
          <Redirect to="/auth"/>

          {/*<Route path='/' exact render={() => <Dashboard/>}/>*/}
          {/*<Route exact path="/autocrm">*/}
          {/*<Redirect to="/" />*/}
          {/*</Route>*/}
          {/*<Route path='/projects' exact render={() => <Projects/>}/>*/}
          {/*<Route path='/project/:id' exact render={(props) => <ProjectItem {...props} />}/>*/}
          {/*<Route render={() => <ErrorPage/>}/>*/}
        </Switch>
      )
    }

    return (

      <div className="site-wrap">
        <Layout isAuthenticated={this.props.isAuthenticated}>
          {routes}
        </Layout>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    currentLocale: state.intl,
    isAuthenticated: state.auth.isAuthenticated
  }
}

function mapDispathToProps(dispath) {
  return {
    autoLogin: () => dispath(autoLogin())
  }
}


export default connect(mapStateToProps, mapDispathToProps)(App);
