import {test} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import * as expects from "../../../helpers/expects";


test('Elements should be on page like on the "golden" screenshot', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();

    await expects.compareWithScreenshot(page, "tests/sauce-labs-tests/golden-screenshots/login-page.png",
        'login-page.png')

})