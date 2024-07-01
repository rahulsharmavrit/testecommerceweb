import React from 'react'
import { Col, Row } from 'react-bootstrap'

const CardOne = ({icon,title,description}) => {
  return (<>
  
  <div className="card ms-3 me-5 border-0 rounded-0 ">
      {icon}
        <p className="font-21-700">{title}</p>
        <p className="font-17-400">{description}</p>
    </div>
  
  </>)
}

const CardTwo = ({contentPosition}) => {
    return (<>
    <Row className={`my-2 ${contentPosition === "right" ? "flex-row-reverse" : "flex-row"}`} >
      <Col lg={6}>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque praesentium laudantium, temporibus vitae voluptates suscipit?</p>
      </Col> 
      <Col lg={6}>
        <img src="https://fastly.picsum.photos/id/817/536/354.jpg?hmac=7fUjGMrwuFjXvXccmevdudgla-4k6Yrzd2koDHHOB80" alt="img" />
      </Col>
    </Row>
    
    </>)
  }

  const CardThree = () => {
    return (<>
    <Row className={'my-2'}>
   
      <Col lg={6}>
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetu adawawd r adipisicing elit. Doloremque praesentium laudantium, temporibus vitae voluptates suscipit?</p>
      </Col>
      <Col lg={6}>
        <img src="https://fastly.picsum.photos/id/817/536/354.jpg?hmac=7fUjGMrwuFjXvXccmevdudgla-4k6Yrzd2koDHHOB80" alt="img" />
      </Col>
    </Row>
    
    </>)
  }
  

export  {CardOne,CardTwo , CardThree}