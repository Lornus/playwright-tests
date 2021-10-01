import {test} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import * as expects from "../../../helpers/expects";
import * as manipulations from "../../../helpers/elements.manipulation";


test('appears error when clicking on login with only username entered', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();


    await manipulations.typeInput(page, loginPage.inputUserNameField, `${Date.now()}_testUser`);

    const loginBtn = await loginPage.getLoginBtn();
    // @ts-ignore
    await loginBtn.click();

    await expects.checkText(page, loginPage.errorArea, 'Epic sadface: Password is required');

})