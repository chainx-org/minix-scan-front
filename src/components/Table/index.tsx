import { Table } from "antd";
import React from "react";

export interface TableHead {
  title: string;
  dataIndex: string;
  key: string;
}

export interface TableData {}

interface BasicTableProps {
  className?: string;
  columns: TableHead[];
  dataSource: TableData[];
  size: "small" | "middle" | "large" | undefined;
  loading: boolean;
  pagination: object | false;
}

function BasicTable({
  className = "",
  columns,
  dataSource,
  size,
  loading,
  pagination,
}: BasicTableProps): React.ReactElement {
  return (
    <div className={`${className} w-full h-auto px-5 pb-4 bg-white-light  `}>
      <Table
        columns={columns}
        dataSource={dataSource}
        size={size}
        pagination={pagination}
        loading={loading}
      />
    </div>
  );
}

export default BasicTable;
