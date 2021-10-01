import {test} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import * as expects from "../../../helpers/expects";
import * as manipulations from "../../../helpers/elements.manipulation";


test('appears error when clicking on login with username doesnt match password', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();


    await manipulations.typeInput(page, loginPage.inputUserNameField, `randUser_${Date.now()}`);

    await loginPage.fillSecretPassword();

    const loginBtn = await loginPage.getLoginBtn();
    // @ts-ignore
    await loginBtn.click();


    await expects.checkText(page, loginPage.errorArea, 'Epic sadface: Username and password do not match any user in this service');

})