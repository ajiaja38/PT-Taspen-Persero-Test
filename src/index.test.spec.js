const groupAndSortLetters = require("./index.js");

describe("groupAndSortLetters", () => {
  it("should return sorted and grouped letters with first example", () => {
    const words = ["Abc", "bCd"];
    const expectedOutput = "bACcd";
    expect(groupAndSortLetters(words)).toEqual(expectedOutput);
  });

  it("should return sorted and grouped letters with second example", () => {
    const words = ["Oke", "One"];
    const expectedOutput = "Oekn";
    expect(groupAndSortLetters(words)).toEqual(expectedOutput);
  });

  it("should return sorted and grouped letters", () => {
    const words = ["Pendanaan", "Terproteksi", "Untuk", "Dampak", "Berarti"];
    const expectedOutput = "aenrktipBDPTUdmosu";
    expect(groupAndSortLetters(words)).toEqual(expectedOutput);
  });

  it("should handle empty array input", () => {
    const words = [];
    expect(groupAndSortLetters(words)).toEqual("");
  });

  it("should handle array with empty strings", () => {
    const words = ["", "", ""];
    expect(groupAndSortLetters(words)).toEqual("");
  });

  it("should handle array with single-character words", () => {
    const words = ["a", "b", "c", "d"];
    expect(groupAndSortLetters(words)).toEqual("abcd");
  });

  it("should handle array with words containing special characters", () => {
    const words = ["@abc", "$def", "!ghi"];
    const expectedOutput = "!$@abcdefghi";
    expect(groupAndSortLetters(words)).toEqual(expectedOutput);
  });

  it("should handle array with words containing non-alphabetic characters", () => {
    const words = ["123abc", "456def", "789ghi"];
    const expectedOutput = "123456789abcdefghi";
    expect(groupAndSortLetters(words)).toEqual(expectedOutput);
  });
});
