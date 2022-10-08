import React, { useState } from "react";
import { Icon, Input, Menu } from "semantic-ui-react";
import Link from "next/link";

const Header = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  }
  return (
    <Menu className="navbar" size="large" fluid>
      <Link href="/" passHref>
        <Menu.Item header>CreativeFund</Menu.Item>
      </Link>

      <Link href="/discover" passHref>
        <Menu.Item name="discover" />
      </Link>

      <Link href="/about" passHref>
        <Menu.Item name="aboutUs" />
      </Link>

      <Link href="/help" passHref>
        <Menu.Item name="help" />
      </Link>

      <Menu.Menu position="right">
        <Input className="icon input-search" icon="search" placeholder="Search campaign..." />
        <Link href="/campaigns/new" passHref>
          <Menu.Item
            name="contact"
          >
            <Icon name="add" />
          </Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  )
}

export default Header