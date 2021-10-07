import {test} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import {checkButtonIsEnabled} from "../../../helpers/expects";


test('login addToCart is enabled', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();

    await checkButtonIsEnabled(page, loginPage.loginBtn);

})