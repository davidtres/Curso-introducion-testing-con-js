describe("group 1", () => {
  afterAll(() => {
    console.log("afterAll");
  });

  test("case 1 ", () => {
    console.log("case 1");
    expect(1 + 1).toBe(2);
  });

  test("case 2 ", () => {
    console.log("case 2");
    expect(1 + 3).toBe(4);
  });
  describe("group 2", () => {
    test("case 3 ", () => {
      console.log("case 3");
      expect(1 + 1).toBe(2);
    });
    beforeEach(() => {
      console.log("beforeEach");
    });
    beforeAll(() => {
      console.log("beForAll");
    });
    test("case 4 ", () => {
      console.log("case 4");
      expect(1 + 3).toBe(4);
    });
  });
});
