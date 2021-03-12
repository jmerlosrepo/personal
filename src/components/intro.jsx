import React from "react";
import ReactHtmlParser from 'react-html-parser';
import * as personalConstants from '../constants';

const Intro = ({introName, career, presentation, profilePic}) => {
  return (
    <div className="container container-margins intro">
      <div className="introPic">
        <div className="picture" style={{backgroundImage: `url("${personalConstants.HOST}:${personalConstants.PORT}/assets/${profilePic}")`}}></div>
      </div>
      <div className="IntroBio">
        <div className="introTitle">
          <h2>Hi, I'm {introName}</h2>
          <h3>{career.toUpperCase()}</h3>
        </div>
        {ReactHtmlParser(presentation)}
      </div>
    </div>
  );
};

export default Intro;
