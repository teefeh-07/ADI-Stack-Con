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

async function generateTestMicroCommits(name, dir, featureName) {
    // Determine test path
    const testDir = path.join(dir, '__tests__');
    const filePath = path.join(testDir, `${name}.test.tsx`);
    const baseBranch = `test/${featureName.toLowerCase()}`;

    // Step 1: Create Test File
    await performMicroTask(
        `Create ${name} Test File`,
        `${baseBranch}-init`,
        `test: create ${name} test file`,
        `test: Init Support for ${name}`,
        `Initializes the test suite for valdiating ${name} behavior.`,
        () => {
            append(filePath, `// Tests for ${name}\n`);
        }
    );

    // Step 2: Test Imports
    await performMicroTask(
        `Add ${name} Test Imports`,
        `${baseBranch}-imports`,
        `test: add imports for ${name}`,
        `test: Import Deps for ${name}`,
        `Imports testing library and the component under test (${name}).`,
        () => {
            const imports = `import React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport ${name} from '../${name}';\n\n`;
            const current = fs.readFileSync(filePath, 'utf8');
            fs.writeFileSync(filePath, imports + current);
        }
    );

    // Step 3: Suite Setup
    await performMicroTask(
        `Describe ${name} Suite`,
        `${baseBranch}-suite`,
        `test: describe ${name} suite`,
        `test: Define Suite ${name}`,
        `Sets up the describe block for grouping ${name} tests.`,
        () => {
            append(filePath, `\ndescribe('${name} Component', () => {\n`);
        }
    );

    // Step 4: Render Test
    await performMicroTask(
        `Test ${name} Rendering`,
        `${baseBranch}-render`,
        `test: add render check for ${name}`,
        `test: Verify Render ${name}`,
        `Adds a test case to ensure ${name} renders without crashing.`,
        () => {
            append(filePath, `  it('renders correctly', () => {\n    render(<${name} />);\n    expect(screen.getByText('${name}')).toBeInTheDocument();\n  });\n`);
        }
    );

    // Step 5: Close Suite
    await performMicroTask(
        `Close ${name} Suite`,
        `${baseBranch}-close`,
        `test: finalize ${name} suite`,
        `test: Complete Suite ${name}`,
        `Closes the describe block and finalizes the test file syntax.`,
        () => {
            append(filePath, `});\n`);
        }
    );
}

async function main() {
    const components = [
        { name: 'Navbar', dir: 'frontend/src/components' },
        { name: 'Footer', dir: 'frontend/src/components' },
        { name: 'Card', dir: 'frontend/src/components' },
        { name: 'Modal', dir: 'frontend/src/components' },
        { name: 'Button', dir: 'frontend/src/components' },
        { name: 'Input', dir: 'frontend/src/components' },
        { name: 'Avatar', dir: 'frontend/src/components' },
        { name: 'Sidebar', dir: 'frontend/src/components' },
        { name: 'Loader', dir: 'frontend/src/components' },
        { name: 'Toast', dir: 'frontend/src/components' },
    ];

    // We only test components for now
    for (const item of components) {
        await generateTestMicroCommits(item.name, item.dir, `${item.name}`);
    }
}

main().catch(console.error);
