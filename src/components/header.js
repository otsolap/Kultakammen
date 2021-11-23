import React from 'react';
import { useLocation } from "@reach/router"

const Header = ({ children }) => {
  const thePath = useLocation().pathname
  const thePathName = thePath.replace('/portfolio', 'portfolio')

  return (
    <header className={"site-header " + thePathName}>
      {children}
    </header>
  )
}

export default Header