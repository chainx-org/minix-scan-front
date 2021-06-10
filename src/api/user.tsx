import axios from "axios";
const urlHead = "http://192.168.31.173:3213";
async function fetcher(url: string, value: string) {
  let res: any;
  switch (url) {
    case "/cids/":
      res = await axios({
        url: urlHead.concat(url).concat(value),
        method: "get",
      });
      break;
    case "/address/":
      res = await axios({
        url: urlHead.concat(url).concat(value),
        method: "get",
      });
      break;
    default:
      break;
  }
  return res.data;
}
export default fetcher;
