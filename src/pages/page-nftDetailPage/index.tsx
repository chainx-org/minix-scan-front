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
import { useRequest } from "../../hooks/useRequest";
import { shortenString } from "../../helper/FormatHelper";
import axios from "axios";
import { useTranslation } from "react-i18next";

function NFTDetail(): React.ReactElement
{
  const { t } = useTranslation();
  const cid = window.location.search.slice(1, window.location.search.length);
  // const cid = "401046720";
  const res = useRequest("/cids/", cid);

  const [recordData, setRecordData] = useState([]);
  const [isLoadingRecordList, setIsLoadingRecordList] = useState(false);
  async function getTransferRecord()
  {
    try {
      let result = await axios(
        `https://miniscan-server.coming.chat/transfer?address=${res.data[0]}`
      );
      setRecordData(result.data.items);
      setIsLoadingRecordList(true);
      console.log(result, "result");
      if (result.data.items.length >= 0) {
        setIsLoadingRecordList(false);
      }
    } catch (err) {
      // if (err.response.status === 400) {
      //   alert("This CID is not real");
      // }
    }
  }
  useEffect(() =>
  {
    getTransferRecord();
  }, [res]);

  const columns: TableHead[] = [
    {
      title: t("Type"),
      dataIndex: "type",
      key: "type",
    },
    {
      title: t("Timestamp"),
      dataIndex: "time",
      key: "time",
    },
    {
      title: t("Sender"),
      dataIndex: "send",
      key: "send",
    },
    {
      title: t("Recipient"),
      key: "receive",
      dataIndex: "receive",
    },
    {
      title: t("Transaction hash"),
      key: "transferHash",
      dataIndex: "transferHash",
    },
  ];

  const data = recordData.map((item) => ({
    type: <div>{item["name"]}</div>,
    time: (
      <div>
        {moment(item["indexer"]["blockTime"]).format("YYYY.MM.DD HH:MM:SS")}
      </div>
    ),
    send: (
      <div>
        {item["from"] ? shortenString(item["from"], 0, 20, -7, 7) : "-"}
      </div>
    ),
    receive: (
      <div className="text-blue-light">
        {shortenString(item["to"], 0, 20, -7, 7)}
      </div>
    ),
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
          <>
            {!res && <NoContent title={cid} />}
          </>
          <>
            {res && (
              <>
                <TopSearchBar titleName={t("NFT detail")} />
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
              </>
            )}
          </>
        </>
      )}
      <Footer />
    </FlexDiv>
  );
}

export default NFTDetail;
