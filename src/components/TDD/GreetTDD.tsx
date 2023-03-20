import React from "react";
import { GreetProps as GP } from "./Greet.types";

export const GreetTDD = (props: GP) => {
  // return <div>Hello {props.name ? props.name : "Guest"}</div>;
  return <div>Hello {props.name}</div>;
};
