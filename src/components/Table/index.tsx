import { Table } from "antd";
import React from "react";

export interface TableHead {
    title: string;
    dataIndex: string;
    key: string;
}
  
export interface TableData{}

interface BasicTableProps {
    className?: string;
    title: string;
    columns: TableHead[];
    dataSource: TableData[];
    size: 'small' | 'middle' | 'large' | undefined;
    loading?: boolean;
    pagination: boolean;
}

function BasicTable({className = '', title, columns, dataSource, size, loading }:BasicTableProps): React.ReactElement {

  return (
      <div className={`${className} w-full h-175 px-5 pb-4 bg-white-light shadow-card border border-card rounded-card`}>
        <div>{title}</div>
        <Table columns={columns} dataSource={dataSource} size={size} loading={loading} pagination={false} />
      </div>
  );
}

export default BasicTable;
