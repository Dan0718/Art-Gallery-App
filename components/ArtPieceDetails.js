// components/ArtPieceDetails.js
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

function ArtPieceDetails({ slug, image, title, artist, year, genre }) {
  return (
    <div>
      <Image src={image} alt={title} width={500} height={500} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <FavoriteButton slug={slug} />
    </div>
  );
}

export default ArtPieceDetails;
