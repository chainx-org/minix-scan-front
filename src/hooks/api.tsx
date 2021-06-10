import React, { useEffect } from "react";
import useSWR from "swr";
import fetcher from "../api/user";

export const Child = () => {
  const { data } = useSWR("/api/users/alluser", fetcher, { suspense: true });
  useEffect(() => {}, []);
  console.log(data);
  //   const renderItem = () => {
  //     return data.data.map((item: any, index: any) => {
  //       return <li key={item.key}>{item.name}</li>;
  //     });
  //   };
  const a = <div>123</div>;
  //   return <ul>{renderItem()}</ul>;
  return a;
};
