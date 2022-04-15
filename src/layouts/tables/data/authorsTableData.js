import React, { useEffect, useState } from "react";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Data() {
  const [manager, setManager] = useState([]);

  let navigate=useNavigate()
  useEffect(() => {
    getAllManeger();
  }, []);

  const getAllManeger = () => {
    axios
      .get("http://localhost:3200/api/get_Manager")
      .then((res) => {
        setManager(res.data.manager);
      })
      .catch((err) => console.log(err));
  };

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      {console.log(name)}
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );
  const RowsManager = () => {
    let T=[]
    for (let i = 0; i < manager.length; i++) {
      let object={
       
          name: <Author name={manager[i].name} email={manager[i].email} />,
        function: <Job title={manager[i].role} description="" />,
  
        password: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {manager[i].password}
          </MDTypography>
        ),
        edit: (
          <MDTypography component="a" href="#" onClick={()=>EditManger(manager[i]._id)} variant="caption" color="info" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        delete: (
          <MDTypography component="a" onClick={()=>deleteManger(manager[i]._id)} href="#" variant="caption" color="error" fontWeight="medium">
            delete
          </MDTypography>
        ),
      
      }
      T.push(object)
    }
   return T
   
  };
  const deleteManger=(Id)=>{
    axios
    .delete("http://localhost:3200/api/delete_Manager/"+Id)
    .then((res) => {
      getAllManeger(

      )    })
    .catch((err) => console.log(err));
  }
  const EditManger=(Id)=>{
    navigate("/Edit_manager/"+Id)
  }
  return {
    columns: [
      { Header: "name", accessor: "name", width: "45%", align: "left" },
      { Header: "function", accessor: "function", align: "left" },
      { Header: "password", accessor: "password", align: "center" },
      { Header: "edit", accessor: "edit", align: "center" },
      { Header: "delete", accessor: "delete", align: "center" },
    ],

    rows: RowsManager() ,
  };
}
