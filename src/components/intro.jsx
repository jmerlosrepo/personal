import React from "react";
import ReactHtmlParser from 'react-html-parser'
import * as personalConstants from '../constants';

const Intro = ({introName, career, presentation, profilePic}) => {
  return (
    <div className="container container-margins row">
      <div className="col-md-6">
        <div className="picture" style={{backgroundImage: `url("${personalConstants.HOST}:${personalConstants.PORT}/assets/${profilePic}")`}}></div>
      </div>
      <div className="col-md-6">
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
