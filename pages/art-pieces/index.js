import ArtPieces from '../../components/ArtPieces';

function ArtPiecesPage({ artPieces }) {
  if (!artPieces || artPieces.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={artPieces} />
    </div>
  );
}

export default ArtPiecesPage;
