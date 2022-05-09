import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";

import format from "date-fns/format";
import { DataGrid } from "@mui/x-data-grid";

export default function Table_chargeVariable(props) {
  const { data } = props;
  const [columns, setcolumns] = React.useState([
    { field: "Name", headerName: "Nom variable", width: 400 },
    { field: "Date", headerName: "Date", width: 300 },
    { field: "Cout", headerName: "Cout variable", width: 300 },
  ]);
  const [rows, setrows] = React.useState([]);

  useEffect(() => {
    createRows();
  }, [data]);

  function createData(id, Name, Date, Cout) {
    return {
      id,
      Name,
      Date,
      Cout,
    };
  }

  const createRows = () => {
    let T = [];
    for (let i = 0; i < data?.length; i++) {
      let date = format(new Date(data[i].Date), "dd MMM yyyy HH:mm:ss");

      T.push(createData(data[i]._id, data[i].nom_variable, date, data[i].Cout));
    }
    setrows(T);
  };

  return (
    <Paper sx={{ mt: 0, width: "100%", height: 400, overflow: "hidden" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Paper>
  );
}
