import { useEffect, useState } from "react";

export function useData(url, params) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    let ignore = false;
    const load = async () => {
      if (!ignore) {
        setLoading(true);
      }
      try {
        const resMeta = await fetch(url, params);
        if (!resMeta.ok) {
          throw {
            status: resMeta.status,
            statusText: resMeta.statusText,
          };
        }
        const res = await resMeta.json();
        if (!ignore) {
          setData(res);
        }
      } catch (e) {
        console.error(`Error loading ${url}: `, e);
        if (!ignore) {
          setError(e);
        }
      }
      if (!ignore) {
        setLoading(false);
      }
    };
    load();
    return () => {
      ignore = true;
    };
  }, []);

  return {
    loading,
    data,
    error,
  };
}
