import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import Succeed from "../../assets/succeed.svg";
import Fail from "../../assets/fail.svg";
import TopSearchBar from "../../components/TopSearch";
import Header from "../../components/Header";

function Trade(): React.ReactElement {
  const list = [
    {
      title: "区块高度",
      content: <div className="text-blue-light">672812</div>,
    },
    {
      title: "出块时间",
      content: <div className="text-black-dark">2018.09.12 16:24:36</div>,
    },
    {
      title: "序号",
      content: <div className="text-black-dark">345</div>,
    },
    {
      title: "交易哈希",
      content: (
        <div className="text-blue-light">
          0x6614d177b8532b615a23591a9246f7c2a380c301f6
        </div>
      ),
    },
    {
      title: "发送人",
      content: (
        <div className="text-blue-light">
          0x6614d177b8532b615a23591a9246f7c2a380c301f
        </div>
      ),
    },
    {
      title: "模块",
      content: (
        <div className="text-black-darker text-center py-1.5 border border-vote rounded-card w-18">
          投票选举
        </div>
      ),
    },
    {
      title: "参数",
      content: (
        <div className="text-black-dark break-all">
          0x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6927e10x3c9dcb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e1
        </div>
      ),
    },
    {
      title: "调用",
      content: (
        <div className="text-black-darker text-center py-1.5 border border-pledge rounded-card w-12">
          抵押
        </div>
      ),
    },
    {
      title: "结果",
      content: (
        <div className="text-black-dark flex items-center">
          {true ? (
            <>
              <img src={Succeed} alt="succeed" className="mr-2" />
              <span>成功</span>
            </>
          ) : (
            <>
              <img src={Fail} alt="succeed" className="mr-2" />
              <span>失败</span>
            </>
          )}
        </div>
      ),
    },
    {
      title: "签名",
      content: (
        <div className="text-black-dark break-all">
          0x6614d177b8532b615a23591a9246f7c2a380c301f65b4e1d7fe1ccff352b63cd
        </div>
      ),
    },
    {
      title: "版本",
      content: <div className="text-black-dark">123</div>,
    },
    {
      title: "data",
      content: (
        <div className="text-black-dark break-all">
          0x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e1
        </div>
      ),
    },
  ];
  return (
    <>
      <Header />
      <TopSearchBar titleName="交易详情" />
      <List list={list} />
      <Footer />
    </>
  );
}

export default Trade;
