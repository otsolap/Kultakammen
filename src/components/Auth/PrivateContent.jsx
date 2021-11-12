import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
import { useIdentityContext } from 'react-netlify-identity-gotrue'

// Component wrapper with optional role-specificity and optional redirect (otherwise
// just shows the unauthorized message)

// Allows the following features:
// - For logged out folks, this component's rendering should force a redirect to /login
//   with a callback so that after the user logs in, they will be pushed back to the content
// - For logged in folks that don't meet the role-gating requirements, the 'Unauthorized'
//   message should be displayed 
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
      : <main className="max-w-2xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <h1 className="px-4 pt-5 text-2xl text-left text-teal-500 font-bold sm:text-3xl">
              Unauthorized
              </h1>

              {identity.user &&
              <div className="pt-8 flex justify-around">
                {!identity.user.app_metadata?.roles?.includes('user') &&
                  <button
                    className={`bg-blue-500 text-white p-2 m-2 rounded text-m font-bold ${processing && 'opacity-50'}`}
                    disabled={processing}
                    onClick={() => updateRoles({ add: 'user' })}
                  >
                    Grant me access!
                  </button>
                }
                
              </div>
            }
            </div>
        </div>
      </main>
  )
}

export default PrivateContent