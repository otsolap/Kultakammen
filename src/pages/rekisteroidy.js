import React, { useState } from "react"
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useForm } from "react-hook-form";
import { navigate } from 'gatsby';
import Layout from "../components/layout"

export default () => {
  const identity = useIdentityContext()
  const { register, handleSubmit, errors } = useForm()
  const [formError, setFormError] = useState(false)
  const [signingUp, setSigningUp] = useState(false)

  const onSubmit = async (data) => {
    setSigningUp(true)
    setFormError(false)

    identity
      .signup(data)
      .then(() => {
        setSigningUp(false)
        navigate('/')
      })
      .catch(e => {
        setFormError(e.message)
        setSigningUp(false)
      })
  }

  return (
    <Layout className="netlify-identity-page register-page">
      <div>
        <h1>
          Rekisteröidy
        </h1>
        {identity.user ?
          <div className="w-full max-w-xs">
            <p>Olet jo sisäänkirjautunut</p>
          </div>
          : <div>
            <form

              onSubmit={handleSubmit(onSubmit)}>

              <div className="input-container">
                <label htmlFor="user_metadata.full_name" className="block text-gray-700 text-sm font-bold mb-2">
                  Etu- ja sukunimi
                </label>
                <input
                  ref={register({ required: true })}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                  type="text"
                  placeholder="Etu- ja sukunimi*"
                  name="user_metadata.full_name">
                </input>
                {errors.user_metadata?.full_name && <p className="text-red-500 text-xs italic">Etu- ja sukunimi on pakollinen kenttä</p>}
              </div>

              <div className="input-container">
                <label htmlFor="user_metadata.phone_number" className="block text-gray-700 text-sm font-bold mb-2">
                  Puhelinnumero
                </label>
                <input
                  ref={register({ pattern: /^[0-9]{10}$/ })}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                  type="text"
                  placeholder="Puhelinnumero*"
                  name="user_metadata.phone_number">
                </input>
                {errors.user_metadata?.phone_number && <p className="text-red-500 text-xs italic">Kaikki yhteen putkeen, esim: 0401234567</p>}
              </div>

              <div className="input-container">
                <label htmlFor="user_metadata.address.street" className="block text-gray-700 text-sm font-bold mb-2">
                  Osoite
                </label>
                <input
                  ref={register({ required: true })}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                  type="text"
                  placeholder="Osoite*"
                  name="user_metadata.address.street">
                </input>
                {errors.user_metadata?.address?.street && <p className="text-red-500 text-xs italic">Osoite on pakollinen tieto</p>}
              </div>

              <div className="input-container">
                <label htmlFor="user_metadata.address.city" className="block text-gray-700 text-sm font-bold mb-2">
                  Kaupunki
                </label>
                <input
                  ref={register({ required: true })}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                  type="text"
                  placeholder="Kaupunki*"
                  name="user_metadata.address.city">
                </input>
                {errors.user_metadata?.address?.city && <p className="text-red-500 text-xs italic">Kaupunki on pakollinen kenttä</p>}
              </div>

              <div className="input-container">
                <label htmlFor="user_metadata.address.state" className="block text-gray-700 text-sm font-bold mb-2">
                  Postitoimipaikka
                </label>
                <input
                  ref={register({ required: true })}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                  type="text"
                  placeholder="Postitoimipaikka*"
                  name="user_metadata.address.state">
                </input>
                {errors.user_metadata?.address?.state && <p className="text-red-500 text-xs italic">Postitoimipaikka</p>}
              </div>

              <div className="input-container">
                <label htmlFor="user_metadata.address.zip" className="block text-gray-700 text-sm font-bold mb-2">
                  Postinumero
                </label>
                <input
                  ref={register({ required: true })}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                  type="text"
                  placeholder="Postinumero*"
                  name="user_metadata.address.zip">
                </input>
                {errors.user_metadata?.address?.zip && <p className="text-red-500 text-xs italic">Postinumero on pakollinen tieto</p>}
              </div>

              <div className="input-container">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Sähköposti
                </label>
                <input
                  ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                  type="text"
                  placeholder="Sähköposti*"
                  name="email">
                </input>
                {errors.email && <p className="text-red-500 text-xs italic">Sähköposti on pakollinen kenttä</p>}
              </div>
              <div className="input-container">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Salasana
                </label>
                <input
                  ref={register({ required: true })}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                  name="password"
                  type="password"
                  placeholder="Salasana*">
                </input>
                {errors.password && <p className="text-red-500 text-xs italic">Salasana on pakollinen kenttä</p>}
              </div>

              <div className="flex items-center justify-between">
                <button
                  className={`button ${signingUp}`}
                  type="submit">
                  Rekisteröidy
                </button>
              </div>

              <div className="pt-2">
                {formError && <p className="text-red-500 text-xs italic">Jotain meni pieleen.</p>}
              </div>
            </form>
          </div>
        }
      </div>
    </Layout>
  )
}