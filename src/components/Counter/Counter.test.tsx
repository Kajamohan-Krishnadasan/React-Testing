import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import Counter from "./Counter";

describe.skip("User-Events Counter mouse interactions", () => {
  test("Render correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("render a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("render a count of 1 after clicking the increment button", async () => {
    user.setup();

    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0"); // this pass

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);

    /**
     * text fail because button is clicked
     * therefore now count value is 1
     */
    // expect(countElement).toHaveTextContent("0"); // this fail

    expect(countElement).toHaveTextContent("1");
  });

  test("render a count of 2 after clicking the increment button twice", async () => {
    user.setup();

    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0"); // this pass

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.dblClick(incrementButton);

    /**
     * text fail because button is clicked twice
     * therefore now count value is 2
     */
    // expect(countElement).toHaveTextContent("0"); // this fail
    // expect(countElement).toHaveTextContent("1"); // this fail

    expect(countElement).toHaveTextContent("2");
  });
});

describe.skip("User-Events Counter keyboard interactions", () => {
  test("render a count of 10 after clicking the set buutton", async () => {
    user.setup();

    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10); // this pass

    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0"); // this pass
  });

  test("Check focus using the tab buttton", async () => {
    user.setup();

    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });

    // focus order: increment buuton -> amount input -> set button

    await user.tab();
    expect(incrementButton).toHaveFocus();

    await user.tab();
    expect(amountInput).toHaveFocus();

    await user.tab();
    expect(setButton).toHaveFocus();
  });

  test("Select Options", async () => {
    user.setup();
    render(
      <select multiple>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
      </select>
    );

    await user.selectOptions(screen.getByRole("listbox"), ["1", "C"]); //  here we selecting options A,C
    expect(
      (screen.getByRole("option", { name: "A" }) as HTMLOptionElement).selected
    ).toBe(true);
    expect(
      (screen.getByRole("option", { name: "B" }) as HTMLOptionElement).selected
    ).toBe(false);
    expect(
      (screen.getByRole("option", { name: "C" }) as HTMLOptionElement).selected
    ).toBe(true);
  });
});
