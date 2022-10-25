import React, { createContext } from 'react';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const user = {displayNae:'Mehadi'};
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;