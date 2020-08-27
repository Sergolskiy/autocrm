import React, {Component} from 'react'
import FormattedMessage from "react-intl/lib/src/components/message";
import './Settings.css'
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';

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
  }

  handleChange = (event, newValue) => {
    this.setState({value: newValue})
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
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={this.state.value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={this.state.value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={this.state.value} index={2}>
              Item Three
            </TabPanel>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
