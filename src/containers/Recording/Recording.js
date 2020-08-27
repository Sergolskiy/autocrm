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

import './Recording.css'
import PopupWrapper from "../../hoc/PopupWrapper/PopupWrapper";
import AddRecordingPopup from "../../components/ModalPopups/AddRecordingPopup/AddRecordingPopup";

class Recording extends Component {

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
              <FormattedMessage id="app.recording"/>
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
          <Button variant="contained" className="yellow-btn recording__add-btn" onClick={this.addRecordingHandle}>
            {/*<FormattedMessage id="app.addProduct"/>*/}
            Добавить запись
          </Button>

          {this.state.isOpen ?
            <PopupWrapper classPopup={'add-recording'} closePopup={this.closePopupAddRecording}>
              <AddRecordingPopup />
            </PopupWrapper>
            : ''}
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
                    <TableCell><FormattedMessage id="app.time"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.task"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientName"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientPhone"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.responsible"/></TableCell>
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
                    <TableCell align="left">11:00</TableCell>
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
                    <TableCell align="left">12:30</TableCell>
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
                    <TableCell align="left">16:00</TableCell>
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
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

        <div className="page-section">
          <div className="page-section__name">
            <FormattedMessage id="app.tomorrow"/>
          </div>
          <div className="page-section__content">
            <TableContainer className={'recording-table'}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow className={'clients-table-head'}>
                    <TableCell><FormattedMessage id="app.time"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.task"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientName"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientPhone"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.responsible"/></TableCell>
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
                    <TableCell align="left">11:00</TableCell>
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
                    <TableCell align="left">12:30</TableCell>
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
                    <TableCell align="left">16:00</TableCell>
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
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="page-section">
          <div className="page-section__name">
            28.08.2020
          </div>
          <div className="page-section__content">
            <TableContainer className={'recording-table'}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow className={'clients-table-head'}>
                    <TableCell><FormattedMessage id="app.time"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.task"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientName"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientPhone"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.responsible"/></TableCell>
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
                    <TableCell align="left">11:00</TableCell>
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
                    <TableCell align="left">12:30</TableCell>
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
                    <TableCell align="left">16:00</TableCell>
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
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="page-section">
          <div className="page-section__name">
            31.08.2020
          </div>
          <div className="page-section__content">
            <TableContainer className={'recording-table'}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow className={'clients-table-head'}>
                    <TableCell><FormattedMessage id="app.time"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.task"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientName"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientPhone"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.responsible"/></TableCell>
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
                    <TableCell align="left">11:00</TableCell>
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
                    <TableCell align="left">12:30</TableCell>
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
                    <TableCell align="left">16:00</TableCell>
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
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="page-section">
          <div className="page-section__name">
            01.09.2020
          </div>
          <div className="page-section__content">
            <TableContainer className={'recording-table'}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow className={'clients-table-head'}>
                    <TableCell><FormattedMessage id="app.time"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.task"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientName"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.clientPhone"/></TableCell>
                    <TableCell align="left"><FormattedMessage id="app.responsible"/></TableCell>
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
                    <TableCell align="left">11:00</TableCell>
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
                    <TableCell align="left">12:30</TableCell>
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
                    <TableCell align="left">16:00</TableCell>
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
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    )
  }
}

export default Recording
