import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

export default function Search(): JSX.Element {
  return (
    <div className="h-8 flex items-center relative cursor-pointer">
      <label className="absolute h-full aspect-square flex items-center justify-center" htmlFor="input-search"><SearchOutlined /></label>
      <input className=" pl-8 outline-none h-full bg-transparent w-0 focus:border rounded-md border-blue-500 focus:bg-white focus:w-64 transition-all " id="input-search" type="search" placeholder="Tìm kiếm" />
    </div>
  )
}