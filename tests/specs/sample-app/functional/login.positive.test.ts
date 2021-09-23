import {test, expect} from '@playwright/test';
import {BasePage} from "../../../pages/base.page";
import {enterPassword, enterRandomUserName} from "../../../helpers/for-sample-app/sample-app.helper";

test('login with correct login and password', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/sampleapp');

    const userName = await enterRandomUserName(page, `test${Date.now()}`);
    await enterPassword(page, 'pwd')

    const loginStatus = await basePage.selectElement('#loginstatus');

    const loginButton = await basePage.selectElement('#login');
    await loginButton.click();

    expect(await loginStatus.innerText()).toEqual(`Welcome, ${userName}!`);
})

