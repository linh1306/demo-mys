'use client'
import Input from '@app/components/Input';
import { Tabs } from '@app/components/Tabs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { ForgotPassword } from './ForgotPassword';
import { LeftOutlined } from '@ant-design/icons';
import { useAppSelector } from '@app/redux/store';
import { useRouter } from 'next/navigation';

export default function Login() {
  const user = useAppSelector(state => state.user)
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      router.push('/')
    }
  }, [user])
  const [tabActive, setTabActive] = useState<string>('Sign In')

  const items = [
    {
      label: 'Sign in',
      children: <SignIn setTabActive={setTabActive} />,
    },
    {
      label: 'Sign up',
      children: <SignUp setTabActive={setTabActive} />,
    },
    {
      label: 'Forgot Password',
      children: <ForgotPassword />,
    }
  ]

  return (
    <div className="flex relative justify-center items-center w-screen h-screen overflow-hidden bg-login-home bg-cover min-h-screen">
      <div className="flex w-[1100px] gap-28">
        <div className="relative flex flex-col gap-3 flex-1 h-500px px-8 py-10 border-white border-2 rounded-xl bg-white bg-opacity-50">
          <div hidden={tabActive === 'Sign In'} onClick={() => setTabActive('Sign In')} className='absolute rounded-full cursor-pointer -left-20 top-0'>
            <LeftOutlined className='w-16 aspect-square bg-white rounded-full flex justify-center items-center' />
          </div>
          <Tabs items={items} tabActive={tabActive} />
        </div>
        <div className="flex-1 h-500px ">
          <p className='text-[65px] font-bold text-sky-700'>
            Mapping Your Success
          </p>
        </div>
      </div>
      <div className='absolute right-10 top-10'>
        <Link href='/'>
          <Image src='/img/logo/logo.svg'
            alt="google"
            width={150}
            height={100} />
        </Link>
      </div>
    </div>
  )
}