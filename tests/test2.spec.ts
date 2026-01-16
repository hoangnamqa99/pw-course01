
import { test, expect } from "@playwright/test";

test('Bài 2: Product page ', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('a[href*="02-xpath-product-page.html"]').click();
    await page.locator('//button[@data-product-id="1"]').click({ clickCount: 3 });
    await page.locator('//button[@data-product-id="2"]').click({ clickCount: 2 });
    await page.locator('//button[@data-product-id="3"]').click();



});
