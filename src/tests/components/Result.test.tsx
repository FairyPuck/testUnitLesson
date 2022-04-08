import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Result from "../../components/Result/index";

let container: any;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

test("test result", () => {
    act(() => {
        ReactDOM.render(<Result value={'10'} />, container);
    });

    const result = container.querySelector(".result");
    expect(result.textContent).toEqual('10');
});
