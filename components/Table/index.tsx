'use client'
import React from 'react';
import { Table } from 'antd';

interface IPropsTable {
  title: string,
  dataSource: any,
  columns: any,
  elementFind: JSX.Element
}

export default function TableGlobal(props: IPropsTable): JSX.Element {
  const { title, columns, dataSource, elementFind } = props;
  return (
    <div className='bg-white bg-opacity-50 rounded-md p-2 flex flex-col gap-2'>
      <div className='flex justify-between items-center'>
        <p className='border-l-4 text-xs pl-2 font-semibold border-green-500'>{title}</p>
        {elementFind}
      </div>
      <Table className='rounded-lg overflow-hidden' columns={columns} dataSource={dataSource} pagination={false} />
    </div>
  )
}