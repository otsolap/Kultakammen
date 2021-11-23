import React, { useState, useEffect } from 'react'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { useForm } from "react-hook-form";
import { navigate, Link } from 'gatsby';


function LoginForm({ navigateTarget }) {

  const identity = useIdentityContext()
  const { register, handleSubmit, errors } = useForm()
  const [formError, setFormError] = useState(false)
  const [loggingIn, setLoggingIn] = useState(false)

  // When cold-loading a PrivateContent page, the user can get redirected to
  // /login, but once the User hydrates from LocalStorage, we want to send them
  // back ASAP
  useEffect(() => {
    navigateTarget && identity.user && navigate(navigateTarget)
  }, [navigateTarget, identity.user])

  const onSubmit = async (data) => {
    setLoggingIn(true)
    setFormError(false)

    await identity
      .login({ email: data.email, password: data.password })
      .then(() => {
        setLoggingIn(false)
        navigateTarget && navigate(navigateTarget)
      })
      .catch(e => {
        setLoggingIn(false)
        setFormError(e.message)
      })
  }

  return (
    identity.user
      ? <div>
        <p>Olet jo sisäänkirjautunut!</p>
      </div>
      : identity.provisionalUser ?
        <div>
          <p>Tilisi ei ole vielä vahvistettu. Tarkista sähköpostisi</p>
        </div>
        : <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <label htmlFor="email">
                Sähköposti
            </label>
              <input
                ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                className={`${loggingIn && 'disabled'}`}
                type="text"
                placeholder="Sähköposti*"
                name="email">
              </input>
              {errors.email && <p className="text-red-500 text-xs italic">Sähköposti on pakollinen kenttä</p>}
            </div>
            <div className="input-container">
              <label htmlFor="password">
                Salasana
            </label>
              <input
                ref={register({ required: true })}
                className={`${loggingIn && 'disabled'}`}
                name="password"
                type="password"
                placeholder="Salasana*">
              </input>
              {errors.password && <p>Salasana on pakollinen kenttä</p>}
            </div>
            <div>
              <button
                className={`button ${loggingIn}`}
                type="submit">
                Kirjaudu sisään
              </button>
            </div>
            <div className="forgot-password" >
            <Link to="/salasana-unohtunut/">
                Unohditko salasanan? :-D
              </Link>
              </div>
            <div>
              {formError && <p>{formError}</p>}
            </div>
          </form>
        </div>

  )
}

export default LoginForm;