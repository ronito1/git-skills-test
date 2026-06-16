# Candidate Git Task

Complete the steps below using Git and GitHub.

## Task

1. Create a new branch from `main` named `feature/add-priority`.
2. In [`data/services.json`](../data/services.json), add a `priority` field to each service.
   - Use only these values: `high`, `medium`, `low`
3. In [`scripts/print-services.js`](../scripts/print-services.js), make sure the script prints the new `priority` field for every service.
4. Run:

```bash
node scripts/print-services.js
```

5. Update [`docs/candidate-notes.md`](candidate-notes.md) with:
   - your full name
   - the branch name you used
   - a one-line note describing the change you made
6. Commit your changes with a clear commit message.
7. Push the branch to GitHub.
8. Open a pull request into `main`.
9. Merge the pull request into `main`.

## What this tests

- creating a branch
- editing JSON data
- editing a small script
- running a basic command locally
- staging and committing changes
- pushing a branch
- opening and merging a PR
