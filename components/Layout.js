// components/Layout.js

import Link from 'next/link';
import Head from 'next/head';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <header>
        <nav>
          <ul className='list'>
            <li>
              <Link href="/spotlight">
                  <button className="nav-button">Spotlight</button>
              </Link>
            </li>
            <li>
              <Link href="/">
                  <button className="nav-button">Pieces</button>
              </Link>
            </li>
            <li>
              <Link href="/favorites">
                  <button className="nav-button">Favorites</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
