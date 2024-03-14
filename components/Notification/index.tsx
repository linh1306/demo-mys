import { Avatar, Divider, Dropdown, List, Tabs } from "antd";
import { BellOutlined, CheckCircleOutlined } from '@ant-design/icons';

import type { TabsProps } from 'antd';

const ListDemo = () => (
  <List
    itemLayout="horizontal"
    dataSource={[]}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="https://ant.design">{'tiêu đề'}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
)

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tất cả',
    children: <ListDemo />,
  },
  {
    key: '2',
    label: 'Cá nhân',
    children: <ListDemo />,
  },
  {
    key: '3',
    label: 'Nhóm',
    children: <ListDemo />,
  },
  {
    key: '4',
    label: 'Công ty',
    children: <ListDemo />,
  },
  {
    key: '5',
    label: 'Hệ thống',
    children: <ListDemo />,
  },
];


export default function Notification(): JSX.Element {
  return (
    <Dropdown trigger={['click']} dropdownRender={() => (
      <div className="bg-white shadow-md rounded-md p-3 min-w-80">
        <div className="flex justify-between">
          <p>Thông báo</p>
          <button className="text-xs text-blue-600">Đánh dấu tất cả là đã đọc <CheckCircleOutlined /> </button>
        </div>
        <Divider className="m-0 mt-2" />
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    )}>
      <BellOutlined />
    </Dropdown>
  )
}