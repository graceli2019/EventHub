/*
  Create tests/get-started.spec.ts 
*/

// Import test and expect from @playwright/test
import { Page, test, expect } from '@playwright/test';

// Set BASE_URL
const BASE_URL = 'https://eventhub.rahulshettyacademy.com';

// Create a helper function named openLoginPage that takes a Page object as an argument and navigates to the login page of the EventHub application
async function openLoginPage(page: Page) {

    // Use await before page.goto() and before assertions that wait for UI state
    // Playwright actions return promises and await prevents timing issues and flaky behavior
    // Navigate to login page
    await page.goto(`${BASE_URL}/login`);

    // Assert the Sign in to EventHub heading is visible
    await expect(page.getByRole('heading', { name: 'Sign in to EventHub' })).toBeVisible();
};

// Create a test named EventHub login page loads
// Use async ({ page }) in the test callback
test('EventHub login page loads', async ({ page }) => {

    // Call your openLoginPage(page) helper function to navigate to the login page
    await openLoginPage(page);

    // Assert the Email field located by placeholder you@email.com is visible
    await expect(page.getByPlaceholder('you@email.com')).toBeVisible();

    // Assert the Sign In button located by role button with name Sign In is visible
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
});

test('assert more UI elements on the login page', async ({ page }) => {
    // Navigate to /login again using the same helper
    await openLoginPage(page);

    // Assert the password field located by label Password is visible
    await expect(page.getByLabel('Password')).toBeVisible();

    // Assert the page URL contains /login
    await expect(page).toHaveURL(/\/login/);
}); 