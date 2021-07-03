import React, { useState } from "react"
import IdentityModal from "react-netlify-identity-widget"


const Header = ({ children }) => {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <header className="site-header">
      <div>
        <button onClick={() => setShowDialog(true)}>Log In</button>
        <IdentityModal
          showDialog={showDialog}
          onCloseDialog={() => setShowDialog(false)}
        />
      </div>
      {children}
    </header>
  )
}

export default Header