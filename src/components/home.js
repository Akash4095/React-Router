import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button, Header } from 'semantic-ui-react'

/// navigate use to navigate functionally .on event

const Home = () => {
    const navigate= useNavigate()

  return (
    <>
    <Header as='h1'>Home Page</Header>
    <Button  basic color='orange' onClick={()=>navigate('/order-summary')}  >Place order</Button>

    </>
  )
}

export default Home