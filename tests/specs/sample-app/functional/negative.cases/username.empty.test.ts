import {test, expect} from '@playwright/test';
import {BasePage} from "../../../../pages/base.page";
import {enterPassword} from "../../../../helpers/for-sample-app/sample-app.helper";

test('demonstrate error when login is empty', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/sampleapp');

    await enterPassword(page, 'pwd')

    const loginStatus = await basePage.selectElement('#loginstatus');

    const loginButton = await basePage.selectElement('#login');
    await loginButton.click();

    expect(await loginStatus.innerText()).toEqual('Invalid username/password');

})


