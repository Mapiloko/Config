import React, { FC } from "react";
import classes from "./QuestionWrapper.module.scss";
import cs from "classnames";
import QuestionTypes from "components/QuestionTypes";

const QuestionWrapper: FC = () => {

  return (
    <div className={cs(classes.wrapper, "bg-drop-blur")}>
      <QuestionTypes />
    </div>
  );
};

export default QuestionWrapper;
