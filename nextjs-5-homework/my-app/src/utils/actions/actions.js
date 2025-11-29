"use server";

import { revalidateTag } from "next/cache";

export const createItem = async (url, name, data) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidateTag(name);
  return { msg: "done" };
};

export const updateItem = async (url, name, data) => {
  await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidateTag(name);
  return { msg: "done" };
};

export async function deleteItem(url, tagName) {
  try {
    const res = await fetch(url, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete item");

    revalidateTag(tagName);
    return { msg: "done" };
  } catch (err) {
    console.error(err);
    return { msg: "error", error: err.message };
  }
}
