// @ts-check
const { test, expect } = require('@playwright/test');

// test('has laravel text', async ({ page }) => {
//   await page.goto('http://127.0.0.1:8000');

//   await expect(page.getByText('You have arrived')).toBeVisible();
// });


test('has laravel text', async ({ page }) => {
  await page.goto('https://laravel.com/');

  await expect(page.getByText('The PHP Framework')).toBeVisible();
});

