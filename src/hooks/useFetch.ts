import { useEffect, useState } from "react";

const useFetch = (
  //!!!!!!!!!!!!!!!!REWRITE RETURN VALUES
  url: string
): { isLoading: boolean; error: any; data: any } => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        return data;
      })
      .catch((error) => setError(error));
  }, [url]);

  return { isLoading, error, data };
};

export default useFetch;
