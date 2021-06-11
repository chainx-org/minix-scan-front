import axios from "axios";
import React, { useEffect, useState } from "react";
import { urlHead } from "../../api/user";
import Card from "../../components/Card";
import FlexDiv from "../../components/FlexDiv";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import List from "../../components/List";
import LoadingStstus from "../../components/Loading";
import NoContent from "../../components/NoContent";
import SwitchTabs, { TabInfo } from "../../components/SwitchTabs";
import TopSearchBar from "../../components/TopSearch";
import { RequestData } from "../../hooks/useSWR";
import Assets from "./Assets";
import Transfer from "./Transfer";

function Account(): React.ReactElement {
  const addressID = window.location.search.slice(1,window.location.search.length)
  const [isMsgShow, setIsMsgShow] = useState(false);
  const [showData, setShowData] = useState([]);
  const [publicAddress, setPublicAddress] = useState({
    address:'',
    publickey:''
  });
  const [initLoading, setInitLoading] = useState(true)
  const res = RequestData("/transfer?address=","5SuGtKvv9VNR6eD5hKCQWpZPZSP4eDmpfAnKxScHqSv5JsFF");
  useEffect(() => {
    if(res && res.items) {
      setShowData(res.items)
    }
  }, [res])
  console.log(res)

  useEffect(() => {
    async function addressMsg() {
      const result = await axios.get(`${urlHead}/address/${addressID}`)
        .then((res) => {
          setInitLoading(false)
          return res.data
        }).catch((err) => { console.log(err) });
        if (result && result.errMsg) {
        setIsMsgShow(true)
      }
      if (result && result.data) {
        const publicAddress = await axios.get(`${urlHead}/publickey/${result.data[0]}`)
          .then((res) => res.data).catch((err) => { console.log(err) });
        setPublicAddress(publicAddress)
      }
    }
    addressMsg()
  }, [])

  const list = [
    {
      title: "账户地址",
      content: (
        <div className="text-blue-light">{publicAddress.address}</div>
      ),
    },
    {
      title: "账户公钥",
      content: (
        <div className="text-blue-light">{publicAddress.publickey}</div>
      ),
    },
    {
      title: "交易数",
      content: <div className="text-black-dark">-</div>,
    },
  ];
  const tabList: TabInfo[] = [
    {
      title: "资产",
      content: <Assets showData={showData}/>,
    },
    {
      title: "转账",
      content: <Transfer showData={showData}/>,
    }
  ];

  return (
    <>
        <FlexDiv>
          {
            isMsgShow ?<><Header /><NoContent title={addressID} /></> :<>
            {/* { initLoading && <LoadingStstus loading={initLoading} />} */}
            <div className='flex flex-col justify-start'>
              <Header />
              <TopSearchBar titleName="账户详情" />
              <div className="px-12 pb-6 bg-gray-light">
                <List list={list} loading={initLoading} />
                <Card
                  children={<SwitchTabs size="lg" tabList={tabList} />}
                  className="mt-6"
                />
              </div></div></>
          }
          <Footer />
        </FlexDiv>
    </>
  );
}

export default Account;