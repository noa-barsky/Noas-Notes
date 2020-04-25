import React from 'react';
import './fonts.css';
import { Menu } from 'antd';
import { 
    MailOutlined, 
    AppstoreOutlined
} from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';

export default class NotesNavbar extends React.Component {
    state = {
        current: 'anchor',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    
      render() {
        return (
          <Menu 
          onClick={this.handleClick} 
          selectedKeys={[this.state.current]} 
          mode="horizontal">
            <Menu.Item key="anchor">
              <MailOutlined />
              Noa's Notes
            </Menu.Item>
            <Menu.Item key="app">
              <AppstoreOutlined />
              Notes
            </Menu.Item>
            <Menu.Item key="alipay">
                About
            </Menu.Item>
          </Menu>
        );
      }
}

