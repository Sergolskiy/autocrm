import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './AddProductPopup.css';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import {FormattedMessage} from "react-intl";


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
                <FormattedMessage id="app.addProduct"/>
                </span>
        </div>
        <div className="modal-popup__body">
          <div className="row">
            <div className="col-12">
              <div className="modal-popup__row">
                <TextField
                  id="standard-multiline-flexible"
                  label=<FormattedMessage id="app.productsName"/>
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
                  label=<FormattedMessage id="app.count"/>
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
                  label=<FormattedMessage id="app.price"/>
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

export default AddProductPopup
