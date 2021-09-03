import React, { useState,  useEffect } from 'react'
import { Row, Col, List, Breadcrumb, Affix } from 'antd'
import Head from "next/head";
import Header from "../components/Header/Header";
import Author from '../components/Author/Author';
import Footer from '../components/Footer/Footer';
import { CalendarOutlined, ContainerOutlined, FireOutlined } from "@ant-design/icons";
import servicePath from '../config/apiUrl';
import Link from 'next/link';
const articleList = ({list}) => {
  
  const [myList, setMyList] = useState(list.data)
  useEffect(()=>{
    setMyList(list.data)
  })
  return (

    <div>
      <Head>
        <title>List</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} xxl={10}>
          <div className="bread-div">
            <Breadcrumb>
            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
            <Breadcrumb.Item>{myList.length === 0 ? 文章列表:myList[0].typeName}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{pathname:'/detailed', query:{id:item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span><CalendarOutlined />{item.addTime}</span>
                  <span><ContainerOutlined />{item.typeName}</span>
                  <span><FireOutlined />{item.view_content}人</span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} xxl={3}>
        <Affix offsetTop={5}>
          <Author/>
        </Affix>
        </Col>
      </Row>
      <Footer/>
    </div>
  )

}
export async function getServerSideProps(context) {

  const id = context.query.id;
  const res = await fetch(`${servicePath.getListById}?id=${id}`)
  const list = await res.json();
  

  return {
    props: {
      list
    },
  }
}
export default articleList
