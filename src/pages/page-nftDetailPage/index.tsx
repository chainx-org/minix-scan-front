import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import FlexDiv from "../../components/FlexDiv";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BasicTable, { TableHead } from "../../components/Table";
import TopSearchBar from "../../components/TopSearch";
import CIDdetail from "./CIDdetail";
import { RequestData } from "../../hooks/useSWR";
import IndexSearch from "../page-indexSearch";
import useSWR from "swr";
import fetcher from "../../api/user";
import axios from "axios";

function NFTDetail(): React.ReactElement {
  const res = RequestData("/cids/", "9640837841");
  const [hasContent, setHasContent] = useState(false);
  useEffect(() => {
    if (res.data && res.data.errMsg) {
      // debugger;
      setHasContent(true);
    }
    console.log("data.data.errMsg", res);
  }, [res]);
  // async function a() {
  //   const ww = await axios
  //     .get("http://192.168.31.173:3213/cids/9640837841")
  //     .then((res) => {
  //       if (res.data.errMsg) {
  //         setHasContent(true);
  //         return res.data.errMsg;
  //       } else {
  //         console.log("111");
  //         return "11";
  //       }
  //     })
  //     .catch((res) => {
  //       console.log("res", res);
  //     });
  //   console.log(ww, "ww");
  // }
  // useEffect(() => {
  //   a();
  // }, []);

  const columns: TableHead[] = [
    {
      title: "类型",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "时间戳",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "发送方",
      dataIndex: "send",
      key: "send",
    },
    {
      title: "接收方",
      key: "receive",
      dataIndex: "receive",
    },
    {
      title: "交易哈希",
      key: "transferHash",
      dataIndex: "transferHash",
    },
  ];
  const dataList = [
    {
      type: "Created",
      time: "2019.03.01 08:16:45",
      send: "1Bq97r2dW814jmg…8J1Bq9",
      receive: "1Bq97r2dW814jmg…8J1Bq9",
      transferHash: "1Bq97r2dW814jmg8J1Bq97r2dW814jmg8J",
    },
    {
      type: "Created",
      time: "2019.03.01 08:16:45",
      send: "1Bq97r2dW814jmg…8J1Bq9",
      receive: "1Bq97r2dW814jmg…8J1Bq9",
      transferHash: "1Bq97r2dW814jmg8J1Bq97r2dW814jmg8J",
    },
  ];
  const data1 = dataList.map((item) => ({
    type: <div>{item.type}</div>,
    time: <div>{item.time}</div>,
    send: <div>{item.send}</div>,
    receive: <div className="text-blue-light">{item.receive}</div>,
    transferHash: <div className="text-blue-light">{item.transferHash}</div>,
  }));

  return (
    <>
      {!hasContent ? (
        <IndexSearch />
        // <div>1111</div>
      ) : (
        <FlexDiv>
          <Header />
          <TopSearchBar titleName="NFT详情" />
          <div className="px-12 pb-6 bg-gray-light">
            <div className="grid grid-cols-card mb-6">
              <Card className="mr-6" />
              <Card children={<CIDdetail />} />
            </div>
            <Card
              title="交易记录"
              children={
                <BasicTable
                  columns={columns}
                  dataSource={data1}
                  size="large"
                  loading={true}
                  pagination={{
                    defaultPageSize: 5,
                    hideOnSinglePage: true,
                    showSizeChanger: false,
                  }}
                />
              }
            />
          </div>
          <Footer />
        </FlexDiv>
      )}
    </>
  );
}

export default NFTDetail;
