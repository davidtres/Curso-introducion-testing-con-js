const { sum, multiply } = require("./02-math");

test("add 1 + 3 should be 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test("multiply 1 + 3 should be 3", () => {
  const rta = multiply(1, 3);
  expect(rta).toBe(3);
});
