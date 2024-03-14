import { useState } from "react"
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Space } from 'antd';
interface IInputProps {
  name: string,
  type: 'text' | 'password' | 'number',
  placeholder?: string,
  title?: string,
  required?: boolean
}

function Input(props: IInputProps): JSX.Element {
  const { name, type, placeholder, title, required } = props
  const [hidden, setHidden] = useState<boolean>(true)
  const handleHiddenPassword = () => {
    setHidden(!hidden)
  }
  return (
    <div className="flex flex-col gap-1">
      <div className="flex">
        <label className="font-semibold">{title}</label>
        <p hidden={!required} className="text-red-600">*</p>
      </div>
      <div className="relative">
        <input name={name} type={type === 'password' && !hidden ? 'text' : type} className="w-full outline-none focus:border-red-300 focus:shadow-md transition-all shadow-red-500 p-3 rounded-md border-2" placeholder={placeholder} />
        <div hidden={type !== 'password'} className=" h-full  px-3 absolute top-3 right-0" onClick={handleHiddenPassword}>
          {hidden ?
            <EyeInvisibleOutlined />
            :
            <EyeOutlined />
          }
        </div>
      </div>
    </div>
  )
}

export default Input