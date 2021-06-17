import axios from "axios";
import useSWR from "swr";
export const urlHead = "https://miniscan-server.coming.chat";

export const fetcher = (url: string, value: string) =>
  axios.get(urlHead.concat(url).concat(value)).then((res) => res.data);

export function useRequest(url: string, value: string)
{
  const { data, error } = useSWR([url, value], fetcher);
  if (error) return false;
  if (!data) return "loading";
  if (data && data.errMsg) return false;
  if (data && !data.errMsg) return data;
}



