import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import React from "react";
import { server } from "../../mocks/Server";
import Users from "./Users";

describe("Users", () => {
  test.skip("render Correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test.skip("render a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    /**
     * length is 3 from handlers.ts file ('Kajamohan', 'Arshath', 'Niroshan')
     */
    expect(users).toHaveLength(3);
  });

  test("render error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<Users />);
    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});
