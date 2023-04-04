import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation";

describe("Navigation", () => {
  it("renders navigation links", () => {
    render(<Navigation />);

    const spotlightLink = screen.getByText("Spotlight");
    const piecesLink = screen.getByText("Pieces");

    expect(spotlightLink).toBeInTheDocument();
    expect(piecesLink).toBeInTheDocument();
  });
});
