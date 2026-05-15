import { useEffect, useState } from "react";
import axios from "axios";

// 🔥 GET
export function useGetAppConfigurationQuery() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/app-config")
      .then((res) => setData(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}

// 🔥 UPDATE
export function useUpdateAppConfigurationMutation() {
  const mutate = async (payload: any) => {
    const res = await axios.post(
      "http://localhost:5000/api/app-config",
      payload
    );
    return res.data;
  };

  return [mutate];
}