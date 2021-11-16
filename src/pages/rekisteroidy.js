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
          <div>
            <p>Olet jo sisäänkirjautunut</p>
          </div>
          : <div>
            <form

              onSubmit={handleSubmit(onSubmit)}>

              <div className="input-container">
                <label htmlFor="user_metadata.full_name">
                  Etu- ja sukunimi
                </label>
                <input
                  ref={register({ required: true })}
                  className={`${signingUp && 'disabled'}`}
                  type="text"
                  placeholder="Etu- ja sukunimi*"
                  name="user_metadata.full_name">
                </input>
                {errors.user_metadata?.full_name && <p className="warning">Etu- ja sukunimi on pakollinen kenttä</p>}
              </div>

              <div className="input-container">
                <label htmlFor="user_metadata.phone_number">
                  Puhelinnumero
                </label>
                <input
                  ref={register({ pattern: /^[0-9]{10}$/ })}
                  className={`${signingUp && 'disabled'}`}
                  type="tel"
                  placeholder="Puhelinnumero*"
                  name="user_metadata.phone_number">
                </input>
                {errors.user_metadata?.phone_number && <p className="warning">Kaikki yhteen putkeen, esim: 0401234567</p>}
              </div>

              <div className="input-container">
                <label htmlFor="user_metadata.address.street">
                  Osoite
                </label>
                <input
                  ref={register({ required: true })}
                  className={`${signingUp && 'disabled'}`}
                  type="text"
                  placeholder="Osoite*"
                  name="user_metadata.address.street">
                </input>
                {errors.user_metadata?.address?.street && <p className="warning">Osoite on pakollinen tieto</p>}
              </div>

              <div className="input-container">
                <label htmlFor="user_metadata.address.city">
                  Kaupunki
                </label>
                <input
                  ref={register({ required: true })}
                  className={`${signingUp && 'disabled'}`}
                  type="text"
                  placeholder="Kaupunki*"
                  name="user_metadata.address.city">
                </input>
                {errors.user_metadata?.address?.city && <p className="warning">Kaupunki on pakollinen kenttä</p>}
              </div>

              <div className="input-container">
                <label htmlFor="user_metadata.address.state">
                  Postitoimipaikka
                </label>
                <input
                  ref={register({ required: true })}
                  className={`${signingUp && 'disabled'}`}
                  type="text"
                  placeholder="Postitoimipaikka*"
                  name="user_metadata.address.state">
                </input>
                {errors.user_metadata?.address?.state && <p className="warning">Postitoimipaikka</p>}
              </div>

              <div className="input-container">
                <label htmlFor="user_metadata.address.zip">
                  Postinumero
                </label>
                <input
                  ref={register({ required: true })}
                  className={`${signingUp && 'disabled'}`}
                  type="text"
                  placeholder="Postinumero*"
                  name="user_metadata.address.zip">
                </input>
                {errors.user_metadata?.address?.zip && <p className="warning">Postinumero on pakollinen tieto</p>}
              </div>

              <div className="input-container">
                <label htmlFor="email">
                  Sähköposti
                </label>
                <input
                  ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                  className={`${signingUp && 'disabled'}`}
                  type="email"
                  placeholder="Sähköposti*"
                  name="email">
                </input>
                {errors.email && <p className="warning">Sähköposti on pakollinen kenttä</p>}
              </div>
              <div className="input-container">
                <label htmlFor="password">
                  Salasana
                </label>
                <input
                  ref={register({ required: true })}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${signingUp && 'disabled'}`}
                  name="password"
                  type="password"
                  placeholder="Salasana*">
                </input>
                {errors.password && <p className="warning">Salasana on pakollinen kenttä</p>}
              </div>

              <div class="register-btn-container">
                <button
                  className={`button ${signingUp}`}
                  type="submit">
                  Rekisteröidy
                </button>
              </div>

              <div className="pt-2">
                {formError && <p className="warning">Jotain meni pieleen.</p>}
              </div>
            </form>
          </div>
        }
      </div>
    </Layout>
  )
}