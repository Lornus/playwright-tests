import {test, expect} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import * as manipulations from "../../../helpers/elements.manipulation"

test('login as standard user if username and password is for standard', async function ({page, context}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();

    await loginPage.loginAsStandardUser();

    const logo = await manipulations.getElement(page, ".app_logo");

    expect(await logo.isVisible()).toBeTruthy();

    await context.storageState({path: 'tests/sauce-labs-tests/specs.sauce-labs/login/states/state.standard.json'});

})