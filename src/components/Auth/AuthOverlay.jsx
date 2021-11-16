import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import LoginForm from './LoginForm'

const AuthOverlay = () => {
  const identity = useIdentityContext()

  const { register, handleSubmit, errors } = useForm()
  const [formError, setFormError] = useState()
  const [formProcessing, setFormProcessing] = useState(false)
  const [forceShowOverlay, setForceShowOverlay] = useState(false)

  useEffect(() => {
    if (identity.provisionalUser) {
      setForceShowOverlay('Tarkista sähköpostistasi varmistus viesti!')
      const timeoutId = setTimeout(() => setForceShowOverlay(false), 5000)
      return () => clearTimeout(timeoutId)
    }
  }, [identity.provisionalUser])

  const onSubmit = async (data) => {
    setFormProcessing(true)
    setFormError()

    await identity.completeUrlTokenTwoStep(data)
      .catch(_ => setFormError('Teknisiä ongelmia... Kokeile myöhemmin uudestaan kiitos.'))

    setFormProcessing(false)
  }

  return (
    <>
      {(identity.urlToken || forceShowOverlay) &&
        <div>
          <div>

            {identity.urlToken?.type === "confirmation" &&
              <p>Confirming User...</p>
            }
            {identity.urlToken?.type === "email_change" && (
              identity.user
                ? <p>Changing Email...</p>
                : <>
                  <p>In order to confirm your email change, you must log in with your prior credentials.</p>
                  <LoginForm />
                </>
            )}
            {forceShowOverlay &&
              <p>{forceShowOverlay}</p>
            }
            {(identity.urlToken?.type === "passwordRecovery" || identity.urlToken?.type === "invite") &&
              <>
                {identity.urlToken.type === "passwordRecovery" &&
                  <h2>Reset Password</h2>
                }
                {identity.urlToken.type === "invite" &&
                  <>
                    <h2>Welcome</h2>
                    <p className="mb-0">Let's complete the rest of your account info</p>
                  </>
                }
                <form onSubmit={handleSubmit(onSubmit)}>
                  {identity.urlToken.type === "invite" &&
                    <div className="input-container">
                      <label htmlFor="user_metadata.full_name">
                        Etu-j ja sukunimi
                      </label>
                      <input
                        ref={register({ required: true })}
                        className={`${formProcessing}`}
                        disabled={formProcessing}
                        name="user_metadata.full_name"
                        type="text"
                        placeholder="Etu- ja sukunimi">
                      </input>
                      {errors.password && <p className="warning">Salasana on pakollinen kenttä</p>}
                    </div>
                  }
                  <div className="input-container">
                    <label htmlFor="password">
                     Uusi Salasana
                    </label>
                    <input
                      ref={register({ required: true })}
                      className={`${formProcessing}`}
                      disabled={formProcessing}
                      name="password"
                      type="password"
                      placeholder="Salasana*">
                    </input>
                    {errors.password && <p className="warning">Password is required</p>}
                  </div>
                  <div className="netlify-identity-btn-container">
                    <button
                      className={`button ${formProcessing}`}
                      disabled={formProcessing}
                      type="submit">
                      Aseta uusi salasana
                </button>
                  </div>
                  {formError &&
                    <div>
                      <p className="warning">Öööh. Teknisia ongelmia. Pahoittelut.</p>
                    </div>
                  }
                </form>
              </>
            }
          </div>
        </div>
      }
    </>
  )
}

export default AuthOverlay