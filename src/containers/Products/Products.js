import React, {Component} from 'react'
import {FormattedMessage} from "react-intl";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Button from "@material-ui/core/Button";

import './Products.css'

class Products extends Component {

  render() {

    return (
      <div className="products">
        <div className="page-title">
           <span className={'header__name'}>
              <FormattedMessage id="app.products"/>
            </span>
        </div>

        <div className="products__btn">
          <Button variant="contained" color="primary">
            <FormattedMessage id="app.import"/>
          </Button>
          <Button variant="contained" color="secondary">
            <FormattedMessage id="app.export"/>
          </Button>
        </div>

        <TableContainer className={'products-table'}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow className={'products-table-head'}>
                <TableCell>Id</TableCell>
                <TableCell align="left"><FormattedMessage id="app.name"/></TableCell>
                <TableCell align="left"><FormattedMessage id="app.article"/></TableCell>
                <TableCell align="left"><FormattedMessage id="app.count"/></TableCell>
                <TableCell align="right"><FormattedMessage id="app.price"/></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={'products-table-row'}>
                <TableCell align="left">1</TableCell>
                <TableCell align="left">Насос</TableCell>
                <TableCell align="left">123654</TableCell>
                <TableCell align="left">36 штук</TableCell>
                <TableCell align="right">265 грн</TableCell>
              </TableRow>
              <TableRow className={'products-table-row'}>
                <TableCell align="left">2</TableCell>
                <TableCell align="left">Крышка</TableCell>
                <TableCell align="left">234143</TableCell>
                <TableCell align="left">55 штук</TableCell>
                <TableCell align="right">120 грн</TableCell>
              </TableRow>
              <TableRow className={'products-table-row'}>
                <TableCell align="left">3</TableCell>
                <TableCell align="left">Насос</TableCell>
                <TableCell align="left">123654</TableCell>
                <TableCell align="left">36 штук</TableCell>
                <TableCell align="right">265 грн</TableCell>
              </TableRow>
              <TableRow className={'products-table-row'}>
                <TableCell align="left">4</TableCell>
                <TableCell align="left">Крышка</TableCell>
                <TableCell align="left">234143</TableCell>
                <TableCell align="left">55 штук</TableCell>
                <TableCell align="right">120 грн</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

      </div>
    )
  }
}

export default Products
