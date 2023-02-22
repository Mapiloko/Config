import React, { FC, useEffect, useState } from "react";
import { sample } from "utils/sample";
import classes from "./QuestionTypes.module.scss";
import Button from "components/CustomButton";
import TextBox from "./TextBox";
import SelectComponent from "./Select";
import CheckBox from "./CheckBox";
import Color from "./Color";
import Logo from "./Logo";
import VerticalCheckbox from "./VerticalCheckbox";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "hooks/redux";
// import { UpdateInputApi$, getConpanyChapters$ } from "../../api/CompanyDataFetch";
import { UpdateInputApi$ } from "../../api/CompanyDataFetch";
import { addData, deleteData } from "store/companyData";

const QuestionTypes: FC = () => {
  const { category, subCat } = useParams();

  const dispatch = useAppDispatch();
  const [displayData, setData] = useState<any[]>([]);
  const [invalid, setInvalid] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("");

  const currentData = useAppSelector(
    ({ companyData }: { companyData: any }) => companyData.data
  );
  
  // useEffect(()=>{
  //   dispatch(deleteData({ "chapters": currentData.chapters }));
  //   dispatch(addData({ "otpValue": currentData.otpValue }));
  //   dispatch(addData({ "sessionId": currentData.sessionId }));
  // },[])

  useEffect(()=>{    

    const newData = sample.filter(function (cd:any)
    {
      return cd.title.route === category;
    })[0].sub_chapters.filter((cd:any)=>{
      return cd.title.route === subCat;
    })
    

    const data: any[] = newData[0].data
    setData(data)
    setLabel(newData[0].title.name)
  },[subCat, category, currentData])
  
  const renderQuestion = (data: any) => {
    switch (data.inputType) {
      case "TEXT_BOX":
        return <TextBox data={data} />;
      case "DROPDOWN_SINGLE_SELECT":
        return <SelectComponent data={data} singleSelect={true} />;
      case "DROPDOWN_MULTI_SELECT":
        return <SelectComponent data={data} singleSelect={false} />;
      case "SINGLE_CHECK_BOX":
        return <CheckBox singleSelect={true} data={data} />;
      case "MULTI_CHECK_BOX":
        return <CheckBox singleSelect={false} data={data} />;
      case "MULTI_CHECK_BOX_VERTICAL":
        return <VerticalCheckbox singleSelect={false} data={data} />;
      case "SINGLE_CHECK_BOX_VERTICAL":
        return <VerticalCheckbox singleSelect={true} data={data} />;
      case "LOGO":
        return <Logo data={data}/>;
      case "COLOR":
        return <Color data={data}/>;
  }
  };

  function getBody(arr:any[], innerbody:any): any{
    if(arr.length === 0)
      return innerbody;
    else 
      {
        const body = {
          [arr[arr.length-1]] : innerbody
        }
        return getBody( arr.splice(0,arr.length - 1) , body)
      }
  }

  function getTableTypesKey(obj:string, value:string) {
    return Object.keys(obj).find((key:any) => obj[key] === value);
  }
  
  const handleSave = ()=>{

    displayData.forEach((data: any)=>{
      data.links.forEach((link:any)=> {
        const value = link.rel.split(".")[1];
        let key:string | undefined;
        let body:any;
        data.tableTypes.forEach((tabletp:any)=>{
          if(getTableTypesKey(tabletp, value) !== undefined)
          key = tabletp.keyName
        })
        if(key && currentData[data.keyName])
        {
          if(currentData[data.keyName][0]!="")
          {
            const values_ = key.split(".");
            if(values_.length === 1)
              body = {
                [key]: currentData[data.keyName][0]
              }
            else if(values_.length === 2)
              body = {
                [values_[0]] : {
                  [values_[1]] : currentData[data.keyName][0]
                }
              } 
            else{
              const innerbd = {
                [values_[values_.length - 4]] : [
                  {
                    [values_[values_.length - 3]] : values_[values_.length - 2],
                    [values_[values_.length - 1]] : currentData[data.keyName][0]
                  }
                ] 
              }
              if(values_.length === 4)
                body = innerbd
              else
                body = getBody(values_.splice(0,values_.length - 4), innerbd);
              }
              
              
              UpdateInputApi$(link.href, body, currentData.sessionId).then((res:any)=>{
                  console.log("respon", res)
                }).catch(()=>{
                    console.log("Failed to update or Put", key)
                  })
                  
                dispatch(addData({ [data.keyName]: [""] }));
          }
        }
      })
    })
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100 w-100">
      <div className={classes.wrapper}>
        <div className="row w-100 m-0">
          <div className={classes.heading}>{label}</div>
          {displayData.map((data, index) => (
            <div className="col-12 justify-content-center" key={index}>
              {renderQuestion(data)}
            </div>
          ))}
        </div>
      </div>
      <Button disabled={invalid} handleClick={handleSave} title="Save" />
    </div>
  );
};

export default QuestionTypes;
