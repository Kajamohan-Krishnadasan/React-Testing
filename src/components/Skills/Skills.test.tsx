import { logRoles, render, screen } from "@testing-library/react";
import Skills from "./Skills";

const skills = ["HTML", "CSS", "JavaScript"];

describe.skip("Skills", () => {
  test("render correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });
});

describe.skip("Text Match", () => {
  /**
   * TextMatch
   */
  test("string", () => {
    render(<Skills skills={skills} />);

    // full string match
    const helloWorldElement1 = screen.getByText("Hello World");
    expect(helloWorldElement1).toBeInTheDocument();

    // substring match
    const helloWorldElement2 = screen.getByText("llo Worl", { exact: false });
    expect(helloWorldElement2).toBeInTheDocument();

    // ignore case
    const helloWorldElement3 = screen.getByText("hello world", {
      exact: false,
    });
    expect(helloWorldElement3).toBeInTheDocument();
  });

  // regex
  test("Regex", () => {
    render(<Skills skills={skills} />);

    // substring match
    const helloWorldElement1 = screen.getByText(/World/);
    expect(helloWorldElement1).toBeInTheDocument();

    // substring match, ignore case
    const helloWorldElement2 = screen.getByText(/world/i);
    expect(helloWorldElement2).toBeInTheDocument();

    // full string match, ignore case
    const helloWorldElement3 = screen.getByText(/^hello world$/i);
    expect(helloWorldElement3).toBeInTheDocument();
  });

  test("Custom Function", () => {
    // custom function
    const helloWorldElement1 = screen.getByText((content) =>
      content.startsWith("Hello")
    );
    expect(helloWorldElement1).toBeInTheDocument();
  });
});

describe.skip("renders button (queryBy..)", () => {
  test("Login Button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start learning Button is not render", () => {
    render(<Skills skills={skills} />);

    // below is not give pass
    //     const startLearningButton = screen.getByRole("button", {
    //       name: "Start learning",
    //     });
    //     expect(startLearningButton).not.toBeInTheDocument();

    /**
     * queryBy
     */
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });
});

describe.skip("renders button (findBy..)", () => {
  test("Start learning Button is eventually displayed", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);

    /**
     * below is not give pass because this not read element appear on the screen
    
    // getBy
        const startLearningButton = screen.getByRole("button", {
            name: "Start learning",
            });
        expect(startLearningButton).toBeInTheDocument();

    // queryBy
            
        const startLearningButton = screen.queryByRole("button", {
            name: "Start learning",
        });
        expect(startLearningButton).toBeInTheDocument();
    */

    /**
     * findBy
     * default timeout is  1000ms
     */

    // screen.debug();

    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );

    // screen.debug();

    expect(startLearningButton).toBeInTheDocument();
  });
});
