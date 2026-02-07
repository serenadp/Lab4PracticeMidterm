import { squareFeetToAcres } from "../src/squarefeet2acres.js";

describe ("squareFeetToAcres", () => {
  it("converts 43,560 sq ft to 1 acre", () => {
    const result = squareFeetToAcres(43560);
    expect(result).toBeCloseTo(1, 5);
  });

  it("converts 87,120 sq ft to 2 acres", () => {
    const result = squareFeetToAcres(87120);
    expect(result).toBeCloseTo(2, 5);
  });

  it("converts 21,780 sq ft to 0.5 acres", () => {
    const result = squareFeetToAcres(21780);
    expect(result).toBeCloseTo(0.5, 5);
  });
});


