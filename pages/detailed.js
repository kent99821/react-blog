import React from 'react'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import Head from "next/head";
import Header from "../components/Header/Header";
import Author from '../components/Author/Author';
import Footer from '../components/Footer/Footer';
import { CalendarOutlined, ContainerOutlined, FireOutlined } from "@ant-design/icons";
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import Tocify from '../components/markdownnav/tocify.tsx';
import servicePath from '../config/apiUrl';


const detailed = ({ article }) => {
  const tocify = new Tocify();
  const renderer = new marked.Renderer();
  renderer.heading  = function (text, level, raw){
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: function (code) {
            return hljs.highlightAuto(code).value;
    }
   
  }); 
  let html = marked(article.article_content);
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
          <div className="detailed-content" dangerouslySetInnerHTML={{ __html: html }}>

          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} xxl={3}>
          <Author />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div class='nav-title'>文章目录</div>
              {tocify && tocify.render()}
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {

  const id = context.query.id;
  const res = await fetch(`${servicePath.detailed}?id=${id}`)
  const temp = await res.json();
  const article = temp.data[0]

  return {
    props: {
      article
    },
  }
}

export default detailed;