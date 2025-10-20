export const getData = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("something went wrong");
  }

  const data = await res.json();
  
  return data;
};
