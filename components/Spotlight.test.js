import { render } from "@testing-library/react";
import Spotlight from "./Spotlight";
import { ArtPiecesContext } from "../contexts/ArtPiecesContext";

describe("Spotlight", () => {
  test("renders spotlight with favorite button", () => {
    const props = {
      title: "Test Art",
      artist: "John Doe",
      image: "test-image.jpg",
      slug: "test-art",
    };

    // Provide a mock context value
    const mockContextValue = {
      artPiecesInfo: {
        "test-art": {
          favorite: false,
        },
      },
      toggleFavorite: jest.fn(),
    };

    const { getByText, getByAltText, getByTestId } = render(
      <ArtPiecesContext.Provider value={mockContextValue}>
        <Spotlight {...props} />
      </ArtPiecesContext.Provider>
    );

    expect(getByText(props.title)).toBeInTheDocument();
    expect(getByText(`Artist: ${props.artist}`)).toBeInTheDocument();
    expect(getByAltText(props.title)).toBeInTheDocument();
    expect(getByTestId("favorite-button")).toBeInTheDocument();
  });
});
