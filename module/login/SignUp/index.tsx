import React from 'react';
import Input from '@app/components/Input';

interface ISignUpProps {
  setTabActive: (tabActive: string) => void,
}

export function SignUp(props: ISignUpProps): JSX.Element {
  const { setTabActive } = props
  return (
    <div className='flex flex-col gap-3'>
      <div className="text-center flex flex-col gap-2">
        <p className="text-4xl font-semibold">Đăng ký</p>
      </div>
      <div className='flex flex-col gap-4'>
        <Input required name='name' type={'text'} title='Họ và tên' placeholder={'Họ và tên'} />
        <Input name='nameAccount' type={'text'} title='Tên tài khoản' placeholder={'Tên tài khoản'} />
        <Input required name='email' type='text' title='Email' placeholder='Email' />
        <Input required name='password' type='password' title='Mật khẩu' placeholder='Mật khẩu' />
        <Input required name='confirmPassword' type='password' title='Nhập lại mật khẩu' placeholder='Nhập lại mật khẩu' />
      </div>
      <div className='flex flex-col gap-3'>
        <button className='font-semibold bg-blue-500 rounded-md py-2 text-lg text-white'>
          Đăng ký
        </button>
      </div>
      <div className='flex gap-1 justify-center'>
        <p>Bạn chưa có tài khoản?</p>
        <p className='text-blue-400 cursor-pointer' onClick={() => setTabActive('Sign In')}>Đăng ký ngay</p>
      </div>
    </div>
  )
}