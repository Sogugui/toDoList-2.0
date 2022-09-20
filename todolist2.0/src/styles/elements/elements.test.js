import React from "react";
import { shallow } from "enzyme";
import Elements from "./elements";

describe("Elements", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Elements />);
    expect(wrapper).toMatchSnapshot();
  });
});
