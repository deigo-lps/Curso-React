import React from "react";

//vai conter um componente
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: ()=>{}
});

export default AuthContext;