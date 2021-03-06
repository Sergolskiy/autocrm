import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './AddBillsItemPopup.css';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import TableCell from "../../../containers/Bills/Bills";
import {FormattedMessage} from "react-intl";


class AddBillsItemPopup extends Component {

  componentDidMount() {

  }

  handleClose = () => {
    this.props.handleClose();
  }

  render() {

    return (
      <div className="modal-popup__window">
        <div className="modal-popup__header">
                <span>
                 <FormattedMessage id="app.addNote"/>
                </span>
        </div>
        <div className="modal-popup__body">
          <div className="row">
            <div className="col-6">
              <div className="modal-popup__row">
                <TextField
                  id="datetime-local"
                  type="datetime-local"
                  label=<FormattedMessage id="app.date"/>
                  className={"modal-popup__input modal-popup__input--time"}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="modal-popup__row">
                <TextField
                  id="standard-multiline-flexible"
                  label=<FormattedMessage id="app.clientName"/>
                  className={"modal-popup__input"}
                  fullWidth
                  margin="normal"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="modal-popup__row">
                <TextField
                  id="standard-multiline-flexible"
                  label=<FormattedMessage id="app.vendorCode"/>
                  className={"modal-popup__input"}
                  fullWidth
                  margin="normal"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="modal-popup__row">
                <Select
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                  value={2}
                  className="modal-popup__input modal-popup__input--select"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Без срока</MenuItem>
                  <MenuItem value={2}>Выполняется</MenuItem>
                  <MenuItem value={3}>Прострочено</MenuItem>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-popup__footer">
          <div className="modal-popup__btn">
            <Button variant="contained" color="secondary" className={"modal-popup__btn-i"} onClick={this.handleClose}>
              <FormattedMessage id="app.close"/>
            </Button>
            <Button variant="contained" color="primary" className={"modal-popup__btn-i"}>
              <FormattedMessage id="app.save"/>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddBillsItemPopup
