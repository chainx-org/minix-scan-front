import React from "react";
import BasicTable, { TableHead } from "../../../components/Table";

function Transfer(): React.ReactElement {
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
    const dataList = [
        {
            blockHeight: '7834',
            time: '2019.03.01 08:16:45',
            transferHash: '1Bq97r2dW814jmg8J1Bq97r2dW814jmg8J',
            send: '1Bq97r2dW814jmg8J1Bq9…',
            receive: '1Bq97r2dW814jmg8J1Bq9…',
            assets: 'CID666666',
            amount: '1',
        }
    ]
    const data = dataList.map((item) => ({
        'blockHeight': <div>{item.blockHeight}</div>,
        'time': <div>{item.time}</div>,
        'transferHash': <div className='text-blue-light'>{item.transferHash}</div>,
        'send': <div>{item.send}</div>,
        'receive': <div>{item.receive}</div>,
        'assets': <div>{item.assets}</div>,
        'amount': <div>{item.amount}</div>,
    }))

    return (
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
    );
}

export default Transfer;