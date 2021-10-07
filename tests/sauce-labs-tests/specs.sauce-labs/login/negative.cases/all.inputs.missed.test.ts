import {ElementHandle, test} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import * as expects from "../../../helpers/expects";


test('appears error when clicking on login without filling any input', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();

    const loginBtn = await loginPage.getLoginBtn();
    await loginBtn.click();

    await expects.checkInnerText(page, loginPage.errorArea, 'Epic sadface: Username is required');

})