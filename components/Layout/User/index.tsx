import type { MenuProps } from 'antd';
import {Dropdown} from 'antd';
import React from "react";


const items: MenuProps['items'] = [
  {
    label: <div className="flex items-center gap-2">
      <div className="h-8 aspect-square rounded-full bg-red-500">
      </div>
      <div className="text-[10px]">
        <p>Nguyễn Văn Tên</p>
        <p>email@gmail.com</p>
      </div>
    </div>,
    key: '0'
  },
  {
    type: 'divider',
  },
  {
    label: 'Giới thiệu',
    key: '1',
  },
  {
    label: 'Thông tin tài khoản',
    key: '2',
  },
  {
    label: 'Đánh giá',
    key: '3',
  },
  {
    label: 'Chính sách và quyền riêng tư',
    key: '4',
  },
  {
    type: 'divider',
  },
  {
    label: 'Language',
    key: '5',
  },
  {
    label: 'Đổi mật khẩu',
    key: '6',
  },
  {
    label: 'Rời khỏi công ty',
    key: '7',
  },
  {
    type: 'divider',
  },
  {
    label: 'Đăng xuất',
    key: '8',
  },
];

export default function User(): JSX.Element {
  return (
    <Dropdown className='cursor-pointer' trigger={['click']} menu={{ items }}>
      <div className="h-8 aspect-square rounded-full bg-red-500">
      </div>
    </Dropdown>
  )
}