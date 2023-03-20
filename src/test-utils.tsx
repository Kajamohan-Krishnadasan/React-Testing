import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { AppProviders } from "./components/Providers/AppProviders";

const CustomRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  render(ui, { wrapper: AppProviders, ...options });
};

export * from "@testing-library/react";
export { CustomRender as render };
