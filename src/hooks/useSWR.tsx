import useSWR from "swr";
import fetcher from "../api/user";
export function RequestData(url: string, value: string) {
  const { data, error } = useSWR([url, value], fetcher);
  if (error) return "false";
  if (!data) return "loading";
  if (data) return data;
}
