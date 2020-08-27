import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './CreateTaskPopup.css';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import OutsideAlerter from "../../../hoc/OutsideCliker/OutsideCliker";


class CreateTaskPopup extends Component {

  state = {
    executor: 1,
    status: 1,
    // isOpen: false,
  }

  // componentDidMount() {
  //   let that = this;
  //   setTimeout(function () {
  //     that.setState({
  //       isOpen: true,
  //     })
  //   }, 1);
  // }

  handleChangeExecutor = (event) => {
    this.setState({
      executor: event.target.value,
    })
  }
  handleChangeStatus = (event) => {
    this.setState({
      status: event.target.value,
    })
  }

  // handleOutsideClick = () => {
  //   this.setState({
  //     isOpen: false,
  //   })
  //
  //   let that = this;
  //   setTimeout(function () {
  //     that.props.closePopup();
  //   }, 300);
  //
  // }

  handleClose = () => {
    this.props.handleClose();
  }


  render() {

    return (

      <div className="modal-popup__window container">
        <div className="modal-popup__header">
                <span>
                  {this.props.isEdit ? this.props.dataTask.nameTask : 'Новая задача'}
                </span>
        </div>
        <div className="modal-popup__body">
          <div className="task-create__name">
            {this.props.isEdit ?
              <TextField className={"task-create__name-input"} id="standard-basic" label="Введите название задачи"
                         value={this.props.dataTask.nameTask}/> :
              <TextField className={"task-create__name-input"} id="standard-basic" label="Введите название задачи"/>
            }

          </div>
          <div className="task-create__description">
                  <textarea name="" placeholder={"Описание"}
                            defaultValue={this.props.isEdit ? this.props.dataTask.descTask : ''}>

                  </textarea>
          </div>
          <div className="task-create__row task-create__executor">
            <span>Ответственный:</span>
            {/*<FormControl >*/}
            {/*<InputLabel id="demo-customized-select-label">Age</InputLabel>*/}
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={this.state.executor}
              onChange={this.handleChangeExecutor}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem
                value={1}>{this.props.isEdit ? this.props.dataTask.employeeTask : 'Andrew Willington'}</MenuItem>
              <MenuItem value={2}>Twenty</MenuItem>
              <MenuItem value={3}>Thirty</MenuItem>
            </Select>
            {/*</FormControl>*/}
          </div>
          <div className="task-create__row task-create__time">
            <span>Крайний срок:</span>
            <TextField
              id="datetime-local"
              type="datetime-local"
              // defaultValue="2017-05-24T10:30"
              defaultValue={this.props.isEdit ? this.props.dataTask.createTask : '2017-05-24T10:30'}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="task-create__row task-create__status">
            <span>Статус:</span>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select2"
              value={this.state.status}
              onChange={this.handleChangeStatus}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>{this.props.isEdit ? this.props.dataTask.statusTask : 'Без срока'}</MenuItem>
              <MenuItem value={2}>Выполняется</MenuItem>
              <MenuItem value={3}>Прострочено</MenuItem>
            </Select>
          </div>
          {/*<div className="task-create__executor">*/}
          {/*<span>Соисполнитель:</span>*/}
          {/*<div class="task-create__executor-body">*/}
          {/*<span class="task-create__executor-link task-create__executor-link--add">Добавить</span>*/}
          {/*</div>*/}
          {/*</div>*/}
        </div>
        <div className="modal-popup__footer">
          <div className="task-create__btn">
            {this.props.isEdit ?
              <div>
                <Button variant="contained" color="primary" className={"task-create__save"} onClick={this.handleClose}>
                  Редактировать
                </Button>
              </div>
              :
              <div>
                <Button variant="contained" color="secondary" className={"task-create__drafts"}>
                  В черновики
                </Button>
                <Button variant="contained" color="primary" className={"task-create__save"} onClick={this.handleClose}>
                  Сохранить
                </Button>
              </div>
            }

          </div>
        </div>
      </div>
    )
  }
}

export default CreateTaskPopup
