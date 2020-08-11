import React, {Component} from 'react'
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
// import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";


class Layout extends Component{
  render() {

    return (
      <React.Fragment>
        <Header/>

        <main className={'main'}>

          {/*<Breadcrumbs/>*/}

          {this.props.children}
        </main>

        <Footer/>
      </React.Fragment>
    )
  }
}

export default Layout
