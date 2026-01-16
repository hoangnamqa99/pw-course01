
import {test, expect} from '@playwright/test';

test('Bài4', async ({ page }) => {

    await page.goto('https://material.playwrightvn.com/');
    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    // Thêm nhanh 10 cái (Copy-paste dòng này nếu chưa thạo vòng lặp)
    for (let i = 1; i <= 10; i++) {
        await page.locator('#note-title').fill('Action ' + i);
        await page.locator('#note-content').fill('Nội dung một hoặc nhiều ' + i);
        await page.locator('//button[@id="add-note"]').click();
    }
    // Đợi để các note được thêm xong hoàn toàn vào danh sách
    await page.waitForTimeout(1000);
    await page.getByPlaceholder('Search notes...').fill('một hoặc nhiều'); // Ai chỉ câu này
    //await page.locator('#search-input').fill('một hoặc nhiều'); câu này em tự mò - câu này chạy lỗi
});