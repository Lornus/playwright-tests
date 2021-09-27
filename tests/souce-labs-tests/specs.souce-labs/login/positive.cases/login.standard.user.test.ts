import {test, expect, ElementHandle, Locator, Page} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";

test('login as standard user if username and password is for standard', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();

    const loginBtn = await loginPage.getElement('[type="submit"]');


    await loginPage.typeInput('[name="user-name"]', "standard_user");
    await loginPage.typeInput('[name="password"]', "secret_sauce");

    await loginBtn.click();

    await page.waitForTimeout(120);

    expect(await page.screenshot({path: "tests/souce-labs-tests/golden-screenshots/standard-user-page.png"})).toMatchSnapshot('standard-user-page.png')

})