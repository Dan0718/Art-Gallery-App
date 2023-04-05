import ArtPieces from "../components/ArtPieces";
import { useContext } from "react";
import { ArtPiecesContext } from "../context/ArtPiecesContext";

const Favorites = () => {
  const { artPieces } = useContext(ArtPiecesContext);
  const favoriteArtPieces = artPieces.filter((artPiece) => artPiece.isFavorite);

  return (
    <>
      <h1>Favorites</h1>
      <ArtPieces pieces={favoriteArtPieces} />
    </>
  );
};

export default Favorites;
