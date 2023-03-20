import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import UseCounter from "./useCounter";

describe("use Counter", () => {
  test.skip("should render the initial count", () => {
    const { result } = renderHook(UseCounter);
    expect(result.current.count).toBe(0);
    // expect(result.current.count).not.toBe(0); // this fail because of count value is 0
  });

  test.skip("should accept and render the initial count", () => {
    const { result } = renderHook(UseCounter, {
      initialProps: {
        initialCount: 100,
      },
    });

    expect(result.current.count).toBe(100);
  });

  test("should increment the count", () => {
    const { result } = renderHook(UseCounter);
    // result.current.increment(); // can't directly use
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(UseCounter);
    // result.current.decrement(); // can't directly use
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });
});
