import Link from 'next/link';
function Navigation() {
  return (
    <nav>
      <Link href="/">
        Spotlight
      </Link>
      {' | '}
      <Link href="/art-pieces">
        Pieces
      </Link>
    </nav>
  );
}

export default Navigation;
