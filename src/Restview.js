import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Operatingtime from './Operatingtime';
import Review from './Review';
import { useDispatch, useSelector } from 'react-redux';
import { getResturants } from './actions/restaction';


function Restview() {

  // const [restList,setRest]=useState([])

//api to accss data
// const getData=async ()=>{
//   const result=await fetch('/restaurants.json')
//   result.json().then(data=>setRest(data.restaurants))
// }

// console.log(restList);


const dispatch = useDispatch()


// object create for useparams
const params =useParams()
console.log(params.id);


const {restList}= useSelector(state=>state.reducer1)

//find single restaurant data
const singleRest=restList.find(i=>i.id==params.id)
console.log(singleRest);

useEffect(()=>{
  dispatch(getResturants)
})
  return (
    <div>

{singleRest?
      (<Row>
        <Col lg={6} md={6}>
        <img className='w-75 container p-5' style={{height:'600px'}}
         src={singleRest.photograph} 
        />
        </Col>
        <Col lg={6} md={6} >

        <ListGroup>
      <ListGroup.Item><h1 className='text-warning'>{singleRest.name}</h1></ListGroup.Item>
      <ListGroup.Item variant="primary"><strong>{singleRest.address}</strong></ListGroup.Item>
      <ListGroup.Item action variant="secondary">
      <strong>{singleRest.neighborhood}</strong>
      </ListGroup.Item>
      <ListGroup.Item action variant="success">
      <strong>{singleRest.cuisine_type}</strong>
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
       <Operatingtime workingTime={singleRest.operating_hours}>

       </Operatingtime>
       <Review reviewList={singleRest.reviews}>

       </Review>

      </ListGroup.Item>

    </ListGroup>
        
        </Col>
        </Row>):""
}
        </div>
  )
}

export default Restview