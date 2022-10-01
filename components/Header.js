import React, { useState } from 'react'
import { Icon, Input, Menu } from 'semantic-ui-react'

const Header = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  }
  return (
    <Menu className='navbar' size='large' fluid>
      <Menu.Item header>CreativeFund</Menu.Item>
      <Menu.Item
        name='discover'
        active={activeItem === 'discover'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='aboutUs'
        active={activeItem === 'aboutUs'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='help'
        active={activeItem === 'help'}
        onClick={handleItemClick}
      />

      <Menu.Menu position='right'>
        <Input className='icon input-search' icon='search' placeholder='Search campaign...' />
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={handleItemClick}
        >
          <Icon name='add' />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Header