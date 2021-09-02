import React from 'react'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import Head from "next/head";
import Header from "../components/Header/Header";
import Author from '../components/Author/Author';
import Footer from '../components/Footer/Footer';
import { CalendarOutlined, ContainerOutlined, FireOutlined } from "@ant-design/icons";
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css';
const detailed = ({article}) => {
  
  let markdown = '\n' + '# P01:课程介绍和环境搭建 \n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n' +
    '\`console.log(111)\` \n\n' +
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '``` var a=11; ```'
  return (

    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} xxl={10}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>文章列表</Breadcrumb.Item>
                <Breadcrumb.Item>{article.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div className="detailed-title">
            {article.title}
          </div>
          <div className="list-icon center">
            <span><CalendarOutlined />&nbsp;{article.addTime}&nbsp;</span>
            <span><ContainerOutlined />&nbsp;{article.typeName}&nbsp;</span>
            <span><FireOutlined />&nbsp;{article.view_count}人&nbsp;</span>
          </div>
          <div className="detailed-content">
            <ReactMarkdown children={markdown} escapeHtml={false} />
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} xxl={3}>
          <Author />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div class='nav-title'>文章目录</div>
              <MarkNav className="article-menu" source={markdown} ordered={false} />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export async function getServerSideProps (context){
  
  const id =context.query.id;
  const res = await fetch(`http://127.0.0.1:7001/default/detailed?id=${id}`)
  const temp = await res.json();
  const article = temp.data[0]
  
  return {
    props: {
      article
    },
  }
}

export default detailed;