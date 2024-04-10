import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react-native";

import App from "../app/index";

describe("<App />", () => {
  // basic testing functionalities: basic render and snapshot
  it("renders", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders correctly", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  // more complex testing (experiments)
  it("All tabs are there", () => {
    render(<App />);
    // getByText must match exact text
    // if it's not found, it will throw and the test will fail
    screen.getByText("Purpose");
    screen.getByText("Navigation");
    screen.getByText("Kanye West Quote Generator");
    screen.getByText("Build a Barhop");
  });
  xit("Purpose links properly", () => {
    // this only works for buttons, not the expo-router link
    // will find a testing pattern for router based testing
    // render(<App />);
    // fireEvent.press(screen.getByText("Purpose"));
  });
});
