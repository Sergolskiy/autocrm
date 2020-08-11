import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import Layout from "./hoc/Layout/Layout";
import {Route, Switch} from 'react-router-dom'
import Dashboard from "./containers/Dashboard/Dashboard";
import ErrorPage from "./containers/ErrorPage/ErrorPage";

class App extends React.Component{

  render() {
    // console.log(this.props.currentLocale);


    return (

      <div className="App">
        <Layout>
          <Switch>
            <Route path='/' exact render={() => <Dashboard/>}/>
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
