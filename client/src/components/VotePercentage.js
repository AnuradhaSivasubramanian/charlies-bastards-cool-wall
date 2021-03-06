import React from "react";
import "../stylesheets/VotePercentage.scss";
import CircleProgressBar from "./CircleProgressBar";

const blue = "#145cc6";
const red = "#ff0013";
const yellow = "#ffb000";
const lightblue = "#b7c9f7";

export default function VotePercentage({ votepercentage }) {
  return (
    <div
      className="votepercentage--wrapper"
      data-test="component-votepercentage"
    >
      <div className="votepercentage--descricption_wrap">
        <p className="votepercentage--descricption_span">UnCool</p>
        <p className="votepercentage--descricption_span">Cool</p>
        <p className="votepercentage--descricption_span">SubZero</p>
      </div>
      <div className="votepercentage--circle_wrap">
        <CircleProgressBar
          data-test="cool-progressbar"
          progress={votepercentage.cool}
          size={100}
          strokeWidth={5}
          circleOneStroke={yellow}
          circleTwoStroke={lightblue}
        />
        <CircleProgressBar
          data-test="uncool-progressbar"
          progress={votepercentage.uncool}
          progress2={100}
          size={100}
          strokeWidth={5}
          circleOneStroke={red}
          circleTwoStroke={lightblue}
        />
        <CircleProgressBar
          data-test="subzero-progressbar"
          progress={votepercentage.subzero}
          size={100}
          strokeWidth={5}
          circleOneStroke={blue}
          circleTwoStroke={lightblue}
        />
      </div>
    </div>
  );
}
