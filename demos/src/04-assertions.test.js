// matchers
test("test obj", () => {
  const data = { name: "david" };
  data.lastName = "trespalacios";
  expect(data).toEqual({ name: "david", lastName: "trespalacios" });
});

test("test null", () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test("test booleans", () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
});

test("test string", () => {
  expect("david jose").toMatch(/jose/);
});
test("list / arrays", () => {
  expect([1, 2, 3, 4]).toContain(3);
});
