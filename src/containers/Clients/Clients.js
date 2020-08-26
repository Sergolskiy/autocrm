import React, {Component} from 'react'
import {FormattedMessage} from "react-intl";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";

import './Clients.css'

class Clients extends Component {

  render() {

    return (
      <div className="clients">
        <div className="page-title">
           <span className={'header__name'}>
              <FormattedMessage id="app.clients"/>
            </span>
        </div>

        <TableContainer className={'clients-table'}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow className={'clients-table-head'}>
                <TableCell><FormattedMessage id="app.name"/></TableCell>
                <TableCell align="left"><FormattedMessage id="app.lastName"/></TableCell>
                <TableCell align="left"><FormattedMessage id="app.carBrand"/></TableCell>
                <TableCell align="left"><FormattedMessage id="app.phone"/></TableCell>
                <TableCell align="right"><FormattedMessage id="app.historyOfService"/></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={'clients-table-row'}>
                <TableCell align="left">Олег</TableCell>
                <TableCell align="left">Побережный</TableCell>
                <TableCell align="left">VW passat</TableCell>
                <TableCell align="left">123456789</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary" size="small">
                    <FormattedMessage id="app.history"/>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow className={'clients-table-row'}>
                <TableCell align="left">Олег</TableCell>
                <TableCell align="left">Побережный</TableCell>
                <TableCell align="left">VW passat</TableCell>
                <TableCell align="left">123456789</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary" size="small">
                    <FormattedMessage id="app.history"/>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow className={'clients-table-row'}>
                <TableCell align="left">Олег</TableCell>
                <TableCell align="left">Побережный</TableCell>
                <TableCell align="left">VW passat</TableCell>
                <TableCell align="left">123456789</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary" size="small">
                    <FormattedMessage id="app.history"/>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow className={'clients-table-row'}>
                <TableCell align="left">Олег</TableCell>
                <TableCell align="left">Побережный</TableCell>
                <TableCell align="left">VW passat</TableCell>
                <TableCell align="left">123456789</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary" size="small">
                    <FormattedMessage id="app.history"/>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow className={'clients-table-row'}>
                <TableCell align="left">Олег</TableCell>
                <TableCell align="left">Побережный</TableCell>
                <TableCell align="left">VW passat</TableCell>
                <TableCell align="left">123456789</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary" size="small">
                    <FormattedMessage id="app.history"/>
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow className={'clients-table-row'}>
                <TableCell align="left">Олег</TableCell>
                <TableCell align="left">Побережный</TableCell>
                <TableCell align="left">VW passat</TableCell>
                <TableCell align="left">123456789</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary" size="small">
                    <FormattedMessage id="app.history"/>
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    )
  }
}

export default Clients
