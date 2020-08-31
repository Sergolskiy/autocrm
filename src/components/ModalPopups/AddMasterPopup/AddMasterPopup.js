import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './AddMasterPopup.css'

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import OutsideAlerter from "../../../hoc/OutsideCliker/OutsideCliker";
import {FormattedMessage} from "react-intl";


class AddMasterPopup extends Component {

  state = {
    client: 1,
  }


  handleChangeExecutor = (event) => {
    this.setState({
      client: event.target.value,
    })
  }


  handleClose = () => {
    this.props.handleClose();
  }


  render() {

    return (

      <div className="modal-popup__window container">
        <div className="modal-popup__header">
                <span>
                  {this.props.isEdit ? this.props.dataTask.nameTask : 'Добавить мастера'}
                </span>
        </div>
        <div className="modal-popup__body">
          <div className="waybills-popup__inner">
            {this.props.isEdit ?
              <React.Fragment>
                {/*<div className="row">*/}
                {/*<div className={'col-6'}>*/}
                {/*<TextField*/}
                {/*type="date"*/}
                {/*defaultValue=""*/}
                {/*label=<FormattedMessage id="app.orderDate"/>*/}
                {/*InputLabelProps={{*/}
                {/*shrink: true,*/}
                {/*}}*/}
                {/*/>*/}
                {/*</div>*/}
                {/*<div className={'col-6'}>*/}
                {/*<TextField*/}
                {/*type="date"*/}
                {/*defaultValue=""*/}
                {/*label=<FormattedMessage id="app.orderExecutionDate"/>*/}
                {/*InputLabelProps={{*/}
                {/*shrink: true,*/}
                {/*}}*/}
                {/*/>*/}
                {/*</div>*/}
                {/*</div>*/}


                {/*<div>*/}
                {/*<TextField*/}
                {/*id="standard-basic"*/}
                {/*label={<FormattedMessage id="app.clientName"/>}*/}
                {/*value={this.props.dataTask.nameTask}/>*/}
                {/*</div>*/}

                {/*<div>*/}


                {/*<TextField*/}
                {/*id="standard-basic"*/}
                {/*label={<FormattedMessage id="app.clientName"/>}*/}
                {/*value={this.props.dataTask.nameTask}/>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*<TextField*/}
                {/*id="standard-basic"*/}
                {/*label={<FormattedMessage id="app.carBrand"/>}*/}
                {/*value={this.props.dataTask.nameTask}/>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*<textarea name="" placeholder={"Описание"}*/}
                {/*defaultValue={this.props.dataTask.descTask}>*/}

                {/*</textarea>*/}
                {/*</div>*/}

                {/*<div className="row">*/}
                {/*<div className={'waybills-popup__works col-6'}>*/}
                {/*<div className="waybills-popup__work-title">*/}
                {/*Исполненые работы и услуги*/}
                {/*<Button variant="contained" color="primary" size="small">*/}
                {/*<FormattedMessage id="app.add"/>*/}
                {/*</Button>*/}
                {/*</div>*/}
                {/*<div className="waybills-popup__work-name">*/}

                {/*<TextField*/}
                {/*id="standard-basic"*/}
                {/*label={<FormattedMessage id="app.workName"/>}*/}
                {/*value={this.props.dataTask.nameTask}/>*/}


                {/*<TextField*/}
                {/*id="standard-basic"*/}
                {/*label={<FormattedMessage id="app.count"/>}*/}
                {/*value={this.props.dataTask.nameTask}/>*/}


                {/*<TextField*/}
                {/*id="standard-basic"*/}
                {/*label={<FormattedMessage id="app.price"/>}*/}
                {/*value={this.props.dataTask.nameTask}/>*/}


                {/*<TextField*/}
                {/*id="standard-basic"*/}
                {/*label={<FormattedMessage id="app.amount"/>}*/}
                {/*value={this.props.dataTask.nameTask}/>*/}


                {/*</div>*/}

                {/*</div>*/}
                {/*</div>*/}


                {/*<div className={'waybills-popup__spare-parts'}>*/}
                {/*<div className="waybills-popup__spare-parts-title">*/}
                {/*Использованые запчасти*/}
                {/*<Button variant="contained" color="primary" size="small">*/}
                {/*<FormattedMessage id="app.add"/>*/}
                {/*</Button>*/}
                {/*</div>*/}
                {/*<div className="waybills-popup__spare-parts-name">*/}

                {/*<TextField*/}
                {/*id="standard-basic"*/}
                {/*label={<FormattedMessage id="app.sparePartsName"/>}*/}
                {/*value={this.props.dataTask.nameTask}/>*/}


                {/*<TextField*/}
                {/*id="standard-basic"*/}
                {/*label={<FormattedMessage id="app.count"/>}*/}
                {/*value={this.props.dataTask.nameTask}/>*/}


                {/*<TextField*/}
                {/*id="standard-basic"*/}
                {/*label={<FormattedMessage id="app.price"/>}*/}
                {/*value={this.props.dataTask.nameTask}/>*/}


                {/*<TextField*/}
                {/*id="standard-basic"*/}
                {/*label={<FormattedMessage id="app.amount"/>}*/}
                {/*value={this.props.dataTask.nameTask}/>*/}

                {/*</div>*/}

                {/*</div>*/}

              </React.Fragment>

              :

              <React.Fragment>
                <div className="row">
                  <div className="col-12">


                    <div className="row">
                      <div className={'col-12'}>
                        <TextField className={"task-create__name-input"} id="standard-basic"
                                   label={<FormattedMessage id="app.clientName"/>}/>
                      </div>

                        <div className={'col-12'}>
                          <TextField className={"task-create__name-input"} id="standard-basic"
                                     label={<FormattedMessage id="app.lastName"/>}/>

                        </div>

                        <div className={'col-12'}>
                          <TextField className={"task-create__name-input"} id="standard-basic"
                                     label={<FormattedMessage id="app.phone"/>}/>

                        </div>
                    </div>
                  </div>

                </div>

              </React.Fragment>
            }


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
      </div>
    )
  }
}

export default AddMasterPopup
