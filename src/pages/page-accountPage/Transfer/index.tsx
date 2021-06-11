import React, { useEffect } from "react";
import BasicTable, { TableHead } from "../../../components/Table";
import { RequestData } from "../../../hooks/useSWR";

function Transfer(): React.ReactElement {
    const addressID = window.location.search.slice(1,window.location.search.length)
    const res = RequestData("/transfer?address=",addressID);
    const columns: TableHead[] = [
        {
            title: '区块高度',
            dataIndex: 'blockHeight',
            key: 'blockHeight',
        },
        {
            title: '时间',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: '交易哈希',
            dataIndex: 'transferHash',
            key: 'transferHash',
        },
        {
            title: '发送方',
            key: 'send',
            dataIndex: 'send',
        },
        {
            title: '接收方',
            dataIndex: 'receive',
            key: 'receive',
        },
        {
            title: '资产',
            dataIndex: 'assets',
            key: 'assets',
        },
        {
            title: '数量',
            dataIndex: 'amount',
            key: 'amount',
        }
    ];
    const data = res.items?.map((item: any,num: number) => ({
        key: num,
        'blockHeight': <div>{item.indexer.blockHeight}</div>,
        'time': <div>{item.indexer.blockTime}</div>,
        'transferHash': <div className='text-blue-light'>{item.extrinsicHash.substring(0,10)+'...'+item.extrinsicHash.substring(item.extrinsicHash.length-10)}</div>,
        'send': <div>{item.from.substring(0,10)+'...'+item.from.substring(item.from.length-10)}</div>,
        'receive': <div>{item.to.substring(0,10)+'...'+item.from.substring(item.to.length-10)}</div>,
        'assets': <div>CID {item.cid}</div>,
        'amount': <div>{item.indexer.index}</div>,
    }))
    return (
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
    );
}

export default Transfer;