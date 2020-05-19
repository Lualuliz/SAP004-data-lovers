import { filterBy, orderBy } from "../src/data.js";
import { lol } from "./mockup.js";

describe("filterBy", () => {
  it("is a function", () => {
    expect(typeof filterBy).toBe("function");
  });

  it('should return an "Aatrox" for "Aatrox"', () => {
    expect(filterBy(lol.data, "aatrox")[0].name).toBe("Aatrox");
  });
});

describe("orderBy", () => {
  it("is a function", () => {
    expect(typeof orderBy).toBe("function");
  });

  it('should return  "major hp" to ascending-hp ""', () => {
    expect(orderBy(lol.data, "hp", "ascending")[0].stats.hp).toBe(537.8);
  });

  it('should return  "minor hp" to descending-hp ""', () => {
    expect(orderBy(lol.data, "hp", "")[0].stats.hp).toBe(499.32);
  });

  it('should return  "major mp" to ascending-mp ""', () => {
    expect(orderBy(lol.data, "mp", "ascending")[0].stats.mp).toBe(334);
  });

  it('should return  "minor mp" to descending-mp ""', () => {
    expect(orderBy(lol.data, "mp", "")[0].stats.mp).toBe(105.6);
  });

  it('should return  "major armor" to ascending-armor ""', () => {
    expect(orderBy(lol.data, "armor", "ascending")[0].stats.armor).toBe(24.384);
  });

  it('should return  "minor armor" to descending-armor ""', () => {
    expect(orderBy(lol.data, "armor", "")[0].stats.mp).toBe(334);
  });
});
