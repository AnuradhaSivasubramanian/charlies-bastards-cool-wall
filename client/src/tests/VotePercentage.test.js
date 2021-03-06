import React from "react";
import { shallow } from "enzyme";
import VotePercentage from "../components/VotePercentage";

/**
 * Factory function to create a ShallowWrapper for the ProgressBar component.
 * @function setup
 * @param {object} props - component props specific to this setup.

 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const wrapper = shallow(<VotePercentage {...props} />);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
const votepercentage = {
  cool: 21,
  subzero: 53,
  uncool: 25,
};

test("renders without error", () => {
  const wrapper = setup({ votepercentage });
  const VotePercentageComponent = findByTestAttr(
    wrapper,
    "component-votepercentage"
  );
  expect(VotePercentageComponent.length).toBe(1);
});
test("renders the circleprogressbar cool", () => {
  const wrapper = setup({ votepercentage });
  const coolProgressComponent = findByTestAttr(wrapper, "cool-progressbar");
  expect(coolProgressComponent.length).toBe(1);
});
test("renders the circleprogressbar uncool", () => {
  const wrapper = setup({ votepercentage });
  const uncoolProgressComponent = findByTestAttr(wrapper, "uncool-progressbar");
  expect(uncoolProgressComponent.length).toBe(1);
});
test("renders the circleprogressbar subzero", () => {
  const wrapper = setup({ votepercentage });
  const subzeroProgressComponent = findByTestAttr(
    wrapper,
    "subzero-progressbar"
  );
  expect(subzeroProgressComponent.length).toBe(1);
});
