import React, {Component} from 'react'
import {FormattedMessage} from "react-intl";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import './Bills.css'
import PopupWrapper from "../../hoc/PopupWrapper/PopupWrapper";

class Bills extends Component {

  state = {
    isOpen: false,
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
      <div className="recording">
        <div className="page-title">
           <span className={'header__name'}>
              <FormattedMessage id="app.bills"/>
            </span>
        </div>
        <div className="recording-head">

          <div className="recording__filter">
            <span><FormattedMessage id="app.selectDate"/></span>
            <TextField
              type="date"
              defaultValue=""
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          {/*<Button variant="contained" className="yellow-btn recording__add-btn" onClick={this.addRecordingHandle}>*/}
            {/*Добавить запись*/}
          {/*</Button>*/}

          {/*{this.state.isOpen ?*/}
            {/*<PopupWrapper classPopup={'add-recording'} closePopup={this.closePopupAddRecording}>*/}
              {/*<AddRecordingPopup />*/}
            {/*</PopupWrapper>*/}
            {/*: ''}*/}
        </div>
        <div className="page-section">
          <div className="page-section__name">
            <FormattedMessage id="app.today"/>
          </div>
          <div className="page-section__content">
            <TableContainer className={'recording-table'}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow className={'clients-table-head'}>
                    <TableCell><FormattedMessage id="app.id"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.date"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.vendorCode"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientName"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.amount"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.status"/></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={'clients-table-row'}>
                    <TableCell align="left">9:00</TableCell>
                    <TableCell align="left">Название задачи</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">+380999999999</TableCell>
                    <TableCell align="left">Андрей Виллин</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'clients-table-row'}>
                    <TableCell colSpan={6} align="left">Итого</TableCell>
                    <TableCell align="right">554 654uah</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default Bills
