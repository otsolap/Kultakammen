import auth0 from "auth0-js"
import { navigate } from "gatsby"
// Apufunktio tarkistamaan ollaankko verkkoselaimessa.
export const isBrowser = typeof window !== "undefined"

// Auth-0 aktivoituu vain verkkoselaimissa. 
// Ei sivunrakennuksen aikana.
// responsetype => Json, koska Gatsby on SPA.
const auth = isBrowser
  ? new auth0.WebAuth({
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENTID,
    redirectUri: process.env.AUTH0_CALLBACK,
    responseType: "token id_token",
    scope: "openid profile email",
  })
  : {}

const tokens = {
  idToken: false,
  accessToken: false,
  expiresAt: false,
}

let user = {}

export const isAuthenticated = () => {
  if (!isBrowser) {
    return;
  }

  return localStorage.getItem("isLoggedIn") === "true"
}



// Login metodi.
export const login = () => {
  // Safety protokolli. Periaatteessa turha?
  if (!isBrowser) {
    return
  }

  auth.authorize()
}


// luodaan sisäänkirjautumis sessio.
// cb => callback. Pitää olla tyhjä objekti.
const setSession = (cb = () => { }) => (err, authResult) => {
  if (err) {
    navigate("/")
    cb()
    return
  }
  // Jos kaikki löytyy niin kaikki toimii!
  if (authResult && authResult.accessToken && authResult.idToken) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime()
    tokens.accessToken = authResult.accessToken
    tokens.idToken = authResult.idToken
    tokens.expiresAt = expiresAt
    user = authResult.idTokenPayload
    localStorage.setItem("isLoggedIn", true)
    navigate("/portfolio")
    cb()
  }
}

// Tarkistetaan onko user logged.
/* export const checkSession = callback => {
  const isLoggedIn = window.localStorage.getItem("isLoggedIn")
  if (isLoggedIn === "false" || isLoggedIn === null) {
    callback()
  }
  const protectedRoutes = [`/portfolio`, `/callback`];
  const isProtectedRoute = protectedRoutes
    .map(route => window.location.pathname.includes(route))
    .some(route => route)
  if (isProtectedRoute) {
    auth.checkSession({}, setSession(callback))
  }
} */

export const silentAuth = callback => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, setSession(callback))
}

export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession())
}

export const getProfile = () => {
  return user
}



export const logout = () => {
  localStorage.setItem("isLoggedIn", false)
  auth.logout()
}
