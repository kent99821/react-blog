import React, { useState, useEffect } from 'react';
import { Row, Col, Menu } from 'antd';
import { HomeOutlined, SmileOutlined, AppstoreOutlined, ReconciliationOutlined } from "@ant-design/icons";
import Router from 'next/router';
import axios from 'axios';
import servicePath from '../../config/apiUrl';
import Link from 'next/link';
const Header = () => {
  
    const [navArray, setNavArray] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    setNavArray(res.data.data)
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()
    }, [])
  
    const handleClick = (e) => {

        
        if (e.key == 0) {
            Router.push('/');
        } else {
            Router.push('/list?id=' + e.key);
        }
    }

    const { SubMenu } = Menu;
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12} xxl={10}>
                    <span className="header-logo">
                    <Link href={{pathname:'/'}}><a>kent'blog</a></Link>    
                        </span>
                    <span className="header-txt">不会敲代码的车手</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6} xxl={4}>
                    <Menu mode="horizontal"  onClick={handleClick}>
                    <SubMenu title="分类" key="1000" icon={<AppstoreOutlined  />} >
                            {
                                navArray.map((item) => {
                                    return (
                                        <Menu.Item key={item.id}><ReconciliationOutlined  />&nbsp;{item.typeName}</Menu.Item>
                                    )
                                })
                            }
                        </SubMenu>
                        <Menu.Item key={0}>
                            <HomeOutlined className="icon" />
                            首页
                        </Menu.Item>
                        
                        <Menu.Item key="daily">
                            <SmileOutlined className="icon" />
                            日常
                        </Menu.Item>


                    </Menu>
                </Col>

            </Row>

        </div>
    )
}
export default Header