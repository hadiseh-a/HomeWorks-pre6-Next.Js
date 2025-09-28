import MultiActionAreaCard from "@/components/MultiActionAreaCard";
import { getData } from "@/utils/getData";
import React, { Suspense } from "react";

async function page({ params }) {
  const data = await getData("https://dummyjson.com/users");
  const item = data.users.find((item) => Number(item.id) === Number(params.id));
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
