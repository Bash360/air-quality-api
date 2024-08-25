import Utility from "../../src/common/helpers/utilities";

test("Test Helper Utility Methods Utility.isValidCoordinates(21.12345, 30.6789)", () => {
  expect(Utility.isValidCoordinates(21.12345, 30.6789)).toBeTruthy();
});


test("Test Helper Utility Methods Utility.isValidCoordinates(100, 230)", () => {
  expect(Utility.isValidCoordinates(100, 230)).toBeFalsy();
});

