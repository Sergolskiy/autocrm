import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './AddProductPopup.css';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";


class AddProductPopup extends Component {

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
                 Добавить продукт
                </span>
        </div>
        <div className="modal-popup__body">
          <div className="row">
            <div className="col-12">
              <div className="modal-popup__row">
                <TextField
                  id="standard-multiline-flexible"
                  label="Название продукта"
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
                  label="Количество"
                  className={"modal-popup__input"}
                  margin="normal"
                  fullWidth
                />
              </div>
            </div>
            <div className="col-6">
              <div className="modal-popup__row">
                <TextField
                  id="standard-multiline-flexible"
                  label="Цена"
                  className={"modal-popup__input"}
                  margin="normal"
                  fullWidth
                />
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

export default AddProductPopup
