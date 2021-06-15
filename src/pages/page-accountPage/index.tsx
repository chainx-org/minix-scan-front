import { Spin } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { urlHead } from "../../hooks/useRequest";
import Card from "../../components/Card";
import FlexDiv from "../../components/FlexDiv";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import List from "../../components/List";
import NoContent from "../../components/NoContent";
import SwitchTabs, { TabInfo } from "../../components/SwitchTabs";
import TopSearchBar from "../../components/TopSearch";
import { useRequest } from "../../hooks/useRequest";
import Assets from "./Assets";
import Transfer from "./Transfer";

function Account(): React.ReactElement
{
  const { t } = useTranslation();
  const addressID = window.location.search.slice(1, window.location.search.length)
  const [publicAddress, setPublicAddress] = useState({
    address: '',
    publickey: ''
  });
  const res = useRequest("/address/", addressID);
  useEffect(() =>
  {
    async function addressMsg()
    {
      if (res && res.data) {
        const publicAddress = await axios.get(`${urlHead}/publickey/${res.data[0]}`)
          .then((res) => res.data).catch((err) => { console.log(err) });
        setPublicAddress(publicAddress)
      }
    }
    addressMsg()
  }, [res])
  const list = [
    {
      title: t('Account address'),
      content: (
        <div className="text-blue-light">{res?.data ? res?.data[0] : publicAddress.address}</div>
      ),
    },
    {
      title: t('Account public key'),
      content: (
        <div className="text-blue-light">{publicAddress.publickey ? publicAddress.publickey : '-'}</div>
      ),
    },
    {
      title: t('Number of transactions'),
      content: <div className="text-black-dark">-</div>,
    },
  ];
  const tabList: TabInfo[] = [
    {
      title: t("Assets"),
      content: <Assets />,
    },
    {
      title: t('Transfer'),
      content: <Transfer />,
    }
  ];

  return (
    <FlexDiv>
      <div>
        <Header />
        {
          res === 'loading' ?
            <div className='flex flex-col py-6'> <Spin /></div>
            :
            <>
              {!res ? <div className='flex flex-col'><NoContent title={addressID} /></div> :
                <>
                  <div className='flex flex-col justify-start'>
                    <TopSearchBar titleName={t('Account detail')} />
                    <div className="px-12 pb-6 bg-gray-light">
                      <List list={list} loading={res === 'loading'} />
                      <Card
                        children={<SwitchTabs size="lg" tabList={tabList} />}
                        className="mt-6"
                      />
                    </div>
                  </div>
                </>
              }
            </>
        }
      </div>
      <Footer />
    </FlexDiv>
  );
}

export default Account;