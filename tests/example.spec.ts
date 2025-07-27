import { test, expect } from '@playwright/test';

test('It renders successfully', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const appRoot = page.locator('#root');
  await expect(appRoot).toBeVisible();
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
