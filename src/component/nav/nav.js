import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
export const nav = () => {
  return (
    <>
    <PrimaryNav>
      <Hamburger />
      <Menu>
        <MenuLink to="/Logout" activeStyle>
          Logout
        </MenuLink>
        <MenuLink to="/Setting" activeStyle>
          Settings
        </MenuLink>
      </Menu>
    </PrimaryNav>
  </>
  )
}
