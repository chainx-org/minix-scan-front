import React from "react";
import Footer from "../../components/Footer";
import List from "../../components/List";
import Succeed from "../../assets/succeed.svg";
import Fail from "../../assets/fail.svg";
import TopSearchBar from "../../components/TopSearch";
import Header from "../../components/Header";
import FlexDiv from "../../components/FlexDiv";
import { useTranslation } from "react-i18next";
function Trade(): React.ReactElement
{
  const { t } = useTranslation();
  const list = [
    {
      title: t('Block height'),
      content: <div className="text-blue-light">672812</div>,
    },
    {
      title: t('A piece of time'),
      content: <div className="text-black-dark">2018.09.12 16:24:36</div>,
    },
    {
      title: t('Serial number'),
      content: <div className="text-black-dark">345</div>,
    },
    {
      title: t('Transaction hash'),
      content: (
        <div className="text-blue-light">
          0x6614d177b8532b615a23591a9246f7c2a380c301f6
        </div>
      ),
    },
    {
      title: t('Sender'),
      content: (
        <div className="text-blue-light">
          0x6614d177b8532b615a23591a9246f7c2a380c301f
        </div>
      ),
    },
    {
      title: t('Module'),
      content: (
        <div className="text-black-darker text-center py-1.5 border border-vote rounded-card w-18">
          投票选举
        </div>
      ),
    },
    {
      title: t('Parameter'),
      content: (
        <div className="text-black-dark break-all">
          0x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6927e10x3c9dcb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e1
        </div>
      ),
    },
    {
      title: t('Call'),
      content: (
        <div className="text-black-darker text-center py-1.5 border border-pledge rounded-card w-12">
          抵押
        </div>
      ),
    },
    {
      title: t('Stake'),
      content: (
        <div className="text-black-dark flex items-center">
          {true ? (
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
    {
      title: t('Signature'),
      content: (
        <div className="text-black-dark break-all">
          0x6614d177b8532b615a23591a9246f7c2a380c301f65b4e1d7fe1ccff352b63cd
        </div>
      ),
    },
    {
      title: t('Version'),
      content: <div className="text-black-dark">123</div>,
    },
    {
      title:t('data'),
      content: (
        <div className="text-black-dark break-all">
          0x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e10x3c9d7931c7c6cb4d8582071f40cf08b1538927e1
        </div>
      ),
    },
  ];
  return (
    <FlexDiv>
      <Header />
      <TopSearchBar titleName={ t('Transaction detail')} />
      <div className="px-12 pb-6 bg-gray-light">
        <List list={list} loading={true} />
      </div>
      <Footer />
    </FlexDiv>
  );
}

export default Trade;
