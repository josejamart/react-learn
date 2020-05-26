import { render, fireEvent } from "@testing-library/react";
import TodoListUseState from "../TodoListUseState.js";
import React from "react";

describe("todoUseState", () => {
    afterAll(
        () => {
            jest.mockClear();
        }
    );

    it("Component exist", () => {
        const { getByTestId } = render(<TodoListUseState />);
        expect(getByTestId("title").textContent).toBe("Task list using useState");
    });

    it("Component list exist", () => {
        const { getAllByTestId, getByTestId, debug } = render(<TodoListUseState />);
        fireEvent.change(getByTestId("list-input"), { target: { value: "hola" } });
        getByTestId("list-button").click();

        fireEvent.change(getByTestId("list-input"), { target: { value: "hola" } });
        getByTestId("list-button").click();

        const elements = getAllByTestId("list-item-", { exact: false });

        expect(elements.length).toBe(2);

        getByTestId("delete-button", { exact: false }).click();

        expect(getAllByTestId("list-item-", { exact: false }).length).toBe(1);

    });

});