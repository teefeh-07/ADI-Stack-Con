import { createContext, useContext, useState } from 'react';
import { UserSession, AppConfig } from '@stacks/auth';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const appConfig = new AppConfig(['store_write', 'publish_data']);
    const userSession = new UserSession({ appConfig });
    
    return (
        <AppContext.Provider value={{ userSession }}>
            {children}
        </AppContext.Provider>
    );
};
