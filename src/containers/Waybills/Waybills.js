import React, {Component} from 'react'
import {FormattedMessage} from "react-intl";
import {NavLink, withRouter} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PopupWrapper from "../../hoc/PopupWrapper/PopupWrapper";
import AddBillsItemPopup from "../../components/ModalPopups/AddBillsItemPopup/AddBillsItemPopup";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import WaybillsPopup from "../../components/ModalPopups/WaybillsPopup/WaybillsPopup";
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Waybills.css'



class Waybills extends Component {

  state = {
    isOpen: false,
  }


  addBillsItemHandle = () => {
    this.setState({
      isOpen: true
    })
  }
  closePopupAddBillsItem = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    // console.log(this.props.match.params.id);
    const top100Films = [
      { title: 'Олег Побережный' },
      { title: 'The Godfather'},
      { title: 'The Godfather: Part II'},
      { title: 'The Dark Knight' },
    ];

    return (
      <div className="waybills">
        <div className="page-title">
           <span className={'header__name'}>
                <FormattedMessage id="app.overhead"/>
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

          <div className="filter-client-wrap">
            <Autocomplete
              className="filter-client-select"
              id="filter-client"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label={<FormattedMessage id="app.search"/> } variant="outlined"/>}
            />
          </div>

          <Button variant="contained" className="yellow-btn recording__add-btn" onClick={this.addBillsItemHandle}>
            Добавить запись
          </Button>

          {this.state.isOpen ?
            <PopupWrapper classPopup={'add-bills-item'} closePopup={this.closePopupAddBillsItem}>
              <WaybillsPopup />
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
                    <TableCell align="left"><FormattedMessage id="app.orderDate"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.orderExecutionDate"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientName"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.carBrand"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.amount"/></TableCell>
                    <TableCell align="right"><FormattedMessage id="app.detail"/></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">1</TableCell>
                    <TableCell align="left">31.08.2020</TableCell>
                    <TableCell align="left">31.08.2020</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">
                      vw passat b5
                    </TableCell>
                    <TableCell align="left">541.50 UAH</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.detail"/>
                      </Button>
                    </TableCell>
                  </TableRow>

                  <TableRow className={'site-table-row'}>
                    <TableCell align="left">2</TableCell>
                    <TableCell align="left">31.08.2020</TableCell>
                    <TableCell align="left">31.08.2020</TableCell>
                    <TableCell align="left">Олег Побережный</TableCell>
                    <TableCell align="left">
                      vw passat b5
                    </TableCell>
                    <TableCell align="left">541.50 UAH</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="primary" size="small">
                        <FormattedMessage id="app.detail"/>
                      </Button>
                    </TableCell>
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

export default withRouter(Waybills)
