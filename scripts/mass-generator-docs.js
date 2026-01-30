const { performMicroTask, runCmd } = require('./git-ops');
const fs = require('fs');
const path = require('path');

function append(filePath, content) {
    const p = path.resolve(filePath);
    if (!fs.existsSync(p)) {
        fs.mkdirSync(path.dirname(p), { recursive: true });
        fs.writeFileSync(p, '');
    }
    fs.appendFileSync(p, content);
}

async function main() {
    const filePath = 'README.md';

    // 1. Header
    await performMicroTask(
        "Docs Header",
        "docs/readme-header",
        "docs: add readme header",
        "docs: Create README Header",
        "Initializes the README with project title and description.",
        () => {
            append(filePath, `# ADI-Stack-Con\n\nA professional Stacks Blockchain project.\n\n`);
        }
    );

    // 2. Badges
    await performMicroTask(
        "Docs Badges",
        "docs/readme-badges",
        "docs: add status badges",
        "docs: Add Project Badges",
        "Adds build status and version badges to the README.",
        () => {
            append(filePath, `![Build Status](https://img.shields.io/badge/build-passing-brightgreen) ![Version](https://img.shields.io/badge/version-1.0.0-blue)\n\n`);
        }
    );

    // 3. Install
    await performMicroTask(
        "Docs Install",
        "docs/readme-install",
        "docs: add install instructions",
        "docs: Add Installation Guide",
        "Documents the installation steps for the project.",
        () => {
            append(filePath, `## Installation\n\n\`\`\`bash\nnpm install\ncd frontend && npm install\n\`\`\`\n\n`);
        }
    );

    // 4. Features
    await performMicroTask(
        "Docs Features",
        "docs/readme-features",
        "docs: add features list",
        "docs: Document Features",
        "Lists the key features including WalletConnect and Chainhooks.",
        () => {
            append(filePath, `## Features\n\n- Stacks Connect Integration\n- WalletConnect Support\n- Chainhooks Real-time Events\n- Clarity Smart Contracts (v4)\n\n`);
        }
    );

    // 5. License
    await performMicroTask(
        "Docs License",
        "docs/readme-license",
        "docs: add license info",
        "docs: Add License",
        "Adds the project licensing information.",
        () => {
            append(filePath, `## License\n\nMIT\n`);
        }
    );
}

main().catch(console.error);
