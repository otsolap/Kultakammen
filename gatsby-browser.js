import React, { useState, useEffect } from "react"
import { silentAuth } from "./src/util/auth"

const SessionCheck = ({ children }) => {
  const [loading, setLoading] = useState(true)

  const handleCheckSession = () => {
    setLoading(false)
  }

  useEffect(() => {
    silentAuth(handleCheckSession)
  }, [])

  return loading === false && <>{children}</>
}

export const wrapRootElement = ({ element }) => {
  return <SessionCheck>{element}</SessionCheck>
}