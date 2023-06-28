import React from 'react'
import dashboard from '../../assets/images/dashboard.svg'
import SidebarItem from '../SidebarItem'
import User from '../User'
import menu from '../../data/menu'
import './styles.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-top">
          <a className="text-decoration-none nav-brand">
            <div className="sidebar_logo">
              <img src={dashboard} alt="Dashboard" />
            </div>
            <span className="brand-name">
              Dashboard <span>v.01</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="d-flex flex-column justify-content-between h-100">
            <ul className="nav flex-column">
              {menu.map((item, id) => {
                return <SidebarItem key={id} {...item} />
              })}
            </ul>
            <User />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
