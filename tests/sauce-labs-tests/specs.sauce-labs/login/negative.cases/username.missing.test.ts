import {test} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import * as expects from "../../../helpers/expects";
import * as manipulations from "../../../helpers/elements.manipulation";


test('appears error when clicking on login with only password entered', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();


    await manipulations.typeInput(page, loginPage.inputPasswordField, 'test_password');

    const loginBtn = await loginPage.getLoginBtn();
    await loginBtn.click();

    await expects.checkInnerText(page, loginPage.errorArea, 'Epic sadface: Username is required');

})