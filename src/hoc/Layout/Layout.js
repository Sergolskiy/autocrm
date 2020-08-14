import React, {Component} from 'react'
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import SidebarLeft  from '../../components/SideBar/SideBarLeft/SideBarLeft'


import Container from '@material-ui/core/Container';
// import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";


class Layout extends Component{
  render() {

    return (
      <React.Fragment>

        <SidebarLeft/>

        <div className="main-wrap">
          <Header/>

          <main className={'main'}>

            {/*<Breadcrumbs/>*/}
            <Container maxWidth="xl" >
              {this.props.children}
            </Container>
          </main>

          <Footer/>
        </div>


      </React.Fragment>
    )
  }
}

export default Layout
