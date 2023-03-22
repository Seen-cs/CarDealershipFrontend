import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
export default function Categories() {
  return (
    <div>
        <Container className='main'>
      <Menu inverted pointing vertical>
        <Menu.Item
          name='home' 
          
        ></Menu.Item>
        <Menu.Item
          name='messages'
      
        />
        <Menu.Item
          name='friends'
          
        />
      </Menu>
      </Container>
    </div>
  )
}
