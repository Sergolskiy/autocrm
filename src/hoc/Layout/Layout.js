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

        {this.props.isAuthenticated ? <SidebarLeft/> : null}


        <div className="main-wrap">
          {this.props.isAuthenticated ? <Header/> : null}


          <main className={'main'}>

            {/*<Breadcrumbs/>*/}
            <Container maxWidth="xl" >
              {this.props.children}
            </Container>
          </main>

          {this.props.isAuthenticated ? <Footer/> : null}

        </div>


      </React.Fragment>
    )
  }
}

export default Layout
