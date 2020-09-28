import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = ({ children }) => (
  <header className="site-header">
    {children}
  </header>
)

export default Header