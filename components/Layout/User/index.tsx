import { useAppSelector } from '@app/redux/store';
import type { MenuProps } from 'antd';
import Image from "next/image";
import { Dropdown } from 'antd';
import React from "react";

export default function User(): JSX.Element {
  const user = useAppSelector(state => state.user).user
  const items: MenuProps['items'] = [
    {
      label: <div className="flex items-center gap-2">
        <div className="h-8 aspect-square rounded-full bg-red-500 overflow-hidden">
          <Image src={user?.avatarUrl ?? ""}
            width={35}
            height={35}
            alt="avatar user" />
        </div>
        <div className="text-[10px]">
          <p>{user?.fullName}</p>
          <p>{user?.email}</p>
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
  return (
    <Dropdown className='cursor-pointer' trigger={['click']} menu={{ items }}>
      <div className="h-8 overflow-hidden aspect-square rounded-full bg-red-500">
        <Image src={user?.avatarUrl ?? ""}
          width={35}
          height={35}
          alt="avatar user" />
      </div>
    </Dropdown>
  )
}