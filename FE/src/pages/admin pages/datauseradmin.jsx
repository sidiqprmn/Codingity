import React, { useState } from "react";
import Sidebaradmin from "../../components/layouts/sidebar/sidebaradmin";
import Navbar from "../../admin components/navbardatauser";
import DataUsers from "../../admin components/datauser";

const DataUser = () => {
  return (
    <React.Fragment>
      <div>
        <Sidebaradmin />
        <div>
          <Navbar />
        </div>
        <br /> <br /> <br />
        <DataUsers />
      </div>
    </React.Fragment>
  );
};
export default DataUser;
