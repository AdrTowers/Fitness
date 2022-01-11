import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <ul className="footer-home">
        <Link href="/">
          <a>Home</a>
        </Link>
      </ul>
      <ul className="footer-text">
        <p>Lorem ipsum</p>
      </ul>
      <ul className="footer-links">
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </ul>
    </div>
  );
}
