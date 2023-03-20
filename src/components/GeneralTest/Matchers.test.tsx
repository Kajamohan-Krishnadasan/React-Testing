import React from "react";

describe.skip("Matchers", () => {
  test("adding floating point numbers", () => {
    const value = 0.1 + 0.2;
    //   expect(value).toBe(0.3); // This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });

  test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  test("the shopping list has milk on it", () => {
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });
});
