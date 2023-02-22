import React, { FC, useState } from "react";
import logo from "assets/carScan_logo.png";
import classes from "./AppBar.module.scss";
import cs from "classnames";
import SideNavBar from "components/SideNavBar";

const AppBar: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawerOpen = () => setShowDrawer(!showDrawer);

  return (
    <>
      <div className="row w-100 bg-drop-blur m-0 p-1 p-sm-3">
        <div className="col-12 col-sm-2">
          <div className="d-flex align-items-center justify-content-between justify-content-sm-start">
            <span
              className={cs(
                "material-icons d-block d-sm-none",
                classes.menuIcon
              )}
              role="button"
              onClick={handleDrawerOpen}
            >
              menu
            </span>
            <img src={logo} className={classes.logo} alt="image" />
          </div>
        </div>
        <div className="col-12 col-sm-10">
          <div className="d-flex align-items-center justify-content-between">
            <input className={classes.search} placeholder="Search" />
            <div className="d-flex align-items-center">
              <div>
                <img src={logo} className={classes.icon} alt="image" />
              </div>
              <div className="ms-2">
                <div className={classes.username}>Test</div>
                <div className={classes.designation}>Test 2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDrawer && (
        <div className={classes.backDrop} onClick={handleDrawerOpen}>
          <div className="w-75 pt-4">
            <SideNavBar />
          </div>
        </div>
      )}
    </>
  );
};

export default AppBar;
