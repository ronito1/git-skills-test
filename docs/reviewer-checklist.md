# Reviewer Checklist

Use this checklist to evaluate the candidate.

## Verify the Git flow

- A feature branch was created from `main`.
- The branch name is sensible, ideally `feature/update-team` or similar.
- The candidate committed only the intended changes.
- The commit message is clear.
- A pull request was opened against `main`.
- The pull request was merged correctly.

## Verify the file changes

- [`TEAM.md`](../TEAM.md) contains the candidate's first name as a new bullet.
- [`docs/candidate-notes.md`](candidate-notes.md) exists and contains:
  - full name
  - branch name
  - one-line summary of the change

## Optional follow-up questions

- Ask them to explain the difference between `git fetch`, `git pull`, and `git push`.
- Ask how they would update their branch if `main` changed before merge.
