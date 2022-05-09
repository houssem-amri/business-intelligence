import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";

import format from "date-fns/format";
import { DataGrid } from "@mui/x-data-grid";

export default function Table_chiffreDaffaire(props) {
  const { data } = props;
  const [columns, setcolumns] = React.useState([
    { field: "Name", headerName: "Nom de produit", width: 300 },
    { field: "Date", headerName: "Date", width: 250 },
    { field: "Prix", headerName: "Prix de vente ", width: 190 },
    { field: "qty", headerName: "Quantité de vente ", width: 190 },
    { field: "total", headerName: "Total", width: 190 },
  ]);
  const [rows, setrows] = React.useState([]);

  useEffect(() => {
      console.log("gegeggeg",data);
    createRows();
  }, [data]);

  function createData(id, Name, Date, Prix, qty, total) {
    return {
      id,
      Name,
      Date,
      Prix,
      qty,
      total,
    };
  }

  const createRows = () => {
    let T = [];
    for (let i = 0; i < data?.length; i++) {
      let date = format(new Date(data[i].Date), "dd MMM yyyy HH:mm:ss");
      let total = Number(data[i].prix_de_vente * data[i].quantit_vendues).toFixed(2);
      T.push(
        createData(
          data[i]._id,
          data[i].nom_de_produit,
          date,
          data[i].prix_de_vente,
          data[i].quantit_vendues,
          total
        )
      );
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
