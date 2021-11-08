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
    <Layout>
      <div className="flex flex-col w-full items-center">
      </div>
      <main className="max-w-2xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-teal-500 font-bold sm:text-3xl">
              Rekisteröidy
            </h1>
            {identity.user ?
              <div className="w-full max-w-xs">
                <p>Olet jo sisäänkirjautunut</p>
              </div>
              : <div className="w-full max-w-2xl">
                <form className="pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>

                  <div className="mb-4">
                    <label htmlFor="user_metadata.full_name" className="block text-gray-700 text-sm font-bold mb-2">
                      Etu- ja sukunimi
                    </label>
                    <input
                      ref={register({ required: true })}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                      type="text"
                      placeholder="Matti Meikäläinen"
                      name="user_metadata.full_name">
                    </input>
                    {errors.user_metadata?.full_name && <p className="text-red-500 text-xs italic">Etu- ja sukunimi on pakollinen kenttä</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="user_metadata.phone_number" className="block text-gray-700 text-sm font-bold mb-2">
                      Puhelinnumero
                    </label>
                    <input
                      ref={register({ pattern: /^[0-9]{10}$/ })}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                      type="text"
                      placeholder="0401234567"
                      name="user_metadata.phone_number">
                    </input>
                    {errors.user_metadata?.phone_number && <p className="text-red-500 text-xs italic">Kaikki yhteen putkeen, esim: 0401234567</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="user_metadata.address.street" className="block text-gray-700 text-sm font-bold mb-2">
                      Osoite
                    </label>
                    <input
                      ref={register({ required: true })}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                      type="text"
                      placeholder="123 Main St."
                      name="user_metadata.address.street">
                    </input>
                    {errors.user_metadata?.address?.street && <p className="text-red-500 text-xs italic">Osoite on pakollinen tieto</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="user_metadata.address.city" className="block text-gray-700 text-sm font-bold mb-2">
                      Kaupunki
                    </label>
                    <input
                      ref={register({ required: true })}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                      type="text"
                      placeholder="Helsinki"
                      name="user_metadata.address.city">
                    </input>
                    {errors.user_metadata?.address?.city && <p className="text-red-500 text-xs italic">Kaupunki on pakollinen kenttä</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="user_metadata.address.state" className="block text-gray-700 text-sm font-bold mb-2">
                      Postitoimipaikka
                    </label>
                    <input
                      ref={register({ required: true })}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                      type="text"
                      placeholder="Uusimaa"
                      name="user_metadata.address.state">
                    </input>
                    {errors.user_metadata?.address?.state && <p className="text-red-500 text-xs italic">Postitoimipaikka</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="user_metadata.address.zip" className="block text-gray-700 text-sm font-bold mb-2">
                      Postinumero
                    </label>
                    <input
                      ref={register({ required: true })}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                      type="text"
                      placeholder="00500"
                      name="user_metadata.address.zip">
                    </input>
                    {errors.user_metadata?.address?.zip && <p className="text-red-500 text-xs italic">Postinumero on pakollinen tieto</p>}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                      Sähköposti
                    </label>
                    <input
                      ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                      type="text"
                      placeholder="johnny@apple.com"
                      name="email">
                    </input>
                    {errors.email && <p className="text-red-500 text-xs italic">Sähköposti on pakollinen kenttä</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                      Salasana
                    </label>
                    <input
                      ref={register({ required: true })}
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                      name="password"
                      type="password"
                      placeholder="******************">
                    </input>
                    {errors.password && <p className="text-red-500 text-xs italic">Salasana on pakollinen kenttä</p>}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      className={`bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${signingUp && 'opacity-50 cursor-not-allowed'}`}
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
        </div>
      </main>
    </Layout>
  )
}