import { test, expect } from "@playwright/test";

test('Assertions Demo', async ({ page }) => {
    await page.goto('http://kitchen.applitools.com');
    await page.pause();

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen');
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('Garden');
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/);
    await expect(page).toHaveScreenshot();

})