# Reviewer Checklist

Use this checklist to evaluate the candidate.

## Verify the Git flow

- A feature branch was created from `main`.
- The branch name is sensible, ideally `feature/add-priority` or similar.
- The candidate committed only the intended changes.
- The commit message is clear.
- A pull request was opened against `main`.
- The pull request was merged correctly.

## Verify the file changes

- [`data/services.json`](../data/services.json) includes a `priority` field for every service.
- The `priority` values are reasonable and use only `high`, `medium`, or `low`.
- [`scripts/print-services.js`](../scripts/print-services.js) prints the new field.
- [`docs/candidate-notes.md`](candidate-notes.md) exists and contains:
  - full name
  - branch name
  - one-line summary of the change

## Optional follow-up questions

- Ask them to explain the difference between `git fetch`, `git pull`, and `git push`.
- Ask how they would update their branch if `main` changed before merge.
- Ask how they would validate JSON or test the script before opening the PR.
