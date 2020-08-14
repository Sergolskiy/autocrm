import React from 'react';
import './App.css';
import '../node_modules/normalize.css/normalize.css'
import {connect} from 'react-redux'
import Layout from "./hoc/Layout/Layout";
import {Route, Switch} from 'react-router-dom'
import Dashboard from "./containers/Dashboard/Dashboard";
import Projects from "./containers/Projects/Projects";
import ProjectItem from "./containers/ProjectItem/ProjectItem";
import ErrorPage from "./containers/ErrorPage/ErrorPage";

class App extends React.Component{

  render() {
    // console.log(this.props.currentLocale);


    return (

      <div className="site-wrap">
        <Layout>
          <Switch>
            <Route path='/' exact render={() => <Dashboard/>}/>
            <Route path='/projects' exact render={() => <Projects/>}/>
            <Route path='/project/:id' exact render={(props) => <ProjectItem {...props} />}/>
            <Route render={() => <ErrorPage/>}/>
          </Switch>
        </Layout>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    currentLocale: state.intl
  }
}


export default connect(mapStateToProps)(App);
