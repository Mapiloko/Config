import React, { FC } from "react";
import NavItems from "components/NavItems";
import { sample } from "utils/sample";
import { useAppSelector, useAppDispatch } from "hooks/redux";


const SideNavBar: FC = () => {

  const currentData = useAppSelector(
    ({ companyData }: { companyData: any }) => companyData.data.chapters
  );

  return (
    <div>
      {sample?.map((sam:any) => (
        <NavItems {...sam} key={sam.title.name}/>
      ))}
    </div>
  );
};

export default SideNavBar;
