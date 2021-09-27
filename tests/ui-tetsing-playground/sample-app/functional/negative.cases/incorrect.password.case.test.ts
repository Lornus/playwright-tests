import {test, expect} from '@playwright/test';
import {BasePage} from "../../../pages/base.page";
import {enterPassword, enterRandomUserName} from "../../../for-sample-app/sample-app.helper";

test('demonstrating error when password is incorrect, login correct', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/sampleapp');

    await enterRandomUserName(page, `test${Date.now()}`);
    await enterPassword(page, 'pwd25')

    const loginStatus = await basePage.selectElement('#loginstatus');

    const loginButton = await basePage.selectElement('#login');
    await loginButton.click();

    expect(await loginStatus.innerText()).toEqual('Invalid username/password');
})


