import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";

import { useHistory } from "react-router-dom";


const NoUserOptions = () => {


  const [open, setOpen] = useState(false);
  const history = useHistory();
 



 

  function dashboard() {
    history.push("/login");
  }

 
  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "100000" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "110000" }}
        open={open}
        direction="down"
        className="speedDial"
        onClick={dashboard}
        icon={
          <img
            className="speedDialIcon"
            src={"/Profile.png"}
            alt="Profile"
          />
        }
      >
       
      </SpeedDial>
    </Fragment>
  );
};

export default NoUserOptions;
