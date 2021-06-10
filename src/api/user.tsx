import axios from "axios";
async function fetcher(url: any) {
  let res: any;
  switch (url) {
    case "/api/users/alluser":
      res = await axios({
        url,
        method: "get",
      });
      break;

    default:
      break;
  }
  return res.data;
}
export default fetcher;
