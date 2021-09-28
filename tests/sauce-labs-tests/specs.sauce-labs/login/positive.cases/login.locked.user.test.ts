import {test, expect} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import * as expects from "../../../helpers/expects";

test('appears message about locked user', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();

    await loginPage.loginAsBlockedUser();

    await expects.compareWithScreenshot(page, "tests/sauce-labs-tests/golden-screenshots/blocked-user-page.png", 'blocked-user-page.png');

})