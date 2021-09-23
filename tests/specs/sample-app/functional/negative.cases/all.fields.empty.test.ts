import {test, expect} from '@playwright/test';
import {BasePage} from "../../../../pages/base.page";

test('demonstration warning when all fields are empty', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/sampleapp');

    const loginStatus = await basePage.selectElement('#loginstatus');

    const loginButton = await basePage.selectElement('#login');
    await loginButton.click();

    expect(await loginStatus.innerText()).toEqual('Invalid username/password');

})


