import axios from "axios";
export const urlHead = "http://192.168.31.173:3213";

const fetcher = (url: string, value: string) =>
  axios.get(urlHead.concat(url).concat(value)).then((res) => res.data);

export default fetcher;
