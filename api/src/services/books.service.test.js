const BooksService = require("./books.service");

const fakeBooks = [
  {
    _id: 1,
    name: "Harry Potter",
  },
];

const mockGetAll = jest.fn();

// const mongoLibStub = {
//   getAll: mockGetAll,
//   create: () => {},
// };

jest.mock("../lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);

describe("Test for BooksService", () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });
  describe("test for getBooks", () => {
    test("should return a list book", async () => {
      //Arrange
      mockGetAll.mockResolvedValue(fakeBooks);
      //Act
      const books = await service.getBooks({});
      console.log(books);
      //Assert
      expect(books.length).toEqual(1);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });
  });
});
