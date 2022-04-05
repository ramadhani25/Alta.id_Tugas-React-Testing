import { fireEvent, render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import Search from "../Search";

jest.mock("axios");

describe("FormCoding", () => {
  // Render Header
  it("should render H1 element", () => {
    render(<Search />);
    const headerElement = screen.getByRole("heading");
    expect(headerElement.textContent).toBe("Cari Cerita");
  });

  it("should be able to type in input", () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText(/Tulis Cerita/i);
    fireEvent.change(inputElement, { target: { value: "input" } });
    expect(inputElement.value).toBe("input");
  });

  // it("fetches stories from API and displays", async () => {
  //   const stories = [
  //     { objectID: "1", title: "Hello" },
  //     { objectID: "2", title: "React" },
  //   ];

  //   axios.get.mockResolvedValueOnce(() => {
  //     Promise.resolve({ data: { hits: stories } });
  //   });

  //   render(<Search />);

  //   await act(async () => await userEvent.click(screen.getByRole("button")));

  //   const items = await screen.findAllByRole("listitem");

  //   expect(items).toHaveLength(2);
  // });

  it("fetches stories from API and fails", async () => {
    axios.get.mockResolvedValueOnce(() => {
      Promise.reject(new Error());
    });

    render(<Search />);

    await userEvent.click(screen.getByRole("button"));

    const message = await screen.findByText(/Ada yang error .../i);

    expect(message).toBeInTheDocument();
  });
});
