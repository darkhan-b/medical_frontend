import { Table, TableProps } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

interface DataType {
  key: React.Key;
  fullname: string;
  gender: string;
  role: string;
  phone: string;
  birth: string;
}

const dataSource: DataType[] = [
  {
    key: "1",
    fullname: "Darkhan Baibulat",
    gender: "Male",
    role: "Doctor",
    phone: "+77089402664",
    birth: "28.11.2001",
  },
  {
    key: "2",
    fullname: "Talgat Manglayev",
    gender: "Male",
    role: "Patient",
    phone: "+77715344121",
    birth: "11.11.2000",
  },
];

const columns = [
  {
    title: "Full Name",
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Date of Birth",
    dataIndex: "birth",
    key: "birth",
  },
  {
    title: "Profile",
    key: "profile",
    render: (text: string, record: DataType) => (
      <Link
        to={`/profile/${record.key}`}
        onClick={() =>
          localStorage.setItem("userProfile", JSON.stringify(record))
        }
      >
        View Profile
      </Link>
    ),
  },
];

function Users() {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div>
      <div
        style={{
          paddingTop: 10,
          fontSize: 24,
          fontWeight: 600,
          marginBottom: 30,
        }}
      >
        Admin panel: Users
      </div>
      <Table
        rowSelection={rowSelection}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
}

export default Users;
