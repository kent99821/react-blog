import React from 'react'
import {Row, Col} from 'antd'
import  Head  from "next/head";
import Header from "../components/Header";
export default function list() {
  return (
    
  <div>
    <Head>
      <title>list</title>
    </Head>
    <Header/>
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14} xxl={10}>
        left
      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4} xxl={3}>
      right
      </Col>
    </Row>
  </div>
    )
    
}