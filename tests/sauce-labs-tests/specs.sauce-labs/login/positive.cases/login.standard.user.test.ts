import {test, expect, ElementHandle} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import * as manipulations from "../../../helpers/elements.manipulation"
import {pathToLoginStates} from "../../../helpers/paths";

test('login as standard user', async function ({page, context}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();

    await loginPage.loginAsStandardUser();

    const logo: ElementHandle<Node> | null = await manipulations.getElementHandle(page, ".app_logo");

    expect(await logo.isVisible()).toBeTruthy();

    await context.storageState({path: pathToLoginStates});

})