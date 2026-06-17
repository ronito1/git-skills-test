# Reviewer Checklist

Use this checklist to evaluate the candidate.

## Verify the Git flow

- A feature branch was created from `main`.
- The branch name is `feature/improve-startup-analysis`.
- The candidate committed only the intended changes.
- The commit message is clear.
- A pull request was opened against `main`.
- The pull request was merged correctly.
- The candidate shared the pull request link.

## Verify the file changes

- [`prompts/startup-analysis.txt`](../prompts/startup-analysis.txt) asks for:
  - summary
  - industry
  - founder_name
  - country
  - saudi_relevance_score
  - confidence_score
- The prompt requires valid JSON output.
- The prompt requires snake_case field names.
- The prompt requires `saudi_relevance_score` and `confidence_score` to be numbers from `1` to `10`.
- [`scripts/run-analysis.js`](../scripts/run-analysis.js) defines `requiredKeys` as:
  - `summary`
  - `industry`
  - `founder_name`
  - `country`
  - `saudi_relevance_score`
  - `confidence_score`
- Running `node scripts/run-analysis.js "Tamara"` returns valid JSON with all required fields.
- [`docs/candidate-notes.md`](candidate-notes.md) exists and contains:
  - full name
  - branch name
  - one-line summary of the change

## Optional follow-up questions

- Ask why they chose their output structure.
- Ask how they would handle missing or uncertain founder data.
- Ask why `requiredKeys` is useful for validating structured output.
- Ask them to explain the difference between `git fetch`, `git pull`, and `git push`.
- Ask how they would update their branch if `main` changed before merge.
