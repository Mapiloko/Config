import React, { FC, useState, useEffect } from "react";
import classes from './Color.module.scss';
import { useAppDispatch } from "hooks/redux";
import { addData } from "store/companyData";
import cs from "classnames";

interface ColorProps {
  data: any;
}

const Color: FC<ColorProps> = ({ data }) => {
  const { options, answer, label, keyName } = data;
  const [selectedValue, setSelectedValue] = useState(answer);
  const [answer_, setAnswer] = useState("");
  const dispatch = useAppDispatch();

  const handleSelectValue = (option: any) => () => {

    setAnswer(option.name)
    setSelectedValue([option]);

    dispatch(addData({ [keyName]: [option.id] }));
  };

  const checkSelected = (option: any) => {
    return !!selectedValue.filter((val: any) => val.id === option.id)
      .length;
  };

  return (
    <div className="container">
      <div className={classes.name}>{label}</div>
      <div className="row justify-content-center border-line">
      <div className="col-md-5 col-xs-10">
        <div className="row justify-content-center">
            {options.values.length > 0 &&
              options.values.map((option: any) => 
            <div
            key={option.id}
            className={`${classes.colorWrapper} col-4 my-3 align-items-center`}
            onClick={handleSelectValue(option)}
            role="button"
            >
            <div
              style={{backgroundColor: option.name}}
              className={cs(classes.checkBoxIcon)}
            >
              {checkSelected(option) && 
                <span className={"material-icons"}>done</span>
              }
            </div>
          </div>
          )}
        <div className={`col-md-9 col-xs-10 ${cs(classes.selectedColor)}`}>
          <p className={`text-start ${cs(classes.selectedText)}`} >{answer_.toUpperCase()}</p>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

Color.defaultProps = {
  data: {},
};

export default Color;
