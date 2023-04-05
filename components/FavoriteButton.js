// components/FavoriteButton.js
import { useContext } from "react";
import { ArtPiecesContext } from "../context/ArtPiecesContext";
import Heart from "./Heart";

function FavoriteButton({ slug }) {
  const { artPieces, toggleFavorite } = useContext(ArtPiecesContext);
  const artPiece = artPieces.find((piece) => piece.slug === slug);
  const isFavorite = artPiece?.isFavorite || false;

  const handleClick = (event) => {
    event.preventDefault();
    toggleFavorite(slug);
  };

  return (
    <button
      style={{
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <Heart fill={isFavorite ? "red" : "black"} />
    </button>
  );
}

export default FavoriteButton;






