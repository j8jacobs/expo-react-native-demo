import "@testing-library/react-native/extend-expect";
import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react-native";
// import {
//   renderRouter,
//   screen as RouterScreen,
// } from "expo-router/testing-library";

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
  it("renders all tabs", () => {
    render(<App />);
    // getByText must match exact text
    // if it's not found, it will throw and the test will fail
    screen.getByText("Purpose");
    screen.getByText("Navigation");
    screen.getByText("Kanye West Quote Generator");
    screen.getByText("Build a Barhop");
    // const tabCtr = screen.getByTestId("tabs");
    // console.log("tabCtr = ", tabCtr);
    // expect(tabCtr.children.length).toBe(4);
  });
  xit("Purpose links properly", () => {
    // this only works for buttons, not the expo-router link
    // will find a testing pattern for router based testing
    // render(<App />);
    // fireEvent.press(screen.getByText("Purpose"));
  });
  it("routes properly", () => {});
});

// I don't understand how to test expo-router, but here's the setup
//import { renderRouter, screen } from "expo-router/testing-library";
// describe("2 <App />", () => {
//   it("should test routing", () => {
//     console.log("theer...");
//     const MockComponent = jest.fn(() => <View />);

//     renderRouter(
//       {
//         index: MockComponent,
//         "directory/a": MockComponent,
//         "(group)/b": MockComponent,
//       },
//       {
//         // initialUrl: "/directory/a",
//         initialUrl: "/(group)/a",
//       }
//     );

//     expect(screen).toHavePathname("/(group)/a");
//   });

//   xit("should test actual routing", () => {
//     const output = renderRouter(
//       {
//         "/": App,
//       },
//       {
//         initialUrl: "/",
//       }
//     );
//     console.log(output);
//   });
// });
