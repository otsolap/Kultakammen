import React, { useState, useEffect } from "react"
import { navigate } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useForm } from "react-hook-form";

import Layout from "../components/layout"

const ForgotPassword = () => {
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
            <h1>
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
                        className={`${formProcessing && 'disabled'}`}
                        type="email"
                        placeholder="Sähköposti*"
                        name="email">
                      </input>
                      {errors.email && <p className="warning">Sähköposti on pakollinen kenttä</p>}
                    </div>
                    <div className="netlify-identity-btn-container">
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

export default ForgotPassword;