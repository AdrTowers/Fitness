import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/testimonials">
          <a>Testimonials</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </ul>
    </div>
  );
}
