import { render, screen } from "@testing-library/react";
import { TodoProvider } from "./context";
import {Todo} from "./todo";


describe('Todo component', () => {
    test("When a task title is typed into the input box and the 'add' button is clicked, a new todo item is added to the list", () => {
        render(<TodoProvider><Todo/></TodoProvider>);
        const inputEl = screen.getByPlaceHolderText("Add a new task");
        console.log(inputEl);
    });
});