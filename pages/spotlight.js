// pages/spotlight.js
import Spotlight from "../components/Spotlight";

function SpotlightPage({ artPieces }) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  const spotlightPiece = artPieces[randomIndex];

  if (!spotlightPiece) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Spotlight</h1>
      <Spotlight
        imageSource={spotlightPiece.imageSource}
        title={spotlightPiece.name}
        artist={spotlightPiece.artist}
      />
    </div>
  );
}

export default SpotlightPage;
