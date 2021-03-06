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
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import './Invoice.css'
import PopupWrapper from "../../hoc/PopupWrapper/PopupWrapper";
import AddInvoicePopup from "../../components/ModalPopups/AddInvoicePopup/AddInvoicePopup";

class Invoice extends Component {

  state = {
    isOpen: false,
  }


  addInvoicePopupHandle = () => {
    this.setState({
      isOpen: true
    })
  }
  closePopupAddInvoicePopup = () => {
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
        <div className="filter-head">

          <div className="site-filter">
            <span><FormattedMessage id="app.selectDate"/></span>
            <TextField
              type="date"
              defaultValue=""
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <Button variant="contained" className="yellow-btn recording__add-btn" onClick={this.addInvoicePopupHandle}>
            <FormattedMessage id="app.addNote"/>
          </Button>

          {this.state.isOpen ?
            <PopupWrapper classPopup={'add-invoice-item'} closePopup={this.closePopupAddInvoicePopup}>
              <AddInvoicePopup />
            </PopupWrapper>
            : ''}
        </div>
        <div className="page-section">
          <div className="page-section__content">
            <TableContainer className={'recording-table'}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow className={'clients-table-head'}>
                    <TableCell align="left"><FormattedMessage id="app.id"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.date"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.vendorCode"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientName"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.status"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.amount"/></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">1</TableCell>
                    <TableCell align="left">31.08.2020</TableCell>
                    <TableCell align="left">5554812</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select2"
                        value={2}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Без срока</MenuItem>
                        <MenuItem value={2}>Выполняется</MenuItem>
                        <MenuItem value={3}>Прострочено</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="left">541.50 UAH</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">2</TableCell>
                    <TableCell align="left">31.08.2020</TableCell>
                    <TableCell align="left">5554816</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select2"
                        value={3}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>Без срока</MenuItem>
                        <MenuItem value={2}>Выполняется</MenuItem>
                        <MenuItem value={3}>Прострочено</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="left">541.50 UAH</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.edit"/>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className={'site-table-row'}>
                    <TableCell colSpan={6} align="left"><strong><FormattedMessage id="app.total"/></strong></TableCell>
                    <TableCell align="right"><strong>1083.50 UAH</strong></TableCell>
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

export default Invoice
