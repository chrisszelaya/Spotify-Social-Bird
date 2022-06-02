import React, { createContext, useState } from 'react';

const AccessTokenContext = createContext('');

function AccessTokenProvider({ children }) {
    const [token, setAccessToken] = useState('');
    const [user, setUser] = useState(''); 
    const obj = { token: token, 
        setAccessToken: setAccessToken, 
    user: user, 
    setUser: setUser,
    }
    return (
    <AccessTokenContext.Provider value={obj}>
      {children}
    </AccessTokenContext.Provider>
    );
}

export default AccessTokenProvider;
export { AccessTokenContext };