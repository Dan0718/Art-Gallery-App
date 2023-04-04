// pages/art-pieces/[slug].js
import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ artPiece }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details">
      <button className="back-btn" onClick={() => router.back()}>Go back</button>
      <ArtPieceDetails
        image={artPiece.imageSource}
        title={artPiece.name}
        artist={artPiece.artist}
        year={artPiece.year}
        genre={artPiece.genre}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://example-apis.vercel.app/api/art");
  const artPieces = await res.json();

  const paths = artPieces.map((artPiece) => ({
    params: { slug: artPiece.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://example-apis.vercel.app/api/art");
  const artPieces = await res.json();

  const artPiece = artPieces.find((artPiece) => artPiece.slug === params.slug);

  if (!artPiece) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      artPiece,
    },
    revalidate: 60,
  };
}
