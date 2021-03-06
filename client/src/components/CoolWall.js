import React, { Component } from "react";
import TechVote from "./TechVote";
import DisplayTrend from "./DisplayTrend";
import Logo from "../images/logo.svg";
import "../stylesheets/global.scss";
import "../stylesheets/CoolWall.scss";
import Cool from "../images/cool.svg";
import UnCool from "../images/uncool.svg";
import SubZero from "../images/subzero.svg";

class CoolWall extends Component {
  render() {
    return (
      <div data-test="component-coolwall" className="coolwall--wrapper">
        <div className="coolwall--animation_wrap">
          <div className="coolwall--icons_wrap">
            <div className="coolwall--icon_col">
              <img
                className="coolwall--icon_img"
                src={UnCool}
                alt="uncool logo"
              />
            </div>
            <div className="coolwall--icon_col">
              <img className="coolwall--icon_img" src={Cool} alt="cool logo" />
            </div>
            <div className="coolwall--icon_col">
              <img
                className="coolwall--icon_img"
                src={SubZero}
                alt="subzero logo"
              />
            </div>
          </div>
        </div>
        <div className="coolwall--left">
          <div className="coolwall--left_white">
            <img className="coolwall--logo" src={Logo} alt="Logo CoolWall" />
          </div>
          <div className="coolwall--left_grey">
            <div className="coolwall--credentials">
              <a
                target="blank"
                href="https://softwarebastards.nl/"
                className="coolwall--copyright"
              >
                @softwarebastards
              </a>
              <div className="coolwall--author">
                <p className="coolwall--author_p">Created by</p>
                <a
                  className="coolwall--author_a"
                  target="blank"
                  href="https://www.linkedin.com/in/elsabethdesta/"
                >
                  Elsabeth Desta
                </a>
                <a
                  className="coolwall--author_a"
                  target="blank"
                  href="https://www.linkedin.com/in/anuradha-sivasubramanian/"
                >
                  Anu Sivasubramanian
                </a>
                <a
                  className="coolwall--author_a"
                  target="blank"
                  href="https://www.linkedin.com/in/birte-spreuer/"
                >
                  Birte Spreuer
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="coolwall--right">
          <div className="coolwall--right_top"></div>
          <div className="coolwall--right_wrapper">
            <p className="right--top_p">
              Vote and submit what’s hot and what’s not!
            </p>
            <div className="coolwall--techvote_wrapper">
              <TechVote data-test="techvote-component" />
            </div>
            <div
              className="coolwall--displaytrend"
              data-test="displaytrend-component"
            >
              <DisplayTrend />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoolWall;
