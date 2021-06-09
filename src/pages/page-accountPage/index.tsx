import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import SwitchTabs, { TabInfo } from "../../components/SwitchTabs";
import Assets from "./Assets";
import Transfer from "./Transfer";

function Account(): React.ReactElement {
  const list = [
    {
      title: "账户地址",
      content: (
        <div className="text-blue-light">f0919523d2b618195e99ADHSLCAHSLCL</div>
      ),
    },
    {
      title: "账户公钥",
      content: (
        <div className="text-blue-light">
          f0919523d2b618195e99ADHSLCAHSLCLf0919523d2b618195e99ADHSLCAHSLCL
        </div>
      ),
    },
    {
      title: "交易数",
      content: <div className="text-black-dark">237</div>,
    },
  ];
  const tabList: TabInfo[] = [
    {
      title: "资产",
      content: <Assets />,
    },
    {
      title: "转账",
      content: <Transfer />,
    },
  ];

  const setList = (key: string) => {
    console.log(key, "key");
  };
  return (
    <>
      <List list={list} />
      <SwitchTabs
        onTabClick={(key: string) => setList(key)}
        size="lg"
        tabList={tabList}
      />
      <Footer />
    </>
  );
}

export default Account;