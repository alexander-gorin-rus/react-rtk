import React from 'react'
import { NavLink } from 'react-router-dom';
import Styles from './GlobalNav.module.css'

const GlobalNav = () => {

    const navLink = [
        {
            id: 1,
            to: "/",
            value: "Dashboard"
        },
        {
            id: 2,
            to: "/add",
            value: "Add user"
        },
    ]
  return (
    <nav className={Styles.container}>
        {navLink.map((link) => {
            return (
                <NavLink
                    key={link.id}
                    to={link.to}
                    end
                    className={({isActive}) => (isActive ? Styles.active : undefined)}
                >
                        {link.value}
                </NavLink>
            )
        })}
        
    </nav>
    
  )
}

export default GlobalNav