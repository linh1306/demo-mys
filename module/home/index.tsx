'use client'
import React, { useEffect, useState } from 'react';
import LayoutGlobal from '@app/components/Layout';
import TableGlobal from '@app/components/Table';
import { Button, DatePicker, Dropdown, Input, InputNumber, Radio, RadioChangeEvent } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@app/redux/store';
import {IAccountInfo} from "../../types";

type TElementFind = 'hiển thị' | 'số lượng' | 'level mục tiêu' | 'nhóm'
type PickerMode = 'date' | 'week' | 'month' | 'quarter' | 'year'

interface IElementFind {
  items: TElementFind[];
}

const DropdownElementFind: React.FC<IElementFind> = ({ items }) => {
  const [picker, setPicker] = useState<PickerMode | undefined>('week')

  const handleChangePicker = (e: RadioChangeEvent) => {
    setPicker(e.target.value)
  }
  return (
    <div className='bg-white flex flex-col gap-3 p-3 shadow-md rounded-lg'>
      <div className='flex flex-col gap-2' hidden={!items.includes('hiển thị')}>
        <p className='font-semibold'>Hiển thị</p>
        <Radio.Group className='flex' size='small' onChange={handleChangePicker} value={picker}>
          <Radio value={'year'}>Năm</Radio>
          <Radio value={'quarter'}>Quý</Radio>
          <Radio value={'month'}>Tháng</Radio>
          <Radio value={'week'}>Tuần</Radio>
        </Radio.Group>
        <DatePicker className='w-full' picker={picker} />
      </div>
      <div className='flex flex-col gap-2' hidden={!items.includes('số lượng')}>
        <p className='font-semibold'>Số lượng</p>
        <InputNumber />
      </div>
      <div className='flex flex-col gap-2' hidden={!items.includes('level mục tiêu')}>
        <p className='font-semibold'>Level mục tiêu</p>
        <Radio.Group className='grid grid-cols-2' size='small' value={'tat ca'}>
          <Radio value={'tat ca'}>Tất cả</Radio>
          <Radio value={'cong ty'}>Công ty</Radio>
          <Radio value={'nhom'}>Nhóm</Radio>
          <Radio value={'nhan su'}>Nhân sự</Radio>
        </Radio.Group>
      </div>
      <div className='flex flex-col gap-2' hidden={!items.includes('nhóm')}>
        <p className='font-semibold'>Nhóm</p>
        <Input placeholder='Chọn nhóm' />
      </div>
      <div>
        <Button className='bg-blue-400 w-full' type='primary'>Lọc</Button>
      </div>
    </div>
  )
};

const ElementFind = () => {
  return (
    <div className='flex gap-1 bg-gray-300 bg-opacity-50 py-1 px-2 rounded-lg'>
      <FilterOutlined />
      <p>Lọc</p>
    </div>
  )
}

export default function Home() {
  const user = useAppSelector(state => state.user)
  const router = useRouter();
  
  if (Object.keys(user).length === 0) {
    router.push('/about')
    return null
  }
  return (
    <LayoutGlobal>
      <div className='flex flex-col gap-3'>
        <TableGlobal
          title='Nhiệm vụ ngày'
          columns={[
            {
              title: 'STT',
              dataIndex: 'stt',
              key: 'stt',
            },
            {
              title: 'Tên mục tiêu',
              dataIndex: 'target',
              key: 'target',
            },
            {
              title: 'Nhân sự',
              dataIndex: 'personnel',
              key: 'personnel',
            },
            {
              title: 'Thời gian',
              dataIndex: 'time',
              key: 'time',
            },
            {
              title: 'Trạng thái',
              key: 'status',
              dataIndex: 'status'
            },
          ]}
          dataSource={[]}
          elementFind={<DatePicker />} />
        <TableGlobal
          title='Mục tiêu công ty'
          columns={[
            {
              title: 'STT',
              dataIndex: 'stt',
              key: 'stt',
            },
            {
              title: 'Tên mục tiêu',
              dataIndex: 'target',
              key: 'target',
            },
            {
              title: 'Nhân sự',
              dataIndex: 'personnel',
              key: 'personnel',
            },
            {
              title: 'Thời gian',
              dataIndex: 'time',
              key: 'time',
            },
            {
              title: 'Trạng thái',
              key: 'status',
              dataIndex: 'status'
            },
          ]}
          dataSource={[]}

          elementFind={
            <Dropdown
              dropdownRender={() => (<DropdownElementFind items={['hiển thị', 'số lượng', 'level mục tiêu', 'nhóm']} />)}
            >
              <div>
                <ElementFind />
              </div>
            </Dropdown>} />
        <TableGlobal
          title='Mục tiêu cá nhân'
          columns={[
            {
              title: 'STT',
              dataIndex: 'stt',
              key: 'stt',
            },
            {
              title: 'Tên mục tiêu',
              dataIndex: 'target',
              key: 'target',
            },
            {
              title: 'Nhân sự',
              dataIndex: 'personnel',
              key: 'personnel',
            },
            {
              title: 'Thời gian',
              dataIndex: 'time',
              key: 'time',
            },
            {
              title: 'Trạng thái',
              key: 'status',
              dataIndex: 'status'
            },
          ]}
          dataSource={[]}
          elementFind={<Dropdown dropdownRender={() => (<DropdownElementFind items={['hiển thị', 'số lượng']} />)}>
            <div>
              <ElementFind />
            </div>
          </Dropdown>} />
      </div>
    </LayoutGlobal>
  );
}