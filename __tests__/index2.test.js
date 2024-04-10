import { renderRouter, screen } from "expo-router/testing-library";
import { View } from "react-native";
import App from "../app/index";

describe("2 <App />", () => {
  it("should test routing", () => {
    console.log("theer...");
    const MockComponent = jest.fn(() => <View />);

    renderRouter(
      {
        index: MockComponent,
        "directory/a": MockComponent,
        "(group)/b": MockComponent,
      },
      {
        // initialUrl: "/directory/a",
        initialUrl: "/(group)/a",
      }
    );

    expect(screen).toHavePathname("/(group)/a");
  });

  xit("should test actual routing", () => {
    const output = renderRouter(
      {
        "/": App,
      },
      {
        initialUrl: "/",
      }
    );
    console.log(output);
  });
});
