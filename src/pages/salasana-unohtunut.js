import React, { useState, useEffect } from "react"
import { navigate } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useForm } from "react-hook-form";

import Layout from "../components/layout"

export default () => {
  const identity = useIdentityContext()
  const { register, handleSubmit, errors } = useForm()
  const [formProcessing, setFormProcessing] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const onSubmit = async (data) => {
    setFormProcessing(true)
    await identity
      .sendPasswordRecovery({ email: data.email })
      .catch(_ => _)
    setFormProcessing(false)
    setFormSubmitted(true)
  }

  // Current users don't need to confuse themselves
  useEffect(() => {
    identity.user && navigate('/portfolio')
  }, [identity.user])

  return (
    <Layout>
      <main className="netlify-identity-page forgotten-password-page">
        <div>
          <div>
            <h1 className="px-4 pt-5 text-2xl text-left text-teal-500 font-bold sm:text-3xl">
              Salasana unohtonut
            </h1>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {formSubmitted ?
                  <div>
                    <p>Kiitos! Jos tilisi on olemassa lähetämme sähköpostin, jonka kautta voit uusia salasanasi.</p>
                  </div>
                  : <>
                    <div className="input-container">
                      <label htmlFor="email">
                        Sähköposti
                      </label>
                      <input
                        ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formProcessing && 'disabled'}`}
                        type="email"
                        placeholder="Sähköposti*"
                        name="email">
                      </input>
                      {errors.email && <p className="warning">Sähköposti on pakollinen kenttä</p>}
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className={`button ${formProcessing}`}
                        type="submit">
                        Uusi salasana
                      </button>
                    </div>
                  </>
                }
              </form>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}