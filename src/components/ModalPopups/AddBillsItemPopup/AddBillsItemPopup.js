import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './AddBillsItemPopup.css';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import TableCell from "../../../containers/Bills/Bills";


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
                 Добавить запись
                </span>
        </div>
        <div className="modal-popup__body">
          <div className="row">
            <div className="col-6">
              <div className="modal-popup__row">
                <TextField
                  id="datetime-local"
                  type="datetime-local"
                  label="Дата"
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
                  label="Имя клиента"
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
                  label="Артикул"
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
              Закрыть
            </Button>
            <Button variant="contained" color="primary" className={"modal-popup__btn-i"}>
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default AddBillsItemPopup
