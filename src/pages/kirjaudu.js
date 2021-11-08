import React from "react"
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import Layout from "../components/layout"
import LoginForm from '../components/Auth/LoginForm'

export default ({ location }) => {
  const identity = useIdentityContext()
  const navigateTarget = location.state?.navigateTarget || '/'

  return (
    <Layout>
      <main className="max-w-2xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-teal-500 font-bold sm:text-3xl">
              Kirjaudu sisään
            </h1>
            {identity.provisionalUser
              ? <EmailConfirmation />
              : <LoginForm navigateTarget={navigateTarget} />
            }
          </div>
          <p>Eikö sinulla ole vielä vierailija tiliä? Rekisteröidy <a href="/rekisteroidy">täällä</a>.</p>
        </div>
      </main>
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