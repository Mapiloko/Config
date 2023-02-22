import React from "react";
import AppBar from "components/AppBar";
import Page from "components/Page";
import QuestionWrapper from "components/QuestionWrapper";

const Landing = () => {
  return (
    <div>
      <AppBar />
      <Page>
        <QuestionWrapper />
      </Page>
    </div>
  );
};

export default Landing;
