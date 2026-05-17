import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { createRoutesStub } from "react-router";
import { Nav } from "./Nav";

describe("Nav", () => {
  it("renders the wordmark and main links", () => {
    const Stub = createRoutesStub([
      {
        path: "/",
        Component: () => <Nav />,
      },
    ]);
    render(<Stub />);
    expect(screen.getByText("Huggabowl")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /visit us/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /donate/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /stories/i })).toBeInTheDocument();
  });
});
