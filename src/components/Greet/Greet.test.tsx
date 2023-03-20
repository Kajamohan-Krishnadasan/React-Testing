import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test.skip("Greet Render Correctly", () => {
    render(<Greet />);

    //   const textElement = screen.getByText('Kajamohan');   // test pass
    //   const textElement = screen.getByText('kajamohan');   // test fail because of k is in lowercase

    const textElement = screen.getByText(/kajamohan/i); // test pass because this ignore the uppercase and lowercase
    expect(textElement).toBeInTheDocument();
  });
});
