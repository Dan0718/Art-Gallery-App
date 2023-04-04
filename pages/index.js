// pages/index.js
import ArtPieces from "../components/ArtPieces";

function HomePage({ artPieces }) {
  return (
    <div>
      <h1>Pieces</h1>
      <ArtPieces pieces={artPieces} />
    </div>
  );
}

export default HomePage;

