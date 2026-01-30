const { performMicroTask, runCmd } = require('./git-ops');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = process.cwd();

async function main() {
    // Phase 1: Project Initialization
    await performMicroTask(
        "Init NPM",
        "chore/init-npm",
        "chore: initialize package.json",
        "chore: Initialize Node.js Project",
        "Initializes the root package.json for dependency management.",
        () => {
            if (!fs.existsSync('package.json')) {
                runCmd('npm init -y');
            }
        }
    );

    await performMicroTask(
        "Clarinet Configuration",
        "config/clarinet-toml",
        "config: add Clarinet.toml",
        "config: Setup Clarinet Project",
        "Sets up the Clarinet configuration with clarity_version 4 and epoch 3.3.",
        () => {
            const content = `[project]
name = "ADI-Stack-Contracts"
description = ""
authors = []
telemetry = true
cache_dir = "./.cache"

[contracts]
# Add contracts here

[repl]
clarity_wasm_mode = false
show_timings = false

[application]
project_name = "ADI-Stack-Contracts"
project_version = "1.0.0"
clarity_version = 4
epoch = "3.3"
`;
            fs.mkdirSync('backend', { recursive: true });
            fs.writeFileSync('backend/Clarinet.toml', content);
        }
    );

    // Phase 2: Dependency Installation (Granular)
    const deps = [
        "@stacks/connect",
        "@stacks/transactions",
        "@stacks/wallet-sdk",
        "@hirosystems/chainhooks-client",
        "@flownet/lib-clarity", // Bonus intuition
        "react",
        "react-dom",
        "vite"
    ];

    for (const dep of deps) {
        await performMicroTask(
            `Install ${dep}`,
            `deps/install-${dep.replace(/[@/]/g, '-')}`,
            `build: install ${dep}`,
            `build: Add Dependency ${dep}`,
            `Installs the ${dep} package to support project features.`,
            () => {
                runCmd(`npm install ${dep} --save-legacy-peer-deps`);
            }
        );
    }

    // Phase 3: Frontend Scaffold (Manual "Vite-like" setup to control commits)
    await performMicroTask(
        "Frontend Directory",
        "feat/frontend-dir",
        "feat: create frontend directory",
        "feat: Initialize Frontend Structure",
        "Creates the initial directory structure for the web application.",
        () => {
            fs.mkdirSync('frontend', { recursive: true });
            fs.mkdirSync('frontend/public', { recursive: true });
            fs.mkdirSync('frontend/src', { recursive: true });
            fs.mkdirSync('frontend/src/components', { recursive: true });
            fs.mkdirSync('frontend/src/hooks', { recursive: true });
            fs.mkdirSync('frontend/src/utils', { recursive: true });
        }
    );

    await performMicroTask(
        "Index HTML",
        "feat/index-html",
        "feat: add index.html",
        "feat: Add Entry Point",
        "Adds the main HTML entry point for the application.",
        () => {
            const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ADI-Stack-Con</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
            fs.writeFileSync('frontend/index.html', html);
        }
    );

    // Intuition Feature: Wallet Connect Context
    await performMicroTask(
        "Wallet Connect Context",
        "feat/wallet-context",
        "feat: add wallet connection context",
        "feat: Implement Wallet Context",
        "Adds a React Context to manage Stacks wallet connection state.",
        () => {
            const content = `import { createContext, useContext, useState } from 'react';
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
`;
            fs.writeFileSync('frontend/src/context.tsx', content);
        }
    );

    // Feature: Wallet Connect Button
    await performMicroTask(
        "Connect Wallet Button",
        "feat/connect-button",
        "feat: create connect wallet button",
        "feat: Add Wallet Connection UI",
        "Implement a reusable button component for initiating wallet connection.",
        () => {
            const content = `import React from 'react';
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
`;
            fs.writeFileSync('frontend/src/components/ConnectWalletBtn.tsx', content);
        }
    );

    // Feature: Transaction Helper
    await performMicroTask(
        "Transaction Helper",
        "feat/tx-helper",
        "feat: add transaction helper util",
        "feat: Implement Transaction Utilities",
        "Adds helper functions for creating and broadcasting Stacks transactions.",
        () => {
            const content = `import { makeContractCall, broadcastTransaction, AnchorMode } from '@stacks/transactions';

export async function callContract(functionName, args, network, privateKey) {
    const txOptions = {
        contractAddress: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
        contractName: 'adi-contract',
        functionName,
        functionArgs: args,
        senderKey: privateKey,
        validateWithAbi: true,
        network,
        anchorMode: AnchorMode.Any,
    };
    
    const transaction = await makeContractCall(txOptions);
    return broadcastTransaction(transaction, network);
}
`;
            fs.writeFileSync('frontend/src/utils/tx-helper.ts', content);
        }
    );

    // Feature Chainhooks setup
    await performMicroTask(
        "Chainhooks Setup",
        "feat/chainhooks-init",
        "feat: init chainhooks client",
        "feat: Setup Chainhooks Client",
        "Initializes the Chainhooks client for real-time blockchain event monitoring.",
        () => {
            const content = `
import { ChainhooksClient } from '@hirosystems/chainhooks-client';

export const chainhookClient = new ChainhooksClient({
    url: 'http://localhost:20456', 
    apiKey: 'dev-api-key' 
});
        `;
            fs.writeFileSync('frontend/src/utils/chainhooks.ts', content);
        }
    );
}

main().catch(console.error);
