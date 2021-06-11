import React, { useEffect, useState } from "react";
import moment from "moment";
import { Spin } from "antd";
import Card from "../../components/Card";
import FlexDiv from "../../components/FlexDiv";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NoContent from "../../components/NoContent";
import BasicTable, { TableHead } from "../../components/Table";
import TopSearchBar from "../../components/TopSearch";
import CIDdetail from "./CIDdetail";
import { RequestData } from "../../hooks/useSWR";
import axios from "axios";

function NFTDetail(): React.ReactElement {
  const cid = window.location.search.slice(1, window.location.search.length);
  // const cid = "401046720";
  const res = RequestData("/cids/", cid);
  const [recordData, setRecordData] = useState([]);
  const [isLoadingRecordList, setIsLoadingRecordList] = useState(false);
  async function b() {
    try {
      let result = await axios(
        `http://192.168.31.173:3213/transfer?address=${res.data[0]}`
      );
      setRecordData(result.data.items);
      setIsLoadingRecordList(true);
      if (result.data.items.length >= 0) {
        setIsLoadingRecordList(false);
      }
    } catch (err) {
      // if (err.response.status === 400) {
      //   alert("This CID is not real");
      // }
    }
  }
  // useE

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

  const data = recordData.map((item) => ({
    type: <div>Created</div>,
    time: (
      <div>
        {moment(item["indexer"]["blockTime"]).format("YYYY.MM.DD HH:MM:SS")}
      </div>
    ),
    send: <div>{item["from"]}</div>,
    receive: <div className="text-blue-light">{item["to"]}</div>,
    transferHash: (
      <div className="text-blue-light">{item["extrinsicHash"]}</div>
    ),
  }));

  return (
    <FlexDiv>
      <Header />
      {res === "loading" ? (
        <Spin />
      ) : (
        <>
          <>{res && res.errMsg && <NoContent title={cid} />}</>
          <>
            {res && !res.errMsg && (
              <>
                <TopSearchBar titleName="NFT详情" />
                <div className="px-12 pb-6 bg-gray-light">
                  <div className="grid grid-cols-card mb-6">
                    <Card className="mr-6">
                      <iframe
                        src={`https://nft.coming.chat/` + cid}
                        frameBorder="0"
                        scrolling="no"
                        width="100%"
                        height="550px"
                        id="childFrame"
                      />
                    </Card>
                    <Card children={<CIDdetail dataMsg={res} />} />
                  </div>
                  <Card
                    title="交易记录"
                    children={
                      <BasicTable
                        columns={columns}
                        dataSource={data}
                        size="large"
                        loading={isLoadingRecordList}
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
              </>
            )}
          </>
        </>
      )}
    </FlexDiv>
  );
}

export default NFTDetail;
