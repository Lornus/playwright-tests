import {test} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import * as expects from "../../../helpers/expects";
import * as manipulations from "../../../helpers/elements.manipulation";


test('appears error when clicking on login with username doesnt match password', async function ({page}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();


    await manipulations.typeInput(page, '[data-test="username"]', 'testUser');
    await manipulations.typeInput(page, '[data-test="password"]', 'secret_sauce');


    const loginBtn = await loginPage.getLoginBtn();
    await loginBtn.click();

    await expects.checkText(page, '[data-test="error"]', 'Epic sadface: Username and password do not match any user in this service');

})