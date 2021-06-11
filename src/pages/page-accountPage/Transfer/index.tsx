import React, { useEffect } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import BasicTable, { TableHead } from "../../../components/Table";
import { RequestData } from "../../../hooks/useSWR";

function Transfer(): React.ReactElement {
  const { t } = useTranslation();
  const addressID = window.location.search.slice(
    1,
    window.location.search.length
  );
  const res = RequestData("/transfer?address=", addressID);
  const columns: TableHead[] = [
    {
      title: t("Block height"),
      dataIndex: "blockHeight",
      key: "blockHeight",
    },
    {
      title: t("Time"),
      dataIndex: "time",
      key: "time",
    },
    {
      title: t("Transaction hash"),
      dataIndex: "transferHash",
      key: "transferHash",
    },
    {
      title: t("Sender"),
      key: "send",
      dataIndex: "send",
    },
    {
      title: t("Recipient"),
      dataIndex: "receive",
      key: "receive",
    },
    {
      title: t("Assets"),
      dataIndex: "assets",
      key: "assets",
    },
    {
      title: t("Quantity"),
      dataIndex: "amount",
      key: "amount",
    },
  ];
  const data = res.items?.map((item: any, num: number) => ({
    key: num,
    blockHeight: <div>{item.indexer.blockHeight}</div>,
    time: (
      <div>{moment(item.indexer.blockTime).format("YYYY.MM.DD HH:MM:SS")}</div>
    ),
    transferHash: (
      <div className="text-blue-light">
        {item.extrinsicHash.substring(0, 10) +
          "..." +
          item.extrinsicHash.substring(item.extrinsicHash.length - 10)}
      </div>
    ),
    send: (
      <div>
        {item.from.substring(0, 10) +
          "..." +
          item.from.substring(item.from.length - 10)}
      </div>
    ),
    receive: (
      <div>
        {item.to.substring(0, 10) +
          "..." +
          item.from.substring(item.to.length - 10)}
      </div>
    ),
    assets: <div>CID {item.cid}</div>,
    amount: <div>{item.indexer.index}</div>,
  }));
  return (
    <BasicTable
      columns={columns}
      dataSource={data}
      size="large"
      loading={res === "loading"}
      pagination={{
        defaultPageSize: 5,
        hideOnSinglePage: true,
        showSizeChanger: false,
      }}
    />
  );
}

export default Transfer;
