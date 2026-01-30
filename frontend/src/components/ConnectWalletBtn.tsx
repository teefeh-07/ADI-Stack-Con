import React from 'react';
import { showConnect } from '@stacks/connect';

export const ConnectWalletBtn = ({ userSession }) => {
    const authenticate = () => {
        showConnect({
            appDetails: {
                name: 'ADI-Stack-Con',
                icon: window.location.origin + '/logo.png',
            },
            redirectTo: '/',
            onFinish: () => {
                window.location.reload();
            },
            userSession,
        });
    };

    return (
        <button onClick={authenticate} className="btn-connect">
            Connect Specific Wallet
        </button>
    );
};
