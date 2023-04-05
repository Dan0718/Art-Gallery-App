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

export async function getStaticProps() {
  const res = await fetch("https://example-apis.vercel.app/api/art");
  const artPieces = await res.json();

  return {
    props: {
      artPieces,
    },
    revalidate: 60, // Re-fetch the data at most once every 60 seconds.
  };
}

export default HomePage;
