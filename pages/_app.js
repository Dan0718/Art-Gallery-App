// pages/_app.js
import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { ArtPiecesContextProvider } from "../context/ArtPiecesContext";

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ArtPiecesContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ArtPiecesContextProvider>
    </>
  );
}

export default App;
