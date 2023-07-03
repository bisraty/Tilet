import React, {createContext, useCallback, useContext, useEffect, useState} from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({children}) {
  const [token, setToken] = useState('')
  const [user, setUser] = useState(null)

  const login = useCallback((token, user) => {
    setToken(token)
    setUser(user)
    localStorage.setItem(
      'tiletAuthData',
      JSON.stringify({
        token,
        user,
      })
    )
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setToken(null)
    localStorage.setItem(
      'tiletAuthData',
      JSON.stringify({
        token,
        user,
      })
    )
  }, [])

  let auth

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('tiletAuthData'))
    console.log({storedData})
    if (storedData) {
      if (storedData?.token) {
        auth = login(storedData?.token, storedData?.user)
      }
    } else {
      auth = login(null, null)
    }
    // setChecked(true)
  }, [auth])

  //Return
  return (
    <AuthContext.Provider value={{login, logout, user, token}}>{children}</AuthContext.Provider>
  )
}
