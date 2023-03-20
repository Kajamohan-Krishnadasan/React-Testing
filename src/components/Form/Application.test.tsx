import { render, screen } from "@testing-library/react";
import Application from "./Application";

// console.log(name); // ESlint error: 'name' is not defined
// const name = "Kajamohan";

describe("Appliction", () => {
  test("render correctly", async () => {
    render(<Application />);

    /**
     * getByRole()
     * without and with options
     */

    /* check by name and level */

    // const pageHeading = await screen.getByRole("heading", { // ESlint error: await is not required
    const pageHeading = screen.getByRole("heading", {
      name: "Job application form",
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    /* check by level */
    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    /* check by Name*/
    // const nameElement = screen.getByRole("textbox");    // this will fail because of we have more than one textbox (input type='text', textarea)
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    // eslint
    // expect(submitButtonElement).not.toBeEnabled();
    expect(submitButtonElement).toBeDisabled(); // button is disabled

    /**
     * getByLabelText
     */
    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const nameElement3 = screen.getByLabelText("Newname", {
      selector: "input",
    });
    expect(nameElement3).toBeInTheDocument();

    /**
     * getByPlaceholderText
     */
    const nameElement4 = screen.getByPlaceholderText("Fullname");
    expect(nameElement4).toBeInTheDocument();

    /**
     * getByText
     */
    const paragraphElement = screen.getByText("All field are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    /**
     * getByDisplayValue
     */
    const nameElement5 = screen.getByDisplayValue("Kajamohan");
    expect(nameElement5).toBeInTheDocument();

    /**
     * getByAltText
     */
    const imageElement = screen.getByAltText("mouse cursor");
    expect(imageElement).toBeInTheDocument();

    /**
     * getByTitle
     */
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    /**
     * getByTestId
     */
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    /* end */
  });
});
