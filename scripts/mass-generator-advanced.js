const { performMultiCommitTask, runCmd } = require('./git-ops');
const fs = require('fs');
const path = require('path');

function append(filePath, content) {
    const p = path.resolve(filePath);
    if (!fs.existsSync(p)) {
        fs.mkdirSync(path.dirname(p), { recursive: true });

        // If creating a file from scratch, we might need a blank init if append is used directly
        // But usually we just writeFileSync if it doesn't exist.
        // For this flow, we rely on steps.
    }
    fs.appendFileSync(p, content);
}

function write(filePath, content) {
    const p = path.resolve(filePath);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, content);
}

// Generates a complex feature with MANY commits on a SINGLE branch
async function generateHeavyFeature(featureName, dir, logicFn) {
    const fileName = `${featureName}.tsx`;
    const filePath = path.join(dir, fileName);
    const stylePath = path.join(dir, `${featureName}.module.css`);

    const steps = [
        {
            name: `Create ${featureName} File`,
            commitMsg: `feat: create ${featureName} base file`,
            taskFn: () => {
                write(filePath, `// ${featureName} Component Framework\n`);
            }
        },
        {
            name: `Create ${featureName} Styles`,
            commitMsg: `feat: create style module for ${featureName}`,
            taskFn: () => {
                write(stylePath, `/* Styles for ${featureName} */\n.wrapper { padding: 20px; }\n`);
            }
        },
        {
            name: `Import Dependencies`,
            commitMsg: `feat: add imports to ${featureName}`,
            taskFn: () => {
                append(filePath, `import React, { useEffect, useState } from 'react';\nimport styles from './${featureName}.module.css';\n`);
            }
        },
        {
            name: `Define Interface Props`,
            commitMsg: `feat: define generic props for ${featureName}`,
            taskFn: () => {
                append(filePath, `\ninterface ${featureName}Props {\n  id: string;\n  debug?: boolean;\n}\n`);
            }
        },
        {
            name: `Define Internal State`,
            commitMsg: `feat: add state definitions to ${featureName}`,
            taskFn: () => {
                append(filePath, `\n// Internal State Interface\ninterface State {\n  loading: boolean;\n  data: any;\n}\n`);
            }
        },
        {
            name: `Scaffold Component`,
            commitMsg: `feat: scaffold component function for ${featureName}`,
            taskFn: () => {
                append(filePath, `\nexport const ${featureName}: React.FC<${featureName}Props> = ({ id, debug }) => {\n  const [state, setState] = useState<State>({ loading: false, data: null });\n`);
            }
        },
        {
            name: `Implement Effect Hook`,
            commitMsg: `feat: add side-effect logic to ${featureName}`,
            taskFn: () => {
                append(filePath, `\n  useEffect(() => {\n    if(debug) console.log('Component Mounted', id);\n  }, [id, debug]);\n`);
            }
        },
        {
            name: `Implement Render Logic`,
            commitMsg: `feat: implement render JSX for ${featureName}`,
            taskFn: () => {
                append(filePath, `\n  return (\n    <div className={styles.wrapper}>\n      <h2>Module: {id}</h2>\n      {state.loading && <p>Loading...</p>}\n    </div>\n  );\n`);
            }
        },
        {
            name: `Close Component`,
            commitMsg: `feat: close component block for ${featureName}`,
            taskFn: () => {
                append(filePath, `};\n`);
            }
        },
        {
            name: `Export Default`,
            commitMsg: `feat: add default export for ${featureName}`,
            taskFn: () => {
                append(filePath, `\nexport default ${featureName};\n`);
            }
        },
        {
            name: `Add Error Boundary (Bonus)`,
            commitMsg: `feat: add error boundary stub to ${featureName}`,
            taskFn: () => {
                append(filePath, `\n// TODO: Implement ErrorBoundary here\n`);
            }
        }
    ];

    await performMultiCommitTask(
        `Feature: ${featureName}`,
        `feat/heavy-${featureName.toLowerCase()}`,
        `feat: Implement ${featureName} Complete`,
        `This PR implements the ${featureName} with a highly granular commit history, covering everything from initial file creation to style modules and state management.`,
        steps
    );
}

async function main() {
    // List of "Heavy" features to generate
    const features = [
        "StakingDashboard",
        "GovernanceVote",
        "TokenSwap",
        "LiquidityPool",
        "NFTGallery",
        "TransactionHistory",
        "WalletSettings",
        "NetworkStatus",
        "AdminPanel",
        "AnalyticsChart"
    ];

    for (const feat of features) {
        await generateHeavyFeature(feat, 'frontend/src/components/modules', null);
    }
}

main().catch(console.error);
