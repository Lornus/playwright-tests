import {test} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import * as expects from "../../../helpers/expects";
import * as manipulations from "../../../helpers/elements.manipulation";


test('appears error when unregistered user clicking on login', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();

    await manipulations.typeInput(page, loginPage.inputUserNameField, `randName${Date.now()}`);
    await manipulations.typeInput(page, loginPage.inputPasswordField, `randPassword${Date.now()}`);

    const loginBtn = await loginPage.getLoginBtn();
    // @ts-ignore
    await loginBtn.click();

    await expects.checkText(page, loginPage.errorArea, 'Epic sadface: Username and password do not match any user in this service');

})