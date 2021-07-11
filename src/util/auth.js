import auth0 from "auth0-js"
// Apufunktio tarkistamaan ollaankko verkkoselaimessa.
export const isBrowser = typeof window !== "undefined"

const tokens = {
  idToken: false,
  accessToken: false,
}

let user = {}

export const isAuthenticated = () => {
  return tokens.idToken !== false
}

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

// Login metodi.
export const login = () => {
  // Safety protokolli. Periaatteessa turha?
  if (!isBrowser) {
    return
  }

  auth.authorize()
}

export const logout = () => {
  tokens.accessToken = false
  tokens.idToken = false
  user = {}
  window.localStorage.setItem("isLoggedIn", false)

  auth.logout({
    returnTo: window.location.origin,
  })
}

// luodaan sisäänkirjautumis sessio.
// cb => callback. Pitää olla tyhjä objekti.
const setSession = (cb = () => { }) => (err, authResult) => {
  if (err) {
    if (err.error === "sisäänkirjautuminen_vaadittu") {
      login()
    }
  }
  // Jos kaikki löytyy niin kaikki toimii!
  if (authResult && authResult.accessToken && authResult.idToken) {
    tokens.idToken = authResult.idToken
    tokens.accessToken = authResult.accessToken

    auth.client.userInfo(tokens.accessToken, (_err, userProfile) => {
      user = userProfile
      window.localStorage.setItem("isLoggedIn", true)

      cb()
    })
  }
}

// Tarkistetaan onko user logged.
export const checkSession = callback => {
  const isLoggedIn = window.localStorage.getItem("isLoggedIn")
  if (isLoggedIn === "false" || isLoggedIn === null) {
    callback()
  }
  const protectedRoutes = [`/portfolio`];
  const isProtectedRoute = protectedRoutes
    .map(route => window.location.pathname.includes(route))
    .some(route => route)
  if (isProtectedRoute) {
    auth.checkSession({}, setSession(callback))
  }
}

export const handleAuthentication = () => {
  auth.parseHash(setSession())
}

export const getProfile = () => {
  return user
}