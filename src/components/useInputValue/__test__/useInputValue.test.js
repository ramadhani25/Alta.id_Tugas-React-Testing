import { renderHook } from "@testing-library/react-hooks";
import { useInputValue } from "../useInputValue";
import { act } from "@testing-library/react";

jest.mock("axios");

describe("useInputValue Hooks", () => {
  it("should return value", () => {
    const { result } = renderHook(() => useInputValue("Default Value"));

    expect(result.current.value).toBe("Default Value");
  });

  it("should return new Value when updated value", () => {
    const { result } = renderHook(() => useInputValue("Default Value"));

    act(() => result.current.onChange({ target: { value: "New Value" } }));

    expect(result.current.value).toBe("New Value");
  });
});
