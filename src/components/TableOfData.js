import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }
}))(TableRow);



const TableOfData = ({ dataOfApi, borrar, mostrarModalActualizar, mostrarModalInsertar, initialValue, secondValue }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Created at</StyledTableCell>
              <StyledTableCell align="right">Updated at</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataOfApi.map((element) =>  (
              (element.valueOfDay + element.valueOfMonth * 1000 + element.valueOfYear*1000000) >= initialValue && 
              (element.valueOfDay + element.valueOfMonth * 1000 + element.valueOfYear*1000000) <= secondValue
              ) ? (
              <StyledTableRow key={element.id}>
                <StyledTableCell align="right">
                  {element.first_name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {element.last_name}
                </StyledTableCell>
                <StyledTableCell align="right">{element.email}</StyledTableCell>
                <StyledTableCell align="right">
                  {element.created_at.slice(8,10) + "/" + element.created_at.slice(5,7) + "/" + element.created_at.slice(0,4)}
                </StyledTableCell>
                <StyledTableCell align="right">
                {element.updated_at.slice(8,10) + "/" + element.updated_at.slice(5,7) + "/" + element.updated_at.slice(0,4)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon />}
                    onClick={() => mostrarModalActualizar(element)}
                  >
                    Edit
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => borrar(element.id)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
  ): null)}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<AddIcon />}
        onClick={() => mostrarModalInsertar()}
      >
        Add
      </Button>
      </div>
    </div>
  );
};

export default TableOfData;
