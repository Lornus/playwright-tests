import {test, expect, ElementHandle, Locator, Page} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";

test('input fields are editable', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();
    const fields = ['[name="user-name"]', '[name="user-name"]'];
    fields.map(async field => {
        await loginPage.checkElementEditable(field);
    })

})