// components/Spotlight.js
import Image from "next/image";

function Spotlight({ imageSource, title, artist }) {
  return (
    <div className="spotlight">
      <h2>{title}</h2>
      <Image src={imageSource} alt={title} width={500} height={500} />
      <p>Artist: {artist}</p>
    </div>
  );
}

export default Spotlight;


