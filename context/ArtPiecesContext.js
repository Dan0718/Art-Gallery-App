// contexts/ArtPiecesContext.js

import { createContext, useState, useEffect } from "react";

const ArtPiecesContext = createContext();

const ArtPiecesContextProvider = ({ children }) => {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    fetch("https://example-apis.vercel.app/api/art")
      .then((res) => res.json())
      .then((data) => {
        const updatedData = data.map((artPiece) => ({
          ...artPiece,
          isFavorite: false,
        }));
        setArtPieces(updatedData);
      });
  }, []);

  const toggleFavorite = (slug) => {
    setArtPieces((prevArtPieces) => {
      const updatedArtPieces = prevArtPieces.map((artPiece) =>
        artPiece.slug === slug
          ? { ...artPiece, isFavorite: !artPiece.isFavorite }
          : artPiece
      );
      console.log('Updated isFavorite values:', updatedArtPieces.map(artPiece => artPiece.isFavorite));
      return updatedArtPieces;
    });
  };
  
  

  /*const toggleFavorite = (id) => {
    setArtPieces((prevArtPieces) =>
      prevArtPieces.map((artPiece) =>
        artPiece.id === id
          ? { ...artPiece, isFavorite: !artPiece.isFavorite }
          : artPiece
      )
    );
  };*/

  return (
    <ArtPiecesContext.Provider value={{ artPieces, toggleFavorite }}>
      {children}
    </ArtPiecesContext.Provider>
  );
};

export { ArtPiecesContext, ArtPiecesContextProvider };
