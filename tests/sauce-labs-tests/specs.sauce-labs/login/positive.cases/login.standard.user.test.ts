import {test, expect, ElementHandle} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import * as manipulations from "../../../helpers/elements.manipulation"

test('@cookiesWriter login as standard user', async function ({page, context}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();


    await loginPage.loginAsStandardUser(context);

    const logo: ElementHandle<Node> | null = await manipulations.getElementHandle(page, ".app_logo");

    expect(await logo.isVisible()).toBeTruthy();

})
