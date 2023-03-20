// without our custom test-utils.tsx file
// import { render, screen } from "@testing-library/react";
// import { AppProviders } from "../Providers/AppProviders";

// with our custom test-utils.tsx file
import { render, screen } from "../../test-utils";
import MuiMode from "./MuiMode";

describe.skip("MUI mode", () => {
  test("render component", () => {
    // without our custom test-utils.tsx file
    // render(<MuiMode />, {
    //   wrapper: AppProviders,
    // });

    const headingElement = screen.getByRole("heading");
    /**
     * test fail if the render method
     * don't have the "wrapper : AppProviders" but this
     * test pass because of we added the "wrapper : AppProviders" argument
     */
    expect(headingElement).toHaveTextContent("dark mode");
  });

  test("Custom render component", () => {
    // with our custom test-utils.tsx file
    render(<MuiMode />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
