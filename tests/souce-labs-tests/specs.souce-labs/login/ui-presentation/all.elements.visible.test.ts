import {test, expect, ElementHandle, Locator, Page} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";

test('Elements should be on page like on the "golden" screenshot', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();

    expect(await page.screenshot({path: "tests/souce-labs-tests/golden-screenshots/login-page.png"})).toMatchSnapshot('login-page.png')

})