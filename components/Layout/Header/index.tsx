import Image from "next/image";
import Link from "next/link";
import { DownOutlined, StrikethroughOutlined, BellOutlined, QuestionCircleOutlined, CreditCardOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space } from 'antd';
import Search from "@app/components/Search";
import React from "react";
import User from "../User";
import Notification from "@app/components/Notification";


const items: MenuProps['items'] = [
  {
    label: <div className="flex items-center gap-2">
      <div className="h-8 aspect-square bg-red-500 text-white flex justify-center items-center">
        TK
      </div>
      <p className="text-sm">Tên không gian làm việc</p>
    </div>,
    key: '0'
  },
  {
    type: 'divider'
  },
  {
    label: <button className="border-blue-500 border-2 w-full rounded-md  text-blue-500">+ Tạo không gian làm việc</button>,
    key: '1'
  }
];

export default function HeaderGlobal(): JSX.Element {
  return (
    <div className="flex justify-between items-center h-full">
      <div className="flex items-center gap-3">
        <Link href='/'>
          <Image src='/logo512.png'
            width={35}
            height={35}
            alt="logo mys" />
        </Link>
        <Dropdown trigger={['click']} menu={{ items }}>
          <div className="flex items-center gap-2 text-xs">
            <p>Không gian làm việc</p>
            <DownOutlined />
          </div>
        </Dropdown>
        <Button size="small" className=" bg-blue-500" type="primary">Tạo nhanh</Button>
      </div>
      <div className="flex items-center">
        <Search />
        <div className="flex gap-2 items-center">
          <Link href={'/'}><StrikethroughOutlined /></Link>
          <Notification />
          <Link href={'/'}><QuestionCircleOutlined /></Link>
          <Link href={'/'}><CreditCardOutlined /></Link>
          <User />
        </div>
      </div>
    </div>
  )
}

