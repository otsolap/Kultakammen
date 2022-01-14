import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity-gotrue'
import Layout from '../../components/layout';

const PrivateContent = ({ as: Comp, rolesAllowed, callbackPath, ...props }) => {
  const identity = useIdentityContext()

  return (
    identity.user
      ? ((rolesAllowed && rolesAllowed.some(r => identity.user?.app_metadata?.roles?.indexOf(r) >= 0)) || !rolesAllowed)
        ? <Comp {...props} />
        : <Unauthorized />
      : <Unauthorized callbackPath={callbackPath} />

  )
}


const Unauthorized = ({ callbackPath }) => {
  const identity = useIdentityContext()
  const [processing, setProcessing] = useState(false)

  const updateRoles = ({ add, remove }) => {
    setProcessing(true)
    identity.authorizedFetch('/api/update-role', {
      method: 'POST',
      body: JSON.stringify({
        action: add ? 'add' : 'remove',
        role: add || remove
      })
    })
      .then(identity.refreshUser)
      .finally(() => setProcessing(false))
  }

  useEffect(() => {
    callbackPath && navigate('/kirjaudu', { state: { navigateTarget: callbackPath } })
  }, [callbackPath])




  return (
    callbackPath
      ? <> </>
      : 
      <Layout>
      <main className="netlify-identity-page">
          <div>
            <h1>
              Ei pääsyoikeutta
              </h1>
              <p>Hei! Olen vahvistanut sinun olevasi oikea käyttäjä. Kiitoksia kärsivällisyydestäni.</p>
              <p> Nyt enää sinun tarvitsee vain lähettää pyyntö painamalla alla olevaa nappia.
                Sen jälkeen lambda-funktioni antaa sinulle oikeudet nähdä Portfolio-sivun. Kiitos!
              </p>
              {identity.user &&
              <div className="netlify-identity-btn-container">
                {!identity.user.app_metadata?.roles?.includes('user') &&
                  <button
                    className={`button ${processing}`}
                    disabled={processing}
                    onClick={() => updateRoles({ add: 'user' })}
                  >
                   Salli minulle pääsy
                  </button>
                }
              </div>
            }
            </div>
      </main>
      </Layout>
  )
}

export default PrivateContent