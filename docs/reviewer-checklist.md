# Reviewer Checklist

Use this checklist to evaluate the candidate.

## Verify the Git flow

- A feature branch was created from `main`.
- The branch name is `feature/add-priority`.
- The candidate committed only the intended changes.
- The commit message is clear.
- A pull request was opened against `main`.
- The pull request was merged correctly.
- The candidate shared the pull request link.

## Verify the file changes

- [`data/services.json`](../data/services.json) includes a `priority` field for every service.
- Each `priority` value is one of `high`, `medium`, or `low`.
- [`scripts/print-services.js`](../scripts/print-services.js) prints the `priority` for each service.
- [`docs/candidate-notes.md`](candidate-notes.md) exists and contains:
  - full name
  - branch name
  - one-line summary of the change

## Optional follow-up questions

- Ask how they chose each service priority value.
- Ask how they verified the script output after the change.
- Ask them to explain the difference between `git fetch`, `git pull`, and `git push`.
- Ask how they would update their branch if `main` changed before merge.
