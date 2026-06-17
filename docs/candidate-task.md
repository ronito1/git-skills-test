# Candidate Git Task

Complete the steps below using Git and GitHub.

## Task

1. Clone the repository.
2. Create a new branch from `main` named `feature/improve-startup-analysis`.
3. Open [`prompts/startup-analysis.txt`](../prompts/startup-analysis.txt).
4. The current prompt is:
   `Analyze the company and provide a summary.`
5. Update the prompt so that it also returns:
   - `industry`
   - `founder_name`
   - `country`
   - `saudi_relevance_score`
   - `confidence_score`
6. Return the result as valid JSON.
7. Use snake_case for all JSON field names.
8. Ensure `saudi_relevance_score` and `confidence_score` are numbers from `1` to `10`.
9. In [`scripts/run-analysis.js`](../scripts/run-analysis.js), add the `requiredKeys` constant with exactly these values:
   - `summary`
   - `industry`
   - `founder_name`
   - `country`
   - `saudi_relevance_score`
   - `confidence_score`
10. Run:
   `node scripts/run-analysis.js "Tamara"`
11. Confirm that the output includes the summary plus all five required fields in structured JSON.
12. In [`docs/candidate-notes.md`](candidate-notes.md), add:
   - your full name
   - the branch name you used
   - a one-line summary of your change
13. Commit your changes with a clear commit message.
14. Push the branch to GitHub.
15. Open a pull request into `main`.
16. Merge the pull request.
17. Send me the pull request link once done.

## What this tests

- creating a branch
- updating a prompt file
- following an output contract
- making a focused code change in a local runner
- verifying the result from the command line
- staging and committing changes
- pushing a branch
- opening and merging a PR
