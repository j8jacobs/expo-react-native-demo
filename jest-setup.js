import "@testing-library/jest-native/extend-expect";

// jest.mock("expo-router/src/testing-library/mocks", () => {
//   const originalModule = jest.requireActual(
//     "expo-router/src/testing-library/mocks"
//   );

//   return {
//     ...originalModule,
//     initialUrlRef: {},
//   };
// });

// allows router.push to be called in tests
jest.mock("expo-linking", () => {
  const module = {
    ...jest.requireActual("expo-linking"),
    createURL: jest.fn(),
  };
  return module;
});
