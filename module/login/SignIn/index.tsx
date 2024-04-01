'use client'
import { ILoginBody, ILoginResponse, login } from '@app/api/ApiUser';
import Input from '@app/components/Input';
import { loginUser } from '@app/redux/slice/UserSlice';
import { useAppSelector } from '@app/redux/store';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface ISignInProps {
  setTabActive: (tabActive: string) => void,
}

export function SignIn(props: ISignInProps): JSX.Element {
  const { setTabActive } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useAppSelector(state=>state.user)
  console.log('state',user);
  

  const handleLogin = async () => {
    const res = await login({
      "emailOrUsername": email,
      "password": password,
    })
    dispatch(loginUser(res.data))
  }

  const handleChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value)
  }


  return (
    <div className='flex flex-col gap-3'>
      <div className="text-center flex flex-col gap-3">
        <p className="text-4xl font-semibold">Đăng nhập</p>
        <p className="text-stone-500">Hoàn thành các thông tin chi tiết dưới đây</p>
      </div>
      <div className='flex flex-col gap-4'>
        <Input name='email' onChange={handleChangeEmail} type={'text'} title='Email hoặc tên tài khoản' placeholder={'Email hoặc tên tài khoản'} />
        <Input name='password' onChange={handleChangePassword} type='password' title='Mật khẩu' placeholder='Mật khẩu' />
      </div>
      <div className='flex justify-end'>
        <p className='cursor-pointer' onClick={() => setTabActive('Forgot Password')}>Quên mật khẩu?</p>
      </div>
      <div className='flex flex-col gap-3'>
        <button onClick={handleLogin} className='font-semibold bg-blue-500 rounded-md py-2 text-lg text-white'>
          Đăng nhập
        </button>
        <button className='font-semibold flex items-center justify-center gap-2 border-2 border-slate-300 rounded-md py-2 text-lg '>
          <Image
            src="/img/login/login/iconGoogle.svg"
            alt="google"
            width={20}
            height={20}
          />
          <p>Đăng nhập với Google</p>
        </button>
        <button className='font-semibold flex items-center justify-center gap-2 border-2 border-slate-300 rounded-md py-2 text-lg '>
          <Image
            src="/img/login/login/iconFaceBook.svg"
            alt="google"
            width={10}
            height={10}
          />
          <p>Đăng nhập với Facebook</p>
        </button>
      </div>
      <div className='flex gap-1 justify-center'>
        <p>Bạn chưa có tài khoản?</p>
        <p className='text-blue-400 cursor-pointer' onClick={() => setTabActive('Sign up')}>Đăng ký ngay</p>
      </div>
    </div>
  )
}