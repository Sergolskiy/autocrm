import React, {Component} from 'react'
import './Dashboard.css'
import Grid from "../Header/Header";
import {FormattedMessage} from "react-intl";
import ProjectCard from "../ProjectCard/ProjectCard";
import CreateTaskPopup from "../../components/ModalPopups/CreateTaskPopup/CreateTaskPopup";
import Time from "../../components/Time/Time";


import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import '../Recording/Recording.css'
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Snackbar from "@material-ui/core/Snackbar";


class Dashboard extends Component {

  state = {
    intervalId: false,
    currentCount: 0,
    openSnack: false
  }

  componentDidMount() {
    let that = this;
    let today = new Date();
    let nowTime = today.getHours() + ':' + today.getMinutes();
    that.setState({ currentCount: nowTime });
    let intervalId = setInterval(function () {
      let today = new Date();
      let nowTime = today.getHours() + ':' + today.getMinutes();
      that.setState({ currentCount: nowTime });
    }, 1000);
    // store intervalId in the state so it can be accessed later:

    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }

  timer(that) {
    // setState method is used to update the state

  }

  handleCloseSnack = () => {
    this.setState({ openSnack: false });
  }

  handleOpenSnack = () => {
    this.setState({ openSnack: true });
  }

  render() {


    let today = new Date();
    let mounth = today.getMonth() + 1;
    mounth = mounth < 10 ? '0' + mounth : mounth;
    let date = today.getDate() + '.' + mounth + '.' + today.getFullYear();

    let nowTime;

    setInterval(function () {
      nowTime = today.getHours() + ':' + today.getMinutes() + today.getSeconds()
    }, 1000)

    const action = (
      <div className={'task-snack__create'}>
        <div className={'task-snack__create-title'}>
          <span>Создана задача: </span>
          <span>Новая задача</span>
        </div>
        <div className={'task-snack__create-txt'}>
          <span>Описание: </span>
          <span>
            sdfsdfsdfsdfsd sdfsdfsdf fsdfsdf sdfsd fsdfsdfsdfsd fsdfsd
          </span>
        </div>
        <Button color="primary" size="small" className={'task-snack__create-btn'}>
          Подробнее
        </Button>
      </div>
    );
    let vertical = 'top';
    let horizontal = 'right';

    return (
      <div className="dashboard">



        <div className="page-title">
           <span className={'header__name'}>
             <FormattedMessage id="app.dashboard"/>
            </span>
        </div>

        <div className="task-snack">
          <Snackbar
            anchorOrigin={{vertical, horizontal }}
            open={this.state.openSnack}
            onClose={this.handleCloseSnack}
            key={vertical + horizontal}
            action={action}
          />
        </div>


        {/*<Button color="secondary" size="small" onClick={this.handleOpenSnack}>*/}
          {/*open*/}
        {/*</Button>*/}

        <div className="dashboard-cards">
          <div className="dashboard-cards__inner row">
            <div className="col-md-3">
              <div className="dashboard-cards__item">
                <div className="dashboard-cards__title">
                  <FormattedMessage id="app.today"/>
                </div>
                <div className="dashboard-cards__caption">
                  <FormattedMessage id="app.currentBalance"/>
                </div>
                <div className="dashboard-cards__money">
                  $243.65
                </div>
                <div className="dashboard-cards__count">
                  Ведет
                  <b>
                    4
                  </b>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dashboard-cards__item">
                <div className="dashboard-cards__title">
                  <FormattedMessage id="app.yesterday"/>
                </div>
                <div className="dashboard-cards__caption">
                  <FormattedMessage id="app.overallBalance"/>
                </div>
                <div className="dashboard-cards__money">
                  $243
                </div>
                <div className="dashboard-cards__count">
                  Ведет
                  <b>
                    345
                  </b>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="dashboard-cards__item dashboard-cards__item--orange">
                <div className="dashboard-cards__title">
                  Сентябрь
                </div>
                <div className="dashboard-cards__caption">
                  <FormattedMessage id="app.forLastMonth"/>
                </div>
                <div className="dashboard-cards__money">
                  $53 421
                </div>
                <div className="dashboard-cards__count">
                  Ведет
                  <b>
                    14 249
                  </b>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="dashboard-cards__item">
                <div className="dashboard-cards__title">
                  Октябрь
                </div>
                <div className="dashboard-cards__caption">
                  <FormattedMessage id="app.balanceThisMonth"/>
                </div>
                <div className="dashboard-cards__money">
                  $53 421
                </div>
                <div className="dashboard-cards__count">
                  Ведет
                  <b>
                    18 209
                  </b>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="dashboard-cards__item">
                <div className="dashboard-cards__title">
                  <FormattedMessage id="app.currentBalance"/>
                </div>
                <div className="dashboard-cards__caption">
                  Вы заработали
                </div>
                <div className="dashboard-cards__money">
                  $3 526
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dashboard-cards__item">
                <div className="dashboard-cards__title">
                  <FormattedMessage id="app.invoiceStatistics"/>
                </div>
                <div className="dashboard-cards__caption">
                  Вы заработали за месяц
                </div>
                <div className="dashboard-cards__money">
                  $3 526
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="dashboard__actual-task">
          <span className={'header__name'}>
              <FormattedMessage id="app.recording"/>
            </span>
        </div>
        <div>
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
                    <TableRow className={'site-table-row'}>
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
                    <TableRow className={'site-table-row'}>
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
                    <TableRow className={'site-table-row'}>
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
                    <TableRow className={'site-table-row'}>
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

        <div className="dashboard__actual-task">
          <div className="dashboard__actual-task-title">
            <span className={"header__name"}>
              <FormattedMessage id="app.actualTask"/>
            </span>
          </div>
          <div className="projects-card">
            <div className="projects-card__content">
              <div className="row">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Dashboard
