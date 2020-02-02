import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import Modal from "./Modal";
import Column from "./Column";
import Card from "./Card";
import Scrumboard from "./Scrumboard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Scrumboard></Scrumboard>, div);
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Scrumboard>
      <Column />
    </Scrumboard>,
    div
  );
});
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Scrumboard>
      <Column>
        <Card></Card>
      </Column>
    </Scrumboard>,
    div
  );
});
