// @ts-check
const { test, expect } = require('@playwright/test');

test('has laravel text', async ({ page }) => {
  console.log('try if console log is working here')
  await page.goto('https://laravel.com/');
  //await page.goto('http://127.0.0.1:8000');

  //await expect(page.getByText('You have arrived')).toBeVisible();
  await expect(page.getByText('The PHP Framework')).toBeVisible();
});

