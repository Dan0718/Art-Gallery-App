// components/ArtPieces.js
import ArtPiecePreview from './ArtPiecePreview';

function ArtPieces({ pieces }) {
  return (
    <div className='gallery-container'>
      {pieces && pieces.map((piece) => (
        <ArtPiecePreview key={piece.slug} slug={piece.slug} imageSource={piece.imageSource} title={piece.name} artist={piece.artist} />
      ))}
    </div>
  );
}

export default ArtPieces;
