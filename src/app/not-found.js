import Link from "next/link";
import "./styles/not-found.css";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <p className="error-code">404</p>

        <h1>Page Not Found</h1>

        <p className="error-text">
          The page you are looking for doesn&apos;t exist or may have been moved.
        </p>

        <Link href="/" className="back-home-btn">
          Back to Home
        </Link>
      </div>
    </main>
  );
}