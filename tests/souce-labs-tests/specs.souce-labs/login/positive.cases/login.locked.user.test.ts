import {test, expect, ElementHandle, Locator, Page} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";

test('appears message about locked user', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();

    const loginBtn = await loginPage.getElement('[type="submit"]');

    await loginPage.typeInput('[name="user-name"]', "locked_out_user");
    await loginPage.typeInput('[name="password"]', "secret_sauce");

    await loginBtn.click();

    await page.waitForTimeout(80);

    expect(await page.screenshot({path: "tests/souce-labs-tests/golden-screenshots/blocked-user-page.png"})).toMatchSnapshot('blocked-user-page.png')

})