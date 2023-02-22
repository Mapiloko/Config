import React, { FC, useState, useEffect } from "react";
import classes from './VerticalCheckbox.module.scss';
import { useAppDispatch } from "hooks/redux";
import { addData } from "store/companyData";
import cs from "classnames";

interface VerticalCheckboxProps {
  singleSelect: boolean;
  data: any;
}

const VerticalCheckbox: FC<VerticalCheckboxProps> = ({ singleSelect, data }) => {

  const dispatch = useAppDispatch();
  const { options, answer, label, keyName } = data;
  const [selectedValue, setSelectedValue] = useState(answer);

  const handleSelectValue = (option: any) => () => {

    if (singleSelect) {
      setSelectedValue([option]);
      return;
    }

    const filterSelectedValue = selectedValue.filter(
      (val: any) => val.id === option.id
    );
    if (filterSelectedValue.length === 0) {
      setSelectedValue([...selectedValue, option]);
      return;
    }
    const updatedSelectedValue = selectedValue.filter(
      (val: any) => val.id !== option.id
    );
    setSelectedValue(updatedSelectedValue);

  };

  const checkSelected = (option: any) => {
    return !!selectedValue.filter((val: any) => val.id === option.id)
      .length;
  };

  const submitData = () => {
    const values = selectedValue.map((val: any) => val.id);
    dispatch(addData({ [keyName]: values }));
  };

  useEffect(() => {
    if(selectedValue.length !== 0)
      submitData();
  }, [selectedValue]);

  return (
    <div className="container">
      <div className="row border-line justify-content-center">
        <div className={`col-12 ${classes.name}`}>{label}</div>
        <div className="col-md-4 col-xs-12">
          {options.values.length > 0 &&
              options.values.map((option: any) => 
          <div key={option.id} className={`col-12 ${classes.selectWrapper}`} >
            <div style={{width:"10%"}} onClick={handleSelectValue(option)} role="button">
                <div className={cs(classes.checkBoxIcon, {[classes.checkBoxSelected]: checkSelected(option),})}>
                  <span className={"material-icons"}>done</span>
                </div>
            </div>
            <div style={{width:"90%"}} >
              <div className="text-start ms-3">
                <div>{option.name}</div>
                <p style={{fontSize: "0.9rem", fontWeight:"small"}} >{option.message}</p>
              </div>
          </div>
        </div>
          )}
        </div>
      </div>
    </div>
  );
};

VerticalCheckbox.defaultProps = {
  singleSelect: false,
  data: {},
};

export default VerticalCheckbox;
