import React from 'react';
import Input from '@app/components/Input';

export function ForgotPassword(): JSX.Element {
  return (
    <div className='flex flex-col gap-3'>
      <div className="text-center flex flex-col gap-3">
        <p className="text-4xl font-semibold">Quên mật khẩu</p>
        <p className="text-stone-500">Nhập địa chỉ email bạn đã sử dụng khi tham gia và chúng tôi sẽ gửi cho bạn hướng dẫn đặt mật khẩu</p>
      </div>
      <div className='flex flex-col gap-4'>
        <Input required name='email' type='text' title='Email' placeholder='Email' />
      </div>
      <div className='flex flex-col gap-3'>
        <button className='font-semibold bg-blue-500 rounded-md py-2 text-lg text-white'>
          Tiếp theo
        </button>
      </div>
    </div>
  )
}