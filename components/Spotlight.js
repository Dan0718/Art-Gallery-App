// components/Spotlight.js
import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

function Spotlight({ slug, imageSource, title, artist }) {
  return (
    <div className="spotlight">
      <h2>{title}</h2>
      <Image src={imageSource} alt={title} width={500} height={500} />
      <p>Artist: {artist}</p>
      <FavoriteButton slug={slug} />
    </div>
  );
}

export default Spotlight;


