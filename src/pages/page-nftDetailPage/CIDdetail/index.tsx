import React, { useState } from "react";
import moment from "moment";
import Book from "../../../assets/book.svg";
import Detail from "../../../assets/icon_detail.svg";
import avatComing from "../../../assets/avat_coming.svg";
import Star from "../../../assets/icon_star.svg";
import { RequestData } from "../../../hooks/useSWR";
import IndexSearch from "../../page-indexSearch";

function CIDdetail(): React.ReactElement {
  // const res = RequestData("/cids/", "9640837841");
  let CidInfo: Array<[]> = [];
  let CidTime: string = "";
  let currentAddress = "";
  // console.log("res.errMsg", res.errMsg);
  // const [hasContent, setHasContent] = useState(true);
  // if (res.errMsg) {
  //   setHasContent(false);
  // }
  // if (res === "false") {
  //   //没有请求到数据，跳转到那个空的页面吧？
  // } else if (res === "loading") {
  //   //加载中，出弹框
  // } else {
  //   // CidInfo = res.data;
  //   // currentAddress = String(CidInfo[0]);
  //   // currentAddress =
  //   //   currentAddress.substring(0, 20) +
  //   //   "..." +
  //   //   currentAddress.substring(50 - 6);
  //   // CidTime = moment(res.indexer.blockTime).format("YYYY.MM.DD HH:MM:SS");
  // }

  return (
    <div className="p-5">
      <div className="pt-3 px-3 pb-4 font-semibold text-black-darker text-2xl leading-8">
        CID {CidInfo[1]}
      </div>
      <div className="flex flex-col border border-lang rounded-rounded">
        <div className="flex items-center border-b border-lang p-4">
          <img src={Book} alt="introduction" className="mr-1" />
          <span className="text-black-darker font-semibold text-sm">简介</span>
        </div>
        <div className="flex flex-col p-4 bg-gray-dark border-b border-lang">
          <div className="flex items-center pb-2">
            <img src={avatComing} alt="avatComing" className="mr-2" />
            <span className="text-gray-lighdata font-normal text-xs mr-1">
              Created by
            </span>
            <span className="text-blue-light font-normal text-xs">
              Coming App
            </span>
          </div>
          <div className="flex flex-col">
            <div className="text-black-darker font-normal text-xs">
              这里是简介描述两来下标容使要花度六听科始制儿与南们号声则清至规起少存能为先复车。
            </div>
            <br />
            <div className="text-black-darker font-normal text-xs">
              这里是简介描述两来下标容使要花度六。
            </div>
          </div>
        </div>
        <div className="flex items-center border-b border-lang p-4">
          <img src={Detail} alt="details" className="mr-1" />
          <span className="text-black-darker font-semibold text-sm">详情</span>
        </div>
        <div className="flex flex-col p-4 bg-gray-dark border-b border-lang text-black-darker font-normal text-xs">
          <div className="flex justify-between pb-4">
            <div>Contract Address</div>
            <div className="text-blue-light">{currentAddress}</div>
          </div>
          <div className="flex justify-between pb-4">
            <div>Age</div>
            <div>{CidTime}</div>
          </div>
          {/* <div className="flex justify-between pb-4">
            <div>bonus</div>
            <div>1</div>
          </div> */}
          {/* <div className="flex justify-between pb-2">
            <div>Rarity</div>
            <div className="flex">
              <img src={Star} alt="Star" className="mr-1" />
              <img src={Star} alt="Star" className="mr-1" />
              <img src={Star} alt="Star" />
            </div>
          </div> */}
        </div>
      </div>
      {/* {hasContent && <IndexSearch />} */}
    </div>
  );
}

export default CIDdetail;
