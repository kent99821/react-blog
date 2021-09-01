import React from 'react';
import { Row, Col, Menu } from 'antd';
import { GithubOutlined, HomeOutlined, SmileOutlined } from "@ant-design/icons";
const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12} xxl={10}>
            <span className="header-logo">kent'blog</span>
            <span className="header-txt">不会敲代码的车手</span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={8} xl={6} xxl={4}>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                <HomeOutlined className="icon" />
                    首页
                </Menu.Item>
                <Menu.Item key="daily">
                
                <SmileOutlined className="icon"/>
                    日常
                </Menu.Item>
                <Menu.Item key="github">
                <GithubOutlined className="icon"/>
                    github
                </Menu.Item>
            </Menu>
            </Col>

        </Row>

    </div>
)
export default Header