import React from "react";

//vai conter um componente
const AuthContext = React.createContext({
  isLoggedIn: false
});

export default AuthContext;