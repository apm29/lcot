import * as React from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Icon from '@mdi/react'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import { navIcon, navLinkText, navSub, navText } from './navigation.module.css'
import { Link, navigate } from 'gatsby'

export default function NavigationItem({ nav }) {
  const [open, setOpen] = React.useState(true)

  const hasChildren = nav.children && nav.children.length
  const handleClick = () => {
    hasChildren ? setOpen(!open) : navigate(nav.path)
  }
  let childrenNav
  if (hasChildren) {
    childrenNav = (
      <Collapse in={open} timeout="auto">
        <List dense component="div" disablePadding className={navSub}>
          {
            nav.children.map(item => (
              <NavigationItem key={item.title} nav={item}/>
            ))
          }
        </List>
      </Collapse>
    )
  } else {
    childrenNav = null
  }

  return (
    <div>
      <ListItemButton onClick={handleClick} selected={window.location.pathname === nav.path}>
        <ListItemIcon className={navIcon}>
          <Icon path={nav.icon} size={0.625}/>
        </ListItemIcon>
        <ListItemText>
          <span className={`${[navText, navLinkText].join(' ')}`}>{nav.title}</span>
        </ListItemText>
      </ListItemButton>
      {childrenNav}
    </div>
  )
}
