import ManageNotes from "../../app/notes/manage";
import renderer from "react-test-renderer";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";
import { View } from "react-native";
import { router } from "expo-router"; // This is how you'd use router in your component, not in your test

describe("<ManageNotes />", () => {
  it("should render", () => {
    render(<ManageNotes />);
  });
  it("should render correctly", () => {
    const tree = renderer.create(<ManageNotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should route to create page when btn is pressed", async () => {
    const MockComponent = jest.fn(() => <View />);
    renderRouter(
      {
        "/notes/manage": ManageNotes,
        "/notes/create": MockComponent,
      },
      {
        initialUrl: "/notes/manage",
      }
    );

    render(<ManageNotes />);
    await waitFor(() => {
      expect(screen.getByText("Add Note")).toBeTruthy();
    });
    fireEvent.press(screen.getByText("Add Note"));
    expect(router.push).toHaveBeenCalledWith("/notes/create");
  });
});
