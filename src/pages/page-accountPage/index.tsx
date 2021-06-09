import React from "react";
import Card from "../../components/Card";
import FlexDiv from "../../components/FlexDiv";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import List from "../../components/List";
import SwitchTabs, { TabInfo } from "../../components/SwitchTabs";
import TopSearchBar from "../../components/TopSearch";
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

  return (
    <FlexDiv>
      <Header />
      <TopSearchBar titleName="账户详情" />
      <div className='px-12 pb-6 bg-gray-light'>
        <List list={list} loading={false} />
        <Card children={<SwitchTabs size="lg" tabList={tabList}/>} className='mt-6' />
      </div>
      <Footer />
    </FlexDiv>
  );
}

export default Account;