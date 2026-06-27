import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    
    const Token=JSON.parse(sessionStorage.getItem('Token'));
   
    if(Token.authenticated){
        return children

    }
     
    else{
        return <Navigate to="/" />
    }
}

export default ProtectedRoute