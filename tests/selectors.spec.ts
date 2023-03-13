import { test, expect } from '@playwright/test';

test('Selectors Demo', async ({page}) => {
await page.goto('https://www.saucedemo.com/')
await page.pause()
await page.click('id=user-name');
await page.locator('id=user-name').fill('Edison');
await page.locator('#login-button').click();
})