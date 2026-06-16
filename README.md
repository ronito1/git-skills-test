# Git Skills Test Repo

This repository is intentionally small. It tests basic Git and GitHub workflow plus a tiny data-and-script change.

## What the candidate should do

1. Create a new feature branch from `main`.
2. Follow the task in [`docs/candidate-task.md`](docs/candidate-task.md).
3. Commit the changes to the feature branch.
4. Push the branch and open a pull request.
5. Merge the pull request back into `main`.

## What you should review

Use [`docs/reviewer-checklist.md`](docs/reviewer-checklist.md) to verify the candidate's work.

## Files they should edit

- [`data/services.json`](data/services.json)
- [`scripts/print-services.js`](scripts/print-services.js)
- [`docs/candidate-notes.md`](docs/candidate-notes.md)

## Local check

Run this command to see the current output:

```bash
node scripts/print-services.js
```
