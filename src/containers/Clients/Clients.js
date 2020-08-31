import React, {Component} from 'react'
import {FormattedMessage} from "react-intl";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom';

import './Clients.css'
import TextField from "@material-ui/core/TextField";
import PopupWrapper from "../../hoc/PopupWrapper/PopupWrapper";
import AddRecordingPopup from "../../components/ModalPopups/AddRecordingPopup/AddRecordingPopup";
import {NavLink} from "react-router-dom";

class Clients extends Component {

  state = {
    isOpen: false,
    clientInfo: {
      clientName: 'Олег',
      clientLastName: 'Побережный',
    },
    isHistoryClient: false
  }


  addRecordingHandle = () => {
    this.setState({
      isOpen: true
    })
  }
  closePopupAddRecording = () => {
    this.setState({
      isOpen: false
    })
  }


  render() {

    return (
      <div className="clients">
        <div className="page-title">
           <span className={'header__name'}>
              <FormattedMessage id="app.clients"/>
            </span>
        </div>

        <div className="filter-head">
          <Button variant="contained" className="yellow-btn recording__add-btn" onClick={this.addRecordingHandle}>
            <FormattedMessage id="app.addNote"/>
          </Button>
        </div>


        {this.state.isOpen ?
          <PopupWrapper classPopup={'add-recording'} closePopup={this.closePopupAddRecording}>
            <AddRecordingPopup/>
          </PopupWrapper>
          : ''}

        <TableContainer className={'clients-table'}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow className={'clients-table-head'}>
                <TableCell><FormattedMessage id="app.name"/></TableCell>
                <TableCell align="left"><FormattedMessage id="app.lastName"/></TableCell>
                <TableCell align="left"><FormattedMessage id="app.carBrand"/></TableCell>
                <TableCell align="left"><FormattedMessage id="app.phone"/></TableCell>
                <TableCell align="right"><FormattedMessage id="app.historyOfService"/></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={'site-table-row'}>
                <TableCell align="left">
                  {this.state.clientInfo.clientName}
                </TableCell>
                <TableCell align="left">
                  {this.state.clientInfo.clientLastName}
                </TableCell>
                <TableCell align="left">VW passat</TableCell>
                <TableCell align="left">123456789</TableCell>
                <TableCell align="right">
                  <NavLink to={'/waybills/' + '1'} >
                    <Button variant="contained" color="primary" size="small">
                      <FormattedMessage id="app.history"/>
                    </Button>
                  </NavLink>
                </TableCell>
              </TableRow>
              <TableRow className={'site-table-row'}>
                <TableCell align="left">Олег</TableCell>
                <TableCell align="left">Побережный</TableCell>
                <TableCell align="left">VW passat</TableCell>
                <TableCell align="left">123456789</TableCell>
                <TableCell align="right">
                  <NavLink to="/waybills">
                    <Button variant="contained" color="primary" size="small">
                      <FormattedMessage id="app.history"/>
                    </Button>
                  </NavLink>
                </TableCell>
              </TableRow>
              <TableRow className={'site-table-row'}>
                <TableCell align="left">Олег</TableCell>
                <TableCell align="left">Побережный</TableCell>
                <TableCell align="left">VW passat</TableCell>
                <TableCell align="left">123456789</TableCell>
                <TableCell align="right">
                  <NavLink to="/waybills">
                    <Button variant="contained" color="primary" size="small">
                      <FormattedMessage id="app.history"/>
                    </Button>
                  </NavLink>
                </TableCell>
              </TableRow>
              <TableRow className={'site-table-row'}>
                <TableCell align="left">Олег</TableCell>
                <TableCell align="left">Побережный</TableCell>
                <TableCell align="left">VW passat</TableCell>
                <TableCell align="left">123456789</TableCell>
                <TableCell align="right">
                  <NavLink to="/waybills">
                    <Button variant="contained" color="primary" size="small">
                      <FormattedMessage id="app.history"/>
                    </Button>
                  </NavLink>
                </TableCell>
              </TableRow>
              <TableRow className={'site-table-row'}>
                <TableCell align="left">Олег</TableCell>
                <TableCell align="left">Побережный</TableCell>
                <TableCell align="left">VW passat</TableCell>
                <TableCell align="left">123456789</TableCell>
                <TableCell align="right">
                  <NavLink to="/waybills">
                    <Button variant="contained" color="primary" size="small">
                      <FormattedMessage id="app.history"/>
                    </Button>
                  </NavLink>
                </TableCell>
              </TableRow>
              <TableRow className={'site-table-row'}>
                <TableCell align="left">Олег</TableCell>
                <TableCell align="left">Побережный</TableCell>
                <TableCell align="left">VW passat</TableCell>
                <TableCell align="left">123456789</TableCell>
                <TableCell align="right">
                  <NavLink to="/waybills">
                    <Button variant="contained" color="primary" size="small">
                      <FormattedMessage id="app.history"/>
                    </Button>
                  </NavLink>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    )
  }
}

export default Clients
