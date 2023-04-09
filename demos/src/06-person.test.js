const Person = require("./06-person");

test("should return down", () => {
  const person = new Person("David", 45, 1.72);
  const imc = person.calcIMC();
  expect(imc).toBe("down");
});
test("should return normal", () => {
  const person = new Person("David", 59, 1.72);
  const imc = person.calcIMC();
  expect(imc).toBe("normal");
});
