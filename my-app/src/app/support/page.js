import React from "react";

export default function support() {
  if (Math.floor(Math.random() * 3) + 1) throw new Error("you are wrong");

  return <div>support</div>;
}
