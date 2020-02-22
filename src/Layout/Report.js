import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
const columns = [
  { id: "code", label: "Date", minWidth: 100 },
  {
    id: "population",
    label: "ETH",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString()
  },
  {
    id: "txHash",
    label: "txHash",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString()
  }
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}


const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 400,
    marginTop: 50
  }
});
function StickyHeadTable({ payouts }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, Setpayouts] = useState(payouts);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  let dayETH = 0
  let dayETH1 = 0
  let dayETH2= 0
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {new Date(row.paidOn*1000).toLocaleString()}
              </TableCell>
              <TableCell align="right">{(row.amount/1000000000000000000).toFixed(2)}</TableCell>
              <TableCell align="right"><a href={`https://www.etherchain.org/tx/${row.txHash}`}>{row.txHash}</a></TableCell>

            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
function mapStateToProps(state) {
  return { payouts: state.ListDataETH.Payouts };
}

export default connect(mapStateToProps, null)(StickyHeadTable);
