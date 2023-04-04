import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "../components/ArtPieceDetails";

describe("ArtPieceDetails", () => {
  it("renders art piece details correctly", () => {
    const mockArtPiece = {
      image: "https://example.com/image.jpg",
      title: "Test Title",
      artist: "Test Artist",
      year: "2020",
      genre: "Test Genre",
    };

    render(
      <ArtPieceDetails
        image={mockArtPiece.image}
        title={mockArtPiece.title}
        artist={mockArtPiece.artist}
        year={mockArtPiece.year}
        genre={mockArtPiece.genre}
      />
    );

    const image = screen.getByRole("img");
    const title = screen.getByText(mockArtPiece.title);
    const artist = screen.getByText(`Artist: ${mockArtPiece.artist}`);
    const year = screen.getByText(`Year: ${mockArtPiece.year}`);
    const genre = screen.getByText(`Genre: ${mockArtPiece.genre}`);

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(artist).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
  });
});
