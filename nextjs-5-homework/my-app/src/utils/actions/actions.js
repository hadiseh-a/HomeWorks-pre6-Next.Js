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
  revalidateTag(`${name}`);
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
  revalidateTag(`${name}`);
  return { msg: "done" };
};

export const deleteItem = async (url, name) => {
  await fetch(url, { method: "DELETE" });
  revalidateTag(`${name}`);
  return { msg: "done" };
};
