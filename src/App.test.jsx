import { describe, it, expect } from "vitest";

describe("8 Puzzle Game", () => {
  it("recognizes the goal state", () => {
    const goal = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    expect(goal.every((tile, index) => tile === index + 1 || (index === 8 && tile === 0))).toBe(true);
  });
});
