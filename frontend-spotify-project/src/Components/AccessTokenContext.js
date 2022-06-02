import React, { createContext, useState } from 'react';

const AccessTokenContext = createContext('');

function AccessTokenProvider({ children }) {
    const [token, setAccessToken] = useState('');
    const obj = { token: token, 
        setAccessToken: setAccessToken }
    return (
    <AccessTokenContext.Provider value={obj}>
      {children}
    </AccessTokenContext.Provider>
    );
}

export default AccessTokenProvider;
export { AccessTokenContext };