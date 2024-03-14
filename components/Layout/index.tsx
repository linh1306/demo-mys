'use client'
import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import { UserOutlined, RightOutlined, LeftOutlined, HomeOutlined, AimOutlined, FieldTimeOutlined, EditOutlined, SettingOutlined, MacCommandOutlined, FolderViewOutlined, FileSearchOutlined, FileMarkdownOutlined } from '@ant-design/icons';
import { Content, Header } from 'antd/es/layout/layout';
import type { MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import HeaderGlobal from "./Header";

const navWorkingSpace: MenuProps['items'] = [{
  key: `navWorkingSpace`,
  icon: <div className=" flex justify-center">
    <div className="h-8 w-8 aspect-square bg-red-500 text-white flex justify-center items-center">TK</div>
  </div>,
  label: `Tên không gian làm việc`,

  children: [
    {
      key: '1',
      icon: <FileSearchOutlined />,
      label: 'Danh sách nhóm'
    },
    {
      key: '2',
      icon: <FileMarkdownOutlined />,
      label: 'Danh sách chức vụ'
    },
    {
      key: '3',
      icon: <FileSearchOutlined />,
      label: 'Danh sách nhân sự'
    },
    {
      key: '4',
      icon: <FolderViewOutlined />,
      label: 'Tin tức'
    },
    {
      key: '5',
      icon: <MacCommandOutlined />,
      label: 'Quản lý tin tức'
    },
    {
      key: '6',
      icon: <SettingOutlined />,
      label: 'Chỉnh sửa công ty'
    },
  ],
}]

const navGlobal: MenuProps['items'] = [
  {
    key: `trang chu`,
    icon: <HomeOutlined />,
    label: `Trang chủ`,
  },
  {
    key: `nhom`,
    icon: <AimOutlined />,
    label: `Mục tiêu công ty`,
  },
  {
    key: `chucvu`,
    icon: <FieldTimeOutlined />,
    label: `Mục tiêu cá nhân`,
  },
  {
    key: `nhom`,
    icon: <EditOutlined />,
    label: `Lịch làm việc`,
  }
]

export default function LayoutGlobal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsed = () => {
    setCollapsed(prop => !prop)
  }
  return (
    <Layout className='h-screen overflow-hidden bg-transparent flex flex-col'>
      <Header className='bg-white bg-opacity-50 border-b-2 px-3'>
        <HeaderGlobal />
      </Header>
      <Content className='bg-transparent flex flex-1'>
        <Layout className='flex-1 bg-transparent'>
          <Sider width={250} className='h-full relative border-r-2' style={{ backgroundColor: 'transparent' }} collapsed={collapsed}>
            <Menu
              mode="inline"
              className="bg-white border-b-2 bg-opacity-50 style-scroll z-10 relative overflow-y-scroll w-full p-0"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              items={navWorkingSpace}
            />
            <Menu
              mode="inline"
              className="bg-white bg-opacity-50 style-scroll z-10 relative overflow-y-scroll h-full w-full p-0"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              items={navGlobal}
            />
            <div className="w-12 aspect-square absolute top-1/2 right-0">
              <div className="w-full h-full relative">
                <button className="absolute z-50 -top-1/2 -right-1/2 w-full flex items-center text-xl font-bold justify-center h-full rounded-full shadow-lg bg-white" onClick={handleCollapsed}>
                  {collapsed ?
                    <RightOutlined />
                    :
                    <LeftOutlined />
                  }
                </button>
              </div>
            </div>
          </Sider>
          <Content className='overflow-y-scroll p-5 overflow-hidden'>
            {children}
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}