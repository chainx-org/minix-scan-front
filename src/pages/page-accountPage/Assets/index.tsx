import React from "react";
import BasicTable, { TableHead } from "../../../components/Table";

function Assets(): React.ReactElement {

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
  // const dataList = [
  //   {
  //     icon: '',
  //     assets: 'CID666666',
  //     assetType: 'NFT',
  //     amount: '1',
  //     lastTrade: '0x1234567890abc',
  //   },
  // ]
  let dataList: any[] = []
  const test = ()=>{
    let num = 300;
    for(let i = 0;i<300;i++){
      dataList.push({
        icon: '',
        assets: 'CID666666',
        assetType: 'NFT',
        amount: '1',
        lastTrade: '0x1234567890abc',
      },)
    }
  }
  test()
  const data = dataList.map((item)=>({
    'assets': <div>{item.assets}</div>,
    'assetType': <div>{item.assetType}</div>,
    'amount': <div>{item.amount}</div>,
    'lastTrade': <div>{item.lastTrade}</div>
  }))

  return (
    <div className=''>
      <BasicTable 
        columns={columns} 
        dataSource={data} 
        size='large' 
        loading={false}
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