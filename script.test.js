const addNumbers = require("./script");

test("unit tests for index.js", () => {
  expect(addNumbers(10, 4)).toBe(14);
});
