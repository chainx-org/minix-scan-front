import React from "react";
import { useTranslation } from "react-i18next";
import BasicTable, { TableHead } from "../../../components/Table";
import { RequestData } from "../../../hooks/useSWR";

function Assets(): React.ReactElement {
  const { t } = useTranslation();
  const addressID = window.location.search.slice(1,window.location.search.length)
  const res = RequestData("/transfer?address=",addressID);
  console.log(res)
  const columns: TableHead[] = [
    {
      title: t('Assets'),
      dataIndex: 'assets',
      key: 'assets',
    },
    {
      title: t('Asset category'),
      dataIndex: 'assetType',
      key: 'assetType',
    },
    {
      title: t('Quantity'),
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: t('Recent transactions'),
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