import React, {createContext, useCallback, useContext, useEffect, useState} from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({children}) {
  //Hook

  // declare usefull auth states

  const [type, setType] = useState('NOAUTH') // "SCHOOL" "PARENT" "BRANCH" "NOAUTH"
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [checked, setChecked] = useState(false)
  const [privileges, setPrivileges] = useState([])

  // const myUserPermissions = useQuery(
  //   `myUserPermissions${user?.id}`,
  //   async () =>
  //     await axios.get(
  //       `${process.env.REACT_APP_BACKEND_URL}users/user-permissions/${user?.id}`,
  //       {
  //         headers,
  //       }
  //     ),
  //   {
  //     keepPreviousData: true,
  //     refetchOnWindowFocus: false,
  //     retry: false,
  //     enabled: !!token && !!user?.id,
  //     onSuccess: (res) => {
  //       setPrivileges(res?.data?.data);
  //     },
  //   }
  // );

  //Function
  const login = useCallback((token, user) => {
    setType(type)
    setToken(token)
    setUser(user)
    setPrivileges(privileges)
    localStorage.setItem(
      'nibAuthData',
      JSON.stringify({
        type,
        token,
        user,
        privileges,
      })
    )
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setType('NOAUTH')
    setToken(null)
    setPrivileges([])
    localStorage.setItem(
      'nibAuthData',
      JSON.stringify({
        type,
        token,
        user,
        privileges,
      })
    )
  }, [])

  let auth

  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('nibAuthData'))
    console.log({storedData})
    if (storedData) {
      if (storedData?.token) {
        auth = login(storedData?.token, storedData?.user)
      }
    } else {
      auth = login('NOAUTH', null, null, [])
    }
    setChecked(true)
  }, [auth])

  //Return
  return <AuthContext.Provider value={{login, logout, user}}>{children}</AuthContext.Provider>
}
