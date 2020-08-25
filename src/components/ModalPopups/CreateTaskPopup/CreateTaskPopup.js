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
    isOpen: false,
  }

  componentDidMount() {
    let that = this;
    setTimeout(function () {
      that.setState({
        isOpen: true,
      })
    }, 1);
  }

  handleChangeExecutor = (event) => {
    this.setState({
      executor: event.target.value,
    })
  }

  handleOutsideClick = () => {
    this.setState({
      isOpen: false,
    })

    let that = this;
    setTimeout(function () {
      that.props.closePopup();
    }, 300);

  }


  render() {

    return (
      <div className={"modal-popup task-create" + (this.state.isOpen ? ' open' : '')} >
        <div className="modal-popup__overlay">
          <OutsideAlerter onClick={this.handleOutsideClick}>
            <div className="modal-popup__window container">
              <div className="modal-popup__header">
                <span>Новая задача</span>
              </div>
              <div className="modal-popup__body">
                <div className="task-create__name">
                  <TextField className={"task-create__name-input"} id="standard-basic" label="Введите название задачи" />
                </div>
                <div className="task-create__description">
                  <textarea name="" placeholder={"Описание"}></textarea>
                </div>
                <div className="task-create__executor">
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
                      <MenuItem value={1}>Andrew Willington</MenuItem>
                      <MenuItem value={2}>Twenty</MenuItem>
                      <MenuItem value={3}>Thirty</MenuItem>
                    </Select>
                  {/*</FormControl>*/}
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
                  <Button variant="contained" color="secondary" className={"task-create__drafts"}>
                    В черновики
                  </Button>
                  <Button variant="contained" color="primary" className={"task-create__save"}>
                    Сохранить
                  </Button>
                </div>
              </div>
            </div>
          </OutsideAlerter>
        </div>
      </div>
    )
  }
}

export default CreateTaskPopup