import React, { FC, useEffect, useState } from "react";
import classes from "./TextBox.module.scss";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { addData } from "store/companyData";

interface TextBoxProps {
  data: any;
}

const TextBox: FC<TextBoxProps> = ({ data }) => {
  const { label, keyName, answer } = data;
  // console.log("Dataaa", answer)
  const dispatch = useAppDispatch();
  const [valuetoChange, setInputV] = useState<string[]>(answer);

  const currentData = useAppSelector(
    ({ companyData }: { companyData: any }) => companyData.data[keyName] || []
  );

  const handleChange = ({ target: { value } }: { target: any }) => {
    setInputV([value])
    dispatch(addData({ [keyName]: [value] }));
  }
  
  // useEffect(() => {
  //   // setInputV(currentData)
  //   // dispatch(addData({ [keyName]: answer }));
  // }, [currentData]);

  return (
    <div className="container">
      <div className="row justify-content-center border-line">
        <div className={`col-12 ${classes.name}`}>{label}</div>
        <div className="col-md-4 col-xs-12" >
          <input onChange={handleChange} placeholder={data?.placeholders} value={ currentData.length !== 0? currentData[0] : valuetoChange.length !== 0? valuetoChange[0]: " "} 
          className={classes.inputText}/>
        </div>
      </div>
    </div>
  );
};

TextBox.defaultProps = {
  data: {},
};

export default TextBox;
