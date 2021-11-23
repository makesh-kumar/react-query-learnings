import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
function ReactQuery() {
  const data = useQuery(
    "super-hero",
    () => {
      return axios.get("http://localhost:4000/superHeroes");
    },
    {
      cacheTime: 0,
    }
  );

  console.log("RE_RENDERING");
  const dataHero = useQuery(
    ["super-hero", data?.data?.data[0].id],
    () => {
      return axios.get(
        "http://localhost:4000/superHeroes/" + data?.data?.data[0].id
      );
    },
    {
      enabled: !!data?.data?.data[0].id,
    }
  );

  if (data.isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (data.isError) {
    return <h1>Hey Error {JSON.stringify(data.error)}</h1>;
  }
  return (
    <div>
      ReactQuery
      {data?.data?.data.map((d) => {
        return <h2>{d.name}</h2>;
      })}
    </div>
  );
}

export default ReactQuery;
