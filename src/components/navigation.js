import * as React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import { graphql, useStaticQuery } from 'gatsby'
import NavigationItem from './NavigationItem'

export default function Navigation() {
  const {
    site: {
      siteMetadata: {
        nav,
        title,
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          nav {
            title
            path
            icon
            children {
              title
              path
              icon
            }
          }
        }
      }
    }
  `)

  return (
    <List
      dense
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {title}
        </ListSubheader>
      }
    >
      {
        nav.map(function (item) {
          return (
            <NavigationItem key={item.title} nav={item}/>
          )
        })
      }
    </List>
  )
}
