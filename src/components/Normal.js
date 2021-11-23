import { useState, useEffect } from "react";
import axios from "axios";

function Normal() {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const data = await axios.get("http://localhost:4000/superHeroes");
      setloading(false);
      console.log(data.data);
      setData(data.data);
    } catch (e) {
      setError(e);
    }
  }, []);

  if (error) {
    return <h1>Sorry ...{JSON.stringify(error)}</h1>;
  }
  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div>
      Normal
      {data?.map((d) => {
        return <h2>{d.name}</h2>;
      })}
    </div>
  );
}

export default Normal;
