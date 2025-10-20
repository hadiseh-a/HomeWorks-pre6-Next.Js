import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 not found</h1>
      <Link
        href="/admin"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        return home page
      </Link>
    </div>
  );
}
