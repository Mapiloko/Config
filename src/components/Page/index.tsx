import React, { FC } from "react";
import SideNavBar from "components/SideNavBar";

interface PageProps {
  children: any;
}

const Page: FC<PageProps> = ({ children }) => {
  return (
    <div className="d-flex w-100">
      <div className="col-2 d-none d-sm-block">
        <div className="bg-drop-blur pt-5 h-100">
          <SideNavBar />
        </div>
      </div>
      <div className="col-12 col-sm-10 p-2 p-sm-5">{children}</div>
    </div>
  );
};

export default Page;
