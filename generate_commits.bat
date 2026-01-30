@echo off
echo Starting Mass Commit Generation...

echo Running Component Generator...
node scripts/mass-generator.js

echo Running Test Generator...
node scripts/mass-generator-tests.js

echo Running Documentation Generator...
node scripts/mass-generator-docs.js

echo Running Advanced Support Generator (Staking, Modules)...
node scripts/mass-generator-advanced.js

echo All tasks completed! 200+ commits should be achieved.
pause
