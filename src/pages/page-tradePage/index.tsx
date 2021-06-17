import React from "react";
import moment from "moment";
import Footer from "../../components/Footer";
import List from "../../components/List";
import Succeed from "../../assets/succeed.svg";
import Fail from "../../assets/fail.svg";
import TopSearchBar from "../../components/TopSearch";
import Header from "../../components/Header";
import FlexDiv from "../../components/FlexDiv";
import { useTranslation } from "react-i18next";
import { useRequest } from "../../hooks/useRequest";
import NoContent from "../../components/NoContent";
import { Spin } from "antd";
function Trade(): React.ReactElement
{
  const { t } = useTranslation();
  const tradeId = window.location.search.slice(1, window.location.search.length);
  const res = useRequest('/extrinsics/', tradeId)
  console.log(res['isSuccess'], 'res')
  const list = [
    {
      title: t('Block height'),
      content: <div className="text-blue-light">{res['indexer'] ? res['indexer']['blockHeight'] : '-'}</div>,
    },
    {
      title: t('A piece of time'),
      content: <div className="text-black-dark">{res['indexer'] ? moment(res['indexer']['blockTime']).format("YYYY.MM.DD HH:MM:SS") : '-'}</div>,
    },
    {
      title: t('Serial number'),
      content: <div className="text-black-dark">{res['indexer'] ? res['indexer']['index'] : '-'}</div>,
    },
    {
      title: t('Transaction hash'),
      content: (
        <div className="text-blue-light">
          {res['hash'] ? res['hash'] : '-'}
        </div>
      ),
    },
    {
      title: t('Sender'),
      content: (
        <div className="text-blue-light">

          {res['signer'] ? res['signer'] : '-'}
        </div>
      ),
    },
    // {
    //   title: t('Module'),
    //   content: (
    //     <div className="text-black-darker text-center py-1.5 border border-vote rounded-card w-18">
    //       投票选举
    //     </div>
    //   ),
    // },
    // {
    //   title: t('Parameter'),
    //   content: (
    //     <div className="text-black-dark break-all">
    //       0x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6927e10x3c9dcb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e1
    //     </div>
    //   ),
    // },
    // {
    //   title: t('Call'),
    //   content: (
    //     <div className="text-black-darker text-center py-1.5 border border-pledge rounded-card w-12">
    //       抵押
    //     </div>
    //   ),
    // },
    {
      title: t('Result'),
      content: (
        <div className="text-black-dark flex items-center">
          {res['isSuccess'] ? res['isSuccess'] : false ? (
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
        </div>
      ),
    },
    // {
    //   title: t('Signature'),
    //   content: (
    //     <div className="text-black-dark break-all">
    //       0x6614d177b8532b615a23591a9246f7c2a380c301f65b4e1d7fe1ccff352b63cd
    //     </div>
    //   ),
    // },
    {
      title: t('Version'),
      content: <div className="text-black-dark"> {res['version'] ? res['version'] : '-'}</div>,
    },
    {
      title: t('data'),
      content: (
        <div className="text-black-dark break-all">
          {res['data'] ? res['data'] : '-'}
        </div>
      ),
    },
  ];
  return (
    <FlexDiv>
      <Header />
      <>
        {res == "loading" ? (
          <Spin />
        ) : (
          <>
            {!res && <NoContent title={tradeId} />}
            {res &&
              <>
                < TopSearchBar titleName={t('Transaction detail')} />
                <div className="px-12 pb-40 bg-gray-light ">
                  <List list={list} loading={false} />
                </div>
              </>}
          </>
        )}
      </>
      < Footer />
    </FlexDiv>
  );
}

export default Trade;
