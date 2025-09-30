"use client"; // الزامی برای error.js

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>
      <h2>somthing went wrong</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        reset
      </button>
    </div>
  );
}
