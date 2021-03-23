import {useState} from "react"
import { UserOutlined, BellOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import{ Menu, Input, Badge, Typography, Space,} from "antd";
import {Link} from 'react-router-dom'
const Header = () => {

     const { SubMenu } = Menu
     const[current, setcurrent] = useState("")
     const { Search } = Input;
     const onSearch = value => console.log(value);  
   
      const handleClick = e => {
        console.log('click ', e);
        setcurrent( e.key)
      }
      return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">

<Menu.Item key="mail">
         <Link to="/" style={{textDecoration:'none'}}>
         <Typography strong>Collection Hub</Typography>
         </Link> 
          </Menu.Item>
         

          <Space >
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            style={{ width: 680 }}
            onSearch={onSearch}
          />
          </Space>

          <SubMenu key="SubMenu" icon={<UserOutlined />}  title ="Account & Settings">
            <Menu.ItemGroup title="Your Account">
              <Menu.Item key="setting:1">Account</Menu.Item>
              <Menu.Item key="setting:3">Start a Selling Account</Menu.Item>
              <Menu.Item key="setting:4">Register for a Business Account</Menu.Item>
              <Menu.Item key="setting:5">Switch Account</Menu.Item>
              <Menu.Item key="setting:6">Sign Out</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>

          <Menu.Item key="item">
          <Typography level h3 >Returns & Orders</Typography>
          </Menu.Item>

          <Menu.Item key="notic"  icon={<BellOutlined />}> 
          <Badge count={5}>
          
          </Badge>
          </Menu.Item>

          <Menu.Item key="chat"  icon={<ShoppingCartOutlined />}> 
          <Badge count={5}>
            <a href="#" className="head-example" />
          </Badge>
          </Menu.Item>
        </Menu>               
      );
}


export default Header