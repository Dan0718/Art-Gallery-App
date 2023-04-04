// components/ArtPiecePreview.js
import Image from 'next/image';
import Link from 'next/link';

function ArtPiecePreview({ slug, imageSource, title, artist }) {
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
    
          <Image src={imageSource} alt={title} width={500} height={500} />
          <h3>{title}</h3>
          <p>{artist}</p>
        
      </Link>
    </div>
  );
}

export default ArtPiecePreview;

