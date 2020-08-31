import React, {Component} from 'react'
import FormattedMessage from "react-intl/lib/src/components/message";
import './Settings.css'
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import Man from "../../assets/img/man.jpg";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import PopupWrapper from "../../hoc/PopupWrapper/PopupWrapper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import AddMasterPopup from "../../components/ModalPopups/AddMasterPopup/AddMasterPopup";
import AddAdminPopup from "../../components/ModalPopups/AddAdminPopup/AddAdminPopup";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


class Settings extends Component {



  state = {
    value: 0,
    setValue: 0,
    setSuccess: false,
    isOpen: false,
    isOpenAdminPopup: false,
    setLoading: false
  }

  addAdminPopup = () => {
    this.setState({
      isOpenAdminPopup: true
    })
  }

  addMasterPopup = () => {
    this.setState({
      isOpen: true
    })
  }
  closePopupAddMaster = () => {
    this.setState({
      isOpen: false
    })
  }
  closePopupAddAdmin = () => {
    this.setState({
      isOpenAdminPopup: false
    })
  }

  handleChange = (event, newValue) => {
    this.setState({value: newValue})
  };

  handleButtonClick = () => {
    if (!this.state.setLoading) {
      this.setState({setSuccess: false})
      this.setState({setLoading: true})
      let that = this;
      setTimeout(() => {
        that.setState({setSuccess: true})
        that.setState({setLoading: false})
      }, 2000);
    }
  };

  render() {

    return (
      <div className={'settings-page'}>

        <div className="page-title">
           <span className={'header__name'}>
              <FormattedMessage id="app.settings"/>
            </span>
        </div>

        <div className="settings">
          <div>
            <AppBar position="static">
              <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                <Tab label="Основные" {...a11yProps(0)} />
                <Tab label="Мастера" {...a11yProps(1)} />
                <Tab label="Администраторы" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={this.state.value} index={0}>
              <div className="settings-main">
                <div className="settings-main__photo">
                  <img src={Man} alt=""/>
                  <div className={'wrapper-progress-btn'}>
                    <Button
                      color="secondary" size="small"
                      disabled={this.state.setLoading}
                      className={'progress-btn settings-main__btn'}
                      onClick={this.handleButtonClick}
                    >
                      Изменить
                    </Button>
                    {this.state.setLoading && <CircularProgress size={24} className={'progress-btn-prog'} />}
                  </div>

                </div>
                <div className="settings-main__name settings-main__row">
                  <span className={'settings-main-label'}>
                    Имя
                  </span>
                  <span>
                    <TextField id="standard-basic"  variant="outlined" value={'Андрей'}/>
                  </span>
                  <div className={'wrapper-progress-btn'}>
                    <Button
                      color="secondary" size="small"
                      disabled={this.state.setLoading}
                      className={'progress-btn settings-main__btn'}
                      onClick={this.handleButtonClick}
                    >
                      Изменить
                    </Button>
                    {this.state.setLoading && <CircularProgress size={24} className={'progress-btn-prog'} />}
                  </div>
                </div>
                <div className="settings-main__name settings-main__row">
                  <span className={'settings-main-label'}>
                    Фамилия
                  </span>
                  <span>
                    <TextField id="standard-basic"  variant="outlined" value={'Виллин'}/>
                  </span>
                  <div className={'wrapper-progress-btn'}>
                    <Button
                      color="secondary" size="small"
                      disabled={this.state.setLoading}
                      className={'progress-btn settings-main__btn'}
                      onClick={this.handleButtonClick}
                    >
                      Изменить
                    </Button>
                    {this.state.setLoading && <CircularProgress size={24} className={'progress-btn-prog'} />}
                  </div>
                </div>
                <div className="settings-main__phone settings-main__row">
                  <span className={'settings-main-label'}>
                    Телефон
                  </span>
                  <span>
                    <TextField id="standard-basic"  variant="outlined" value={'098 655 45 22'}/>
                  </span>
                  <div className={'wrapper-progress-btn'}>
                    <Button
                      color="secondary" size="small"
                      disabled={this.state.setLoading}
                      className={'progress-btn settings-main__btn'}
                      onClick={this.handleButtonClick}
                    >
                      Изменить
                    </Button>
                    {this.state.setLoading && <CircularProgress size={24} className={'progress-btn-prog'} />}
                  </div>
                </div>
                <div className="settings-main__login settings-main__row">
                  <span className={'settings-main-label'}>
                    Логин
                  </span>
                  <span>
                    <TextField id="standard-basic"  variant="outlined" value={'Андрей'}/>
                  </span>
                  <div className={'wrapper-progress-btn'}>
                    <Button
                      color="secondary" size="small"
                      disabled={this.state.setLoading}
                      className={'progress-btn settings-main__btn'}
                      onClick={this.handleButtonClick}
                    >
                      Изменить
                    </Button>
                    {this.state.setLoading && <CircularProgress size={24} className={'progress-btn-prog'} />}
                  </div>
                </div>
                <div className="settings-main__pass settings-main__row">
                  <span className={'settings-main-label'}>
                    Пароль
                  </span>
                  <span>
                    <TextField id="standard-basic"  variant="outlined" value={'*******'}/>
                  </span>
                  <div className={'wrapper-progress-btn'}>
                    <Button
                      color="secondary" size="small"
                      disabled={this.state.setLoading}
                      className={'progress-btn settings-main__btn'}
                      onClick={this.handleButtonClick}
                    >
                      Изменить
                    </Button>
                    {this.state.setLoading && <CircularProgress size={24} className={'progress-btn-prog'} />}
                  </div>
                </div>
              </div>
            </TabPanel>


            <TabPanel value={this.state.value} index={1}>
              <div className="settings-title-tab">Мастера</div>

              <div className="products__btn">
                <Button variant="contained" color="primary" onClick={this.addMasterPopup}>
                  Добавить мастера
                </Button>

                {this.state.isOpen ?
                  <PopupWrapper classPopup={'add-master'} closePopup={this.closePopupAddMaster}>
                    <AddMasterPopup/>
                  </PopupWrapper>
                  : ''}



              </div>

              <TableContainer className={'products-table'}>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow className={'products-table-head'}>
                      <TableCell>Id</TableCell>
                      <TableCell align="left"><FormattedMessage id="app.name"/></TableCell>
                      <TableCell align="left"><FormattedMessage id="app.lastName"/></TableCell>
                      <TableCell align="left"><FormattedMessage id="app.phone"/></TableCell>
                      <TableCell align="right">

                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className={'products-table-row'}>
                      <TableCell align="left">1</TableCell>
                      <TableCell align="left">Андрей </TableCell>
                      <TableCell align="left">Виллин</TableCell>
                      <TableCell align="left">098 655 45 22</TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary" size="small"
                        >
                          Изменить
                        </Button>
                        <Button
                          color="secondary" size="small"
                        >
                          Удалить
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className={'products-table-row'}>
                      <TableCell align="left">2</TableCell>
                      <TableCell align="left">Андрей </TableCell>
                      <TableCell align="left">Виллин</TableCell>
                      <TableCell align="left">098 655 45 22</TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary" size="small"
                        >
                          Изменить
                        </Button>
                        <Button
                          color="secondary" size="small"
                        >
                          Удалить
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className={'products-table-row'}>
                      <TableCell align="left">3</TableCell>
                      <TableCell align="left">Андрей </TableCell>
                      <TableCell align="left">Виллин</TableCell>
                      <TableCell align="left">098 655 45 22</TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary" size="small"
                        >
                          Изменить
                        </Button>
                        <Button
                          color="secondary" size="small"
                        >
                          Удалить
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className={'products-table-row'}>
                      <TableCell align="left">4</TableCell>
                      <TableCell align="left">Андрей </TableCell>
                      <TableCell align="left">Виллин</TableCell>
                      <TableCell align="left">098 655 45 22</TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary" size="small"
                        >
                          Изменить
                        </Button>
                        <Button
                          color="secondary" size="small"
                        >
                          Удалить
                        </Button>
                      </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>

            </TabPanel>



            <TabPanel value={this.state.value} index={2}>


              <div className="settings-title-tab">Администраторы</div>

              <div className="products__btn">
                <Button variant="contained" color="primary" onClick={this.addAdminPopup}>
                  Добавить администратора
                </Button>
                {this.state.isOpenAdminPopup ?
                  <PopupWrapper classPopup={'add-master'} closePopup={this.closePopupAddAdmin}>
                    <AddAdminPopup/>
                  </PopupWrapper>
                  : ''}
              </div>

              <TableContainer className={'products-table'}>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow className={'products-table-head'}>
                      <TableCell>Id</TableCell>
                      <TableCell align="left"><FormattedMessage id="app.name"/></TableCell>
                      <TableCell align="left"><FormattedMessage id="app.lastName"/></TableCell>
                      <TableCell align="left"><FormattedMessage id="app.phone"/></TableCell>
                      <TableCell align="right">

                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className={'products-table-row'}>
                      <TableCell align="left">1</TableCell>
                      <TableCell align="left">Андрей </TableCell>
                      <TableCell align="left">Виллин</TableCell>
                      <TableCell align="left">098 655 45 22</TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary" size="small"
                        >
                          Изменить
                        </Button>
                        <Button
                          color="secondary" size="small"
                        >
                          Удалить
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className={'products-table-row'}>
                      <TableCell align="left">1</TableCell>
                      <TableCell align="left">Андрей </TableCell>
                      <TableCell align="left">Виллин</TableCell>
                      <TableCell align="left">098 655 45 22</TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary" size="small"
                        >
                          Изменить
                        </Button>
                        <Button
                          color="secondary" size="small"
                        >
                          Удалить
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className={'products-table-row'}>
                      <TableCell align="left">1</TableCell>
                      <TableCell align="left">Андрей </TableCell>
                      <TableCell align="left">Виллин</TableCell>
                      <TableCell align="left">098 655 45 22</TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary" size="small"
                        >
                          Изменить
                        </Button>
                        <Button
                          color="secondary" size="small"
                        >
                          Удалить
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className={'products-table-row'}>
                      <TableCell align="left">1</TableCell>
                      <TableCell align="left">Андрей </TableCell>
                      <TableCell align="left">Виллин</TableCell>
                      <TableCell align="left">098 655 45 22</TableCell>
                      <TableCell align="right">
                        <Button
                          color="primary" size="small"
                        >
                          Изменить
                        </Button>
                        <Button
                          color="secondary" size="small"
                        >
                          Удалить
                        </Button>
                      </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>
              </TableContainer>


            </TabPanel>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
