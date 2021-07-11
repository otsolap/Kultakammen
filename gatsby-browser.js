import React, { useState, useEffect } from "react"
import { checkSession } from "./src/util/auth"

const SessionCheck = ({ children }) => {
  const [loading, stillLoading] = useState(true);
  useEffect(() => checkSession(() => stillLoading(false)));
  return loading === false && <>{children}</>
};

export const wrapRootElement = ({ element }) => (
  <SessionCheck>{element}</SessionCheck>
);