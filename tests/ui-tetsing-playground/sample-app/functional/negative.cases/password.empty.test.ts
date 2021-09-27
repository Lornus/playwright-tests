import {test, expect} from '@playwright/test';
import {BasePage} from "../../../pages/base.page";
import {enterRandomUserName} from "../../../for-sample-app/sample-app.helper";

test('demonstrate error when password is empty', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/sampleapp');

    await enterRandomUserName(page, `test${Date.now()}`);

    const loginStatus = await basePage.selectElement('#loginstatus');

    const loginButton = await basePage.selectElement('#login');
    await loginButton.click();

    expect(await loginStatus.innerText()).toEqual('Invalid username/password');
})


