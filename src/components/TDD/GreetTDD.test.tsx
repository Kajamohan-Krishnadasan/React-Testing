import { render, screen } from "@testing-library/react";
import { GreetTDD } from "./GreetTDD";

describe("TDD Greet:", () => {
  test.skip("TDD Greet Render Correctly", () => {
    render(<GreetTDD />)
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested:", () => {
    test.skip("TDD Greet Render with a name", () => {
      render(<GreetTDD name="Kajamohan" />);
      const textElement = screen.getByText("Hello Kajamohan");
      expect(textElement).toBeInTheDocument();
    });
  });
});
