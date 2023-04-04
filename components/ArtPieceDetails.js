// components/ArtPieceDetails.js
import Image from 'next/image';

function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <div>
      <Image src={image} alt={title} width={500} height={500} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </div>
  );
}

export default ArtPieceDetails;
