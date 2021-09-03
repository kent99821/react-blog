import React, { useState, useEffect } from 'react';
import { Avatar, Divider, Tag } from 'antd';
import { WechatOutlined, GithubOutlined, QqOutlined } from '@ant-design/icons';
import axios from 'axios';
import servicePath from '../../config/apiUrl';
import Router from 'next/router';
const Author = () => {

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
            Router.push('/list?id=' + e.target.id);
        
    }
    
    return (
        <div className="author-div comm-box">
            <div>
                <Avatar size={100} src="https://avatars.githubusercontent.com/u/61462124?v=4" />
            </div>
            <div className="author-introduction">
                前端程序员 努力中........
                分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，
                我也会第一时间给你解答。
                <Divider>communicate</Divider>
                <Avatar size={30} icon={<WechatOutlined />} className="account"></Avatar>
                <Avatar size={30} icon={<QqOutlined />} className="account"></Avatar>
                <Avatar size={30} icon={<GithubOutlined />} className="account"></Avatar>
                <Divider>category</Divider>
               <div onClick={handleClick}>
                {
                    navArray.map((item) => {
                        return (
                            <Tag className="tag"   color={item.color} id={item.id}>{item.typeName}</Tag>
                        )
                    })
                }
               </div>
            </div>


        </div>
    )

}
export default Author;