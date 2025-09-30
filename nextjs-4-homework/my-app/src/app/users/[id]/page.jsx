"use client";
import { getData } from "@/utils/getData";
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MultiActionAreaCard = dynamic(
  () => import("@/components/MultiActionAreaCard"),
  { ssr: false, loading: () => <p>... loading</p> }
);

function page({ params }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    async function fetching() {
      const data = await getData("https://dummyjson.com/users");
      const item = data.users.find(
        (item) => Number(item.id) === Number(params.id)
      );
      setItem(item);
    }
    fetching();
  }, [item]);
  return (
    <Suspense fallback={<p>loading...</p>}>
      <MultiActionAreaCard
        title={item.firstName + "    " + item.maidenName + "  " + item.lastName}
        description={`age:${item.age},gender:${item.gender}`}
        key={item.id}
        id={item.id}
        image={item.image}
      />
    </Suspense>
  );
}

export default page;
