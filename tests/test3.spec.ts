
import { expect, test } from '@playwright/test';

test("Bài 3:Bài học 3: Todo page", async ({ page }) => {

    await page.goto('https://material.playwrightvn.com/');
    await page.locator("//a[@href='03-xpath-todo-list.html']").click();
    //await page.locator("//button[@id='add-task']").click({
    const inputTask = page.locator("//input[@placeholder='Enter a new task']");
    const addButton = page.locator("//button[@id='add-task']");

    for (let i = 1; i <= 100; i++) {
        await inputTask.fill(" to do " + i);
        await addButton.click();
    };
    for (let i = 0; i < 50; i++) {
        await page.locator('li >> button').first().click();
    };
    // Đoạn xóa 50 task todo số lẻ em chưa làm được , em có tham khảo qua Al nhưng giải thích không hiểu 
    // nhờ thấy cô cmt hướng dẫn giúp em giải quyết bài này ạ 
});