import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Spotlight</a>
      </Link>
      {" | "}
      <Link href="/art-pieces">
        <a>Pieces</a>
      </Link>
      {" | "}
      <Link href="/favorites">
        <a>Favorites</a>
      </Link>
    </nav>
  );
}

export default Navigation;
