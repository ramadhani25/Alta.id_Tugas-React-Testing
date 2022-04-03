import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NameForm from "../FormCoding";

describe("FormCoding", () => {
  // Render Header
  it("should render H1 element", () => {
    render(<NameForm />);
    const headerElement = screen.getByText(
      /Pendaftaran Peserta Coding Bootcamp/i
    );
    expect(headerElement).toBeInTheDocument();
  });

  //   Input Nama Lengkap
  it("should be able to type in input Nama Lengkap", () => {
    render(<NameForm />);
    const inputNameElement = screen.getByPlaceholderText(/Nama Lengkap/i);
    fireEvent.change(inputNameElement, { target: { value: "Ramadhani AK" } });
    expect(inputNameElement.value).toBe("Ramadhani AK");
  });

  it("should render error when Nama Lengkap not correct", () => {
    render(<NameForm />);
    const inputNameElement = screen.getByPlaceholderText(/Nama Lengkap/i);
    fireEvent.change(inputNameElement, { target: { value: "Ramadhani AK12" } });
    expect(
      screen.getByText("Nama Lengkap Harus Berupa Huruf")
    ).toBeInTheDocument();
  });

  //   Input Email
  it("should be able to type in input Email", () => {
    render(<NameForm />);
    const inputEmailElement = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(inputEmailElement, {
      target: { value: "ramadhani@gmail.com" },
    });
    expect(inputEmailElement.value).toBe("ramadhani@gmail.com");
  });

  it("should render error when Email not correct", () => {
    render(<NameForm />);
    const inputEmailElement = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(inputEmailElement, {
      target: { value: "ramadhani" },
    });
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
  });

  //   Input Handphone
  it("should be able to type in input No Handphone", () => {
    render(<NameForm />);
    const inputPhoneElement = screen.getByPlaceholderText(/No Handphone/i);
    fireEvent.change(inputPhoneElement, {
      target: { value: "0812345678" },
    });
    expect(inputPhoneElement.value).toBe("0812345678");
  });

  it("should render error when No Handphone not correct", () => {
    render(<NameForm />);
    const inputPhoneElement = screen.getByPlaceholderText(/No Handphone/i);
    fireEvent.change(inputPhoneElement, {
      target: { value: "0812" },
    });
    expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
  });

  //   Reset Button
  it("should empty input when button reset clicked", () => {
    render(<NameForm />);
    const inputElement = screen.getAllByRole("textbox");
    const buttonResetElement = screen.getByRole("button", { name: /Reset/i });
    fireEvent.click(buttonResetElement);
    expect(inputElement[0].value).toBe("");
    expect(inputElement[1].value).toBe("");
    expect(inputElement[2].value).toBe("");
  });

  //   Submit Button
  it("should empty input when button submit clicked", () => {
    render(<NameForm />);
    const inputElement = screen.getAllByRole("textbox");
    const buttonSubmitElement = screen.getByTestId("submit");
    fireEvent.click(buttonSubmitElement);
    expect(inputElement[0].value).toBe("");
    expect(inputElement[1].value).toBe("");
    expect(inputElement[2].value).toBe("");
  });
});
