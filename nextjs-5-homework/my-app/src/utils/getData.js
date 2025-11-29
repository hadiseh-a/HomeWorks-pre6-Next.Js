export const getData = async (url, tagName = "posts") => {
  const res = await fetch(url, {
    next: { tags: [tagName] },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};
