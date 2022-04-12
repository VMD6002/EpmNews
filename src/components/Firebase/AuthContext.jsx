import { useContext, useState, useEffect, createContext } from "react"
import { auth } from "./firebase"

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
   
  async function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email , password)
      .then(()=>{
          // send verification mail.
        auth.currentUser.sendEmailVerification();
      })
      .catch(alert);
  }

  async function deltAccount() {
    return  auth.currentUser.delete()
  }

  async function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
    .then (() => {
      if( auth.currentUser.emailVerified !== true){
        auth.currentUser.delete();
      }
    }) 
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updatePassword,
    deltAccount
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
