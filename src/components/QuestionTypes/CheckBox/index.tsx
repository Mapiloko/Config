import React, { FC, useState, useEffect } from "react";
import classes from "./CheckBox.module.scss";
import { useAppDispatch } from "hooks/redux";
import { addData } from "store/companyData";
import cs from "classnames";

interface CheckBoxProps {
  singleSelect: boolean;
  data: any;
}

const CheckBox: FC<CheckBoxProps> = ({ singleSelect, data }) => {
  const { options, answer, label, keyName } = data;
  const [selectedValue, setSelectedValue] = useState(answer);
  const dispatch = useAppDispatch();

  const checkSelected = (option: any) => {
    return !!selectedValue.filter((val: any) => val.id === option.id)
      .length;
  };

  const handleSelectValue = (option: any) => () => {
    console.log("optiond__", [option])
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

  const renderCheckBox = (option: any) => {
    return (
      <div
        // className="co"
        onClick={handleSelectValue(option)}
        role="button"
        key={option.id}
      >
        <div
          className={cs(classes.checkBoxIcon, {
            [classes.checkBoxSelected]: checkSelected(option),
          })}
        >
          <span className={"material-icons"}>done</span>
        </div>
        <div>{option.name}</div>
      </div>
    );
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
      <div className={classes.name}>{label}</div>
      <div className={`${classes.checkBoxWrapper} border-line`}>
        {options.values.length > 0 &&
          options.values.map((opt: any) => renderCheckBox(opt))}
      </div>
    </div>
  );
};

CheckBox.defaultProps = {
  singleSelect: true,
  data: {},
};

export default CheckBox;
