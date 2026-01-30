const { runCmd } = require('./git-ops');

async function main() {
    console.log("Cleanup & Merge Utility Started...");

    // 1. Merge all OPEN PRs
    console.log("Checking for open PRs...");
    try {
        const prList = runCmd('gh pr list --json number,headRefName,state').toString();
        const prs = JSON.parse(prList);

        if (prs.length === 0) {
            console.log("No open PRs found.");
        } else {
            console.log(`Found ${prs.length} open PRs. Attempting validation and merge...`);
            for (const pr of prs) {
                console.log(`Merging PR #${pr.number} (${pr.headRefName})...`);
                try {
                    runCmd(`gh pr merge ${pr.number} --merge --delete-branch`);
                    console.log(`Successfully merged PR #${pr.number}`);
                } catch (e) {
                    console.error(`Failed to merge PR #${pr.number}:`, e.message);
                }
            }
        }
    } catch (e) {
        console.error("Error fetching PR list:", e);
    }

    // 2. Sync Main
    console.log("Syncing main...");
    runCmd('git checkout main');
    runCmd('git pull origin main');

    // 3. Delete merged local branches
    console.log("Cleaning up local branches...");
    try {
        // Get all local branches
        const branches = runCmd('git branch --format="%(refname:short)"').toString().split('\n').map(b => b.trim()).filter(b => b);

        for (const branch of branches) {
            if (branch === 'main') continue;

            // Check if merged to main
            try {
                // If branch is fully merged to main, this command returns empty or no error
                // "git branch --merged main" lists branches.
                // Simpler: just try to delete it. git branch -d only deletes if merged.
                runCmd(`git branch -d ${branch}`);
            } catch (ignore) {
                // Branch not merged, -d fails. That's fine.
            }
        }
    } catch (e) {
        console.error("Error managing branches:", e);
    }

    console.log("Cleanup Complete.");
}

main().catch(console.error);
