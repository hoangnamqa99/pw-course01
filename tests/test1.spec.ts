import { test, expect } from '@playwright/test';

import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  use: {
    headless: false,
    slowMo: 3000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
test('Bài học 1: Register Page', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');

  // Click menu Register Page
  await page.click("//a[contains(@href, 'register-page')]");

  // Điền thông tin - Lưu ý cách dùng dấu nháy
  await page.locator("//input[@id='username']").fill('testuser');
  await page.locator("//input[@id='email']").fill('testuser@example.com');
  await page.locator("//input[@value='female']").check(); // Giả sử đây là radio button
  await page.locator("//input[@value='cooking']").check(); // Giả sử đây là checkbox
  await page.locator("//option[@value='technology']").click(); // Giả sử đây là dropdown
  await page.selectOption("//select[@id='country']", 'canada'); // Thay @id='country' bằng ID đúng của ô dropdown
  await page.locator("//input[@id='dob']").fill('1999-01-19');
  await page.locator("//input[@type='file']").setInputFiles("C:/học auto/Lesson-05/tests/picture.txt"); // Giả sử đây là file upload
  await page.locator("//textarea[@id='bio'] ").fill(" Tin tuyển dụng IT  QC tại TP. Hồ Chí Minh")
  await page.locator("//input[@id='rating']").fill("3");
  await page.locator("//input[@id='favcolor']").fill("#004cff");

  const checkbox = page.locator("//input[@id='newsletter']");
  await checkbox.check();
  await expect(page.locator("//input[@id='newsletter']")).toBeChecked();

  const feature = page.locator("//span[@class='slider round']");
  await feature.check();
  await expect(page.locator("//span[@class='slider round']")).toBeChecked();

  await page.locator('#starRating').click({ position: { x: 80, y: 10 } });
  const rating = await page.locator('#starRating').getAttribute('data-rating');
  console.log("Số sao hiện tại là: " + rating);

   await page.locator("//button[@type='submit']").click();

});


