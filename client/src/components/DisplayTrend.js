import React, { Component } from "react";
import handleFetchCombinedVotes from "../helper/handleFetchCombinedVotes";
import SubZero from "./SubZero";
import Cool from "./Cool";

class DisplayTrend extends Component {
  state = {
    combined_votes: [],
    cool_technology: [],
    uncool_technology: [],
    subzero_technology: [],
  };
  componentDidMount() {
    handleFetchCombinedVotes()
      .then((results) => {
        this.setState({
          combined_votes: [...this.state.combined_votes, ...results],
        });
        this.resolveVote(this.state.combined_votes);
      })
      .catch((err) => console.error(err));
  }

  resolveVote = (combined_votes) => {
    combined_votes.forEach((vote) => {
      vote.cool_votes = parseInt(vote.cool_votes);
      vote.uncool_votes = parseInt(vote.uncool_votes);
      vote.subzero_votes = parseInt(vote.subzero_votes);
      if (
        vote.cool_votes > vote.uncool_votes &&
        vote.cool_votes > vote.subzero_votes
      ) {
        this.setState({
          cool_technology: [...this.state.cool_technology, vote],
        });
      }
      if (
        vote.uncool_votes > vote.cool_votes &&
        vote.uncool_votes > vote.subzero_votes
      ) {
        this.setState({
          uncool_technology: [...this.state.uncool_technology, vote],
        });
      }
      if (
        vote.subzero_votes > vote.uncool_votes &&
        vote.subzero_votes > vote.cool_votes
      ) {
        this.setState({
          subzero_technology: [...this.state.subzero_technology, vote],
        });
      }
    });
  };

  render() {
    return (
      <div data-test="component-displaytrend">
        <div className="coolwall--uncool"></div>
        <div className="coolwall--cool">
          <Cool cool_technology={this.state.cool_technology} />
        </div>
        <div className="coolwall--subzero">
          <SubZero subzero_technology={this.state.subzero_technology} />
        </div>
      </div>
    );
  }
}
export default DisplayTrend;