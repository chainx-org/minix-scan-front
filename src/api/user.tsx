import axios from "axios";
export const urlHead = "https://miniscan-server.coming.chat";

const fetcher = (url: string, value: string) =>
  axios.get(urlHead.concat(url).concat(value)).then((res) => res.data);

export default fetcher;
