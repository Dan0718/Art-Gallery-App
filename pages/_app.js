import GlobalStyle from "../styles";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";

function App({ Component, pageProps }) {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    fetch("https://example-apis.vercel.app/api/art")
      .then((res) => res.json())
      .then((data) => {
        setArtPieces(data);
        console.log(data);
      });
  }, []);
  
return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} artPieces={artPieces} />
      </Layout>
    </>
  );
}

export default App;
