import React from 'react';
import { Row, Col, List, Affix, Dropdown } from 'antd';
import Link from 'next/link';
import Head from "next/head";
import Header from "../components/Header/Header";
import Author from '../components/Author/Author';
import Footer from '../components/Footer/Footer';
import { CalendarOutlined, ContainerOutlined, FireOutlined } from "@ant-design/icons";
import servicePath from '../config/apiUrl';

const Home = ({ list }) => {
  return (

    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} xxl={10}>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={list.data}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{ pathname: '/detailed', query: {id: item.id } }}>
                    <a>{item.title}</a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span><CalendarOutlined />{item.addTime}</span>
                  <span><ContainerOutlined />{item.typeName}</span>
                  <span><FireOutlined />{item.view_count}人</span>
                </div>
                <div className="list-context">{item.introduce}</div>
                {/* <Card title={item.title} bordered >
                <div className="list-icon">
                  <span><CalendarOutlined />&nbsp;2021-09-01&nbsp;</span>
                  <span><ContainerOutlined />&nbsp;React学习&nbsp;</span>
                  <span><FireOutlined />&nbsp;5846人&nbsp;</span>
                </div>
                <div className="list-context">{item.context}</div>
                </Card> */}
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} xxl={3}>
          <Affix offsetTop={5}>
            <Author />
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )

}
export async function getStaticProps() {
  const res = await fetch(servicePath.articleList)
  const list = await res.json()
  // 通过返回 { props: { list } } 对象，Home 组件
  // 在构建时将接收到 `list` 参数
  return {
    props: {
      list,
    },
  }
}
export default Home
