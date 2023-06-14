import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import './Restaurant.css'
import { getResturants } from './actions/restaction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Restaurant() {

// const [restList,setRest]=useState([])

//api to accss data
// const getData=async ()=>{
//     const result=await fetch('/restaurants.json')
//     result.json().then(data=>setRest(data.restaurants))
// }

// console.log(restList);

const dispatch =useDispatch()

useEffect(()=>{
  dispatch(getResturants)

},[])


const {restList} = useSelector(state=>state.reducer1)
console.log(restList);

  return (
    <Row className='ms-5 mb-5 p-2'>
    {
      restList.map(rest=>(
<Col className='p-2' lg={4} md={6}>
  <Link style={{textDecoration:'none'}} to={`/viewRest/${rest.id}`}>
<Card id='c1' className='mt-5 ms-5' border="success" style={{ width: '18rem' ,height:'550px' }}>
        
        <Card.Img variant='top' style={{height:'400px'}} src={rest.photograph}></Card.Img>
        <Card.Body>
          <Card.Title>{rest.name}</Card.Title>
          <Card.Text>
           {rest.address}
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
      </Col>
      ))
    }        

    </Row>
  )
}

export default Restaurant

