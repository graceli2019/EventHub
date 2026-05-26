# EventHub

This project uses Playwright for end-to-end testing.

## Running Tests Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run tests:
   ```bash
   npx playwright test
   ```

## Running on GitHub Actions

Tests are automatically run on every push and pull request to the `main` branch using GitHub Actions. See `.github/workflows/playwright.yml` for details.


## Project Structure
- `tests/` — Playwright test files

## Playwright Notes

**Difference between Playwright packages:**

- The `playwright` package provides the core Playwright library for browser automation and scripting. It is used for general browser automation tasks and can be used with various test runners or scripts.
- The `@playwright/test` package is a test runner built on top of Playwright, offering a complete test framework with features like test organization, assertions, and reporting, specifically designed for end-to-end testing.
## Resources
- [Playwright Documentation](https://playwright.dev/)
