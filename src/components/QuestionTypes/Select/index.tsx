import React, { FC, useState, useEffect, createRef } from "react";
import classes from "./Select.module.scss";
import downArrow from "assets/downArrow.svg";
import useOnClickOutside from "hooks/useOnClickOutside";
import cs from "classnames";
import { useAppSelector, useAppDispatch } from "hooks/redux";
import { addData } from "store/companyData";

interface SelectComponentProps {
  data: any;
  singleSelect: boolean;
}

const SelectComponent: FC<SelectComponentProps> = ({ data, singleSelect }) => {
  const { label, options, answer, keyName } = data;
  const { values } = options;
  const selectRef = createRef<HTMLDivElement>();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(answer);
  const dispatch = useAppDispatch();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const checkSelected = (option: any) => {
    return !!selectedValue.filter((val: any) => val.id === option.id)
      .length;
  };

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

  useOnClickOutside(selectRef, () => {
    setDropdownOpen(false);
  });

  const submitData = () => {
    const values = selectedValue.map((val: any) => val.id);
    dispatch(addData({ [keyName]: values }));
  };

  useEffect(() => {
    setSelectedValue(answer);
  }, [answer]);

  useEffect(() => {
    if(selectedValue.length !== 0)
      submitData();
  }, [selectedValue]);

  return (
    <div className="container" role="button">
      <div
        className={`row justify-content-center border-line ${cs(classes.selectWrapper)}`}
        ref={selectRef}
        id="custom-select"
      >
        <div className={`col-12 ${classes.name}`}>{label}</div>
        <div className="dropdown col-md-4 col-xs-12" onClick={toggleDropdown}>
          <div
            className={cs(classes.title, {
              [classes.placeholder]: !selectedValue,
            })}
          >
            <div>
              {selectedValue.length > 0
                ? selectedValue.map((val: any) => val.name).join(", ")
                : "Select"}
            </div>
            <img src={downArrow} alt="Down arrow" />
          </div>
          <ul
            className={cs("dropdown-menu", {
              ["show"]: isDropdownOpen,
            })}
          >
            {values.map((option: any, i: number) => (
              <li
                onClick={handleSelectValue(option)}
                key={i}
                className={cs({
                  [classes.selectedItem]: checkSelected(option),
                })}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

SelectComponent.defaultProps = {
  data: {},
  singleSelect: true,
};

export default SelectComponent;
