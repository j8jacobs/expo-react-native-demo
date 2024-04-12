import "@testing-library/jest-native/extend-expect";

// allows router.push to be called in tests
jest.mock("expo-linking", () => {
  const module = {
    ...jest.requireActual("expo-linking"),
    createURL: jest.fn(),
  };
  return module;
});
