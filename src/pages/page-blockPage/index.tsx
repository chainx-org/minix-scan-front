import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import BasicTable, { TableHead } from "../../components/Table";
import Succeed from "../../assets/succeed.svg";
import Fail from "../../assets/fail.svg";
import Card from "../../components/Card";
import FlexDiv from "../../components/FlexDiv";
import Header from "../../components/Header";
import TopSearchBar from "../../components/TopSearch";

function Block(): React.ReactElement {
    const list = [
        {
            title: "区块高度",
            content: (
                <div className="text-black-dark">672812</div>
            ),
        },
        {
            title: "区块哈希",
            content: (
                <div className="text-blue-light">
                    0x6614d177b8532b615a23591a9246f7c2a380c301f65b4e1d7fe1ccff352b63cd
                </div>
            ),
        },
        {
            title: "父块哈希",
            content: <div className="text-blue-light">0x6614d177b8532b615a23591a9246f7c2a380c301f65b4e1d7fe1ccff352b63cd</div>,
        },
        {
            title: "状态根",
            content: (
                <div className="text-black-dark">0x6614d177b8532b615a23591a9246f7c2a380c301f65b4e1d7fe1ccff352b63cd</div>
            ),
        },
        {
            title: "交易根",
            content: (
                <div className="text-black-dark">
                    0x6614d177b8532b615a23591a9246f7c2a380c301f65b4e1d7fe1ccff352b63cd
                </div>
            ),
        },
        {
            title: "出块时间",
            content: <div className="text-black-dark">2018.09.12 16:24:36</div>,
        },
        {
            title: "验证人",
            content: <div className="text-blue-light">0x3c9d7931c7c6cb4d8582071f40cf08b1538927e1</div>,
        }
    ];
    const columns: TableHead[] = [
        {
            title: '区块高度',
            dataIndex: 'blockHeight',
            key: 'blockHeight',
        },
        {
            title: '区块时间',
            dataIndex: 'blockTime',
            key: 'blockTime',
        },
        {
            title: '交易哈希',
            dataIndex: 'transferHash',
            key: 'transferHash',
        },
        {
            title: '发送人',
            key: 'send',
            dataIndex: 'send',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
        },
        {
            title: '结果',
            dataIndex: 'result',
            key: 'result',
        }
    ];
    const dataList = [
        {
            blockHeight: '7834',
            blockTime: '2019.03.01 08:16:45',
            transferHash: '1Bq97r2dW814jmg8J1Bq97r2dW814jmg8J',
            send: '1Bq97r2dW814jmg8J1Bq9…',
            operation: '部署',
            result: '成功',
        },
        {
            blockHeight: '7834',
            blockTime: '2019.03.01 08:16:45',
            transferHash: '1Bq97r2dW814jmg8J1Bq97r2dW814jmg8J',
            send: '1Bq97r2dW814jmg8J1Bq9…',
            operation: '部署',
            result: '失败',
        }
    ]
    const data = dataList.map((item) => ({
        'blockHeight': <div className='text-blue-light'>{item.blockHeight}</div>,
        'blockTime': <div>{item.blockTime}</div>,
        'transferHash': <div className='text-blue-light'>{item.transferHash}</div>,
        'send': <div className='text-blue-light'>{item.send}</div>,
        'operation': <div>{item.operation}</div>,
        'result': <div className="text-black-dark flex items-center justify-end">
                    { item.result === '成功' ? (
                    <>
                        <img src={Succeed} alt="succeed" className="mr-2" />
                        <span>成功</span>
                    </>
                    ) : (
                    <>
                        <img src={Fail} alt="succeed" className="mr-2" />
                        <span>失败</span>
                    </>
                    )}
                </div>,
        }))

    return (
        <FlexDiv>
            <Header />
            <TopSearchBar titleName={`区块高度# +${'67812'}`} />
            <div className='px-12 pb-6 bg-gray-light'>
                <List list={list} loading={false} />
                <Card title='交易列表' className='mt-6' children={ <BasicTable columns={columns} dataSource={data} size='large' loading={false}
                        pagination={{
                            defaultPageSize: 5,
                            hideOnSinglePage: true,
                            showSizeChanger: false
                        }}
                />}/>
            </div>
            <Footer />
        </FlexDiv>
    );
}

export default Block;