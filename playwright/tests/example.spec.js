// @ts-check
const { test, expect } = require('@playwright/test');

test('has laravel text', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000');

  await expect(page.getByText('You have arrived')).toBeVisible();
});
