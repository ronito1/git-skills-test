# Candidate Git Task

Complete the steps below using Git and GitHub.

## Task

1. Clone the repository.
2. Create a new branch from `main` named `feature/add-priority`.
3. In [`data/services.json`](../data/services.json), add a `priority` field to every service.
4. Use only these values for priority: `high`, `medium`, or `low`.
5. In [`scripts/print-services.js`](../scripts/print-services.js), update the script so it prints the `priority` field for each service.
6. Run:
   `node scripts/print-services.js`
7. In [`docs/candidate-notes.md`](candidate-notes.md), add:
   - your full name
   - the branch name you used
   - a one-line summary of your change
8. Commit your changes with a clear commit message.
9. Push the branch to GitHub.
10. Open a pull request into `main`.
11. Merge the pull request.
12. Send me the pull request link once done.

## What this tests

- creating a branch
- editing tracked files
- working with JSON data
- updating a small Node.js script
- verifying the result from the command line
- staging and committing changes
- pushing a branch
- opening and merging a PR
