import React from 'react'
import './styles.scss'

const SidebarItem = (props) => {
  const { name, collapse } = props
  return collapse ? (
    <React.Fragment>
      <li className="nav-item collapse-item">
        <a
          className={'nav-link ' + name}
          data-bs-toggle="collapse"
          href={'#collapse' + name}
          role="button"
          aria-expanded="false"
          aria-controls={'collapse' + name}
        >
          <span>{name}</span>
        </a>
        <div className="collapse nav-collapse" id={'collapse' + name}>
          <div>
            <a href="#" className="nav-link">
              <span>Dropdown 1</span>
            </a>
            <a href="#" className="nav-link">
              <span>Dropdown 2</span>
            </a>
            <a href="#" className="nav-link">
              <span>Dropdown 3</span>
            </a>
          </div>
        </div>
      </li>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <li className="nav-item">
        <a href="#" className={'nav-link ' + name}>
          <span>{name}</span>
        </a>
      </li>
    </React.Fragment>
  )
}

export default SidebarItem
