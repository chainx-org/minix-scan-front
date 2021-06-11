import React from "react";
import BasicTable, { TableHead } from "../../../components/Table";
import { RequestData } from "../../../hooks/useSWR";

function Assets(): React.ReactElement {
  const addressID = window.location.search.slice(1,window.location.search.length)
  const res = RequestData("/transfer?address=",addressID);
  console.log(res)
  const columns: TableHead[] = [
    {
      title: '资产',
      dataIndex: 'assets',
      key: 'assets',
    },
    {
      title: '资产类别',
      dataIndex: 'assetType',
      key: 'assetType',
    },
    {
      title: '数量',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '最近交易',
      key: 'lastTrade',
      dataIndex: 'lastTrade',
    }
  ];

  const data = res.items?.map((item:any,num: number)=>({
     key: num,
    'assets': <div>CID {item.cid}</div>,
    'assetType': <div>-</div>,
    'amount': <div>-</div>,
    'lastTrade': <div className='text-blue-light'>{item.extrinsicHash.substring(0,20)+'...'+item.extrinsicHash.substring(item.extrinsicHash.length-20)}</div>
  }))

  return (
    <div className=''>
      <BasicTable 
        columns={columns} 
        dataSource={data} 
        size='large' 
        loading={res === 'loading'}
        pagination={{
          defaultPageSize: 5,
          hideOnSinglePage: true,
          showSizeChanger: false
        }}
      />
    </div>
  );
}

export default Assets;