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
import { useTranslation } from "react-i18next";

function Block(): React.ReactElement
{
    const { t } = useTranslation();
    const blockId = window.location.search.slice(1, window.location.search.length);
    const list = [
        {
            title: t('Block height'),
            content: (
                <div className="text-black-dark">672812</div>
            ),
        },
        {
            title: t('Block the hash'),
            content: (
                <div className="text-blue-light">
                    0x6614d177b8532b615a23591a9246f7c2a380c301f65b4e1d7fe1ccff352b63cd
                </div>
            ),
        },
        {
            title: t('The parent block hash'),
            content: <div className="text-blue-light">0x6614d177b8532b615a23591a9246f7c2a380c301f65b4e1d7fe1ccff352b63cd</div>,
        },
        {
            title: t('State the root'),
            content: (
                <div className="text-black-dark">0x6614d177b8532b615a23591a9246f7c2a380c301f65b4e1d7fe1ccff352b63cd</div>
            ),
        },
        {
            title: t('Trading root'),
            content: (
                <div className="text-black-dark">
                    0x6614d177b8532b615a23591a9246f7c2a380c301f65b4e1d7fe1ccff352b63cd
                </div>
            ),
        },
        {
            title: t('A piece of time'),
            content: <div className="text-black-dark">2018.09.12 16:24:36</div>,
        },
        {
            title: t('The verifier'),
            content: <div className="text-blue-light">0x3c9d7931c7c6cb4d8582071f40cf08b1538927e1</div>,
        }
    ];
    const columns: TableHead[] = [
        {
            title: t('Block height'),
            dataIndex: 'blockHeight',
            key: 'blockHeight',
        },
        {
            title: t('Blocks of time'),
            dataIndex: 'blockTime',
            key: 'blockTime',
        },
        {
            title: t('Trading hash'),
            dataIndex: 'transferHash',
            key: 'transferHash',
        },
        {
            title: t('The sender'),
            key: 'send',
            dataIndex: 'send',
        },
        {
            title: t('operation'),
            dataIndex: 'operation',
            key: 'operation',
        },
        {
            title: t('Result'),
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
            {item.result === '成功' ? (
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
            <TopSearchBar titleName={t('Block height')} titleNode="true" titleValue={blockId} />
            <div className='px-12 pb-6 bg-gray-light'>
                <List list={list} loading={false} />
                <Card title={t('Transaction list')} className='mt-6' children={<BasicTable columns={columns} dataSource={data} size='large' loading={false}
                    pagination={{
                        defaultPageSize: 5,
                        hideOnSinglePage: true,
                        showSizeChanger: false
                    }}
                />} />
            </div>
            <Footer />
        </FlexDiv>
    );
}

export default Block;