import {test, expect, ElementHandle, Locator, Page} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";

test('login button is enabled', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();

    await loginPage.checkButtonIsEnabled('[name="login-button"]');

})