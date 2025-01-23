import axios from "axios";
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getData() {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }

  useEffect(() => {
    const res = getData();
    setData(res.data);
  }, [url]);
  return {data, loading};
}
