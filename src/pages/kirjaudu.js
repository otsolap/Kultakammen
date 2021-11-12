import React from "react"
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import Layout from "../components/layout"
import LoginForm from '../components/Auth/LoginForm'

export default ({ location }) => {
  const identity = useIdentityContext()
  const navigateTarget = location.state?.navigateTarget || '/'

  return (
    <Layout className="netlify-identity-page login-page">
      <div>
        <h1>
          Kirjaudu sisään
        </h1>
        {identity.provisionalUser
          ? <EmailConfirmation />
          : <LoginForm navigateTarget={navigateTarget} />
        }

        <p>Eikö sinulla ole vielä vierailija tiliä? Rekisteröidy <a href="/rekisteroidy">täällä</a>.</p>
      </div>
    </Layout>
  )
}

const EmailConfirmation = () => {
  return (
    <>
      <p className="px-4 mt-8 text-xl text-gray-700 sm:mt-8">
        You're almost there!
      </p>
      <p className="px-4 mt-8 text-xl text-gray-700 sm:mt-8">
        Please confirm your email and click the link
      </p>
    </>
  )
}