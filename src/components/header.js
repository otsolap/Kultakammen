import React from "react"


const Header = ({ children }) => {
  return (
    <header className="site-header">
      {children}
    </header>
  )
}

export default Header