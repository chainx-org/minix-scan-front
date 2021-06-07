import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import BasicTable, { TableHead } from "../../components/Table";

function Account(): React.ReactElement {
  const list = [
    {
      title: '账户地址',
      content: <div className='text-blue-light'>f0919523d2b618195e99ADHSLCAHSLCL</div>,
    },
    {
      title: '账户公钥',
      content: <div className='text-blue-light'>f0919523d2b618195e99ADHSLCAHSLCLf0919523d2b618195e99ADHSLCAHSLCL</div>,
    },
    {
      title: '交易数',
      content: <div className='text-black-dark'>237</div>,
    }
  ]
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
  const dataList = [
    {
      icon: '',
      assets: 'CID666666',
      assetType: 'NFT',
      amount: '1',
      lastTrade: '0x1234567890abc',
    }
  ]
  const data = dataList.map((item)=>({
    'assets': <div></div>,
    'assetType': <div></div>,
    'amount': <div></div>,
    'lastTrade': <div></div>
  }))
  

  return (
    <div className=''>
      <List list={list} />
      <BasicTable title='MiniX 资产' columns={columns} dataSource={data} size='large' pagination={false} />
      <Footer />
    </div>
  );
}

export default Account;