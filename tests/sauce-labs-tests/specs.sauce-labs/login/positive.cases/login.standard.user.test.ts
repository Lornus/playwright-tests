import {test, expect} from '@playwright/test';
import {LoginPage} from "../../../pages/login.page";
import * as expects from "../../../helpers/expects";
import * as manipulations from "../../../helpers/elements.manipulation"
import * as fs from "fs";


test('login as standard user if username and password is for standard', async function ({page, context}) {
    const loginPage = new LoginPage(page);
    await loginPage.openUrl();

    await loginPage.loginAsStandardUser();

    //await page.waitForTimeout(400);

    await expects.compareWithScreenshot(page, "tests/sauce-labs-tests/golden-screenshots/standard-user-page.png", 'standard-user-page.png');

    const logo = await manipulations.getElement(page, ".app_logo");

    expect(await logo.isVisible()).toBeTruthy();


    const cookies = JSON.stringify(await context.cookies());

    fs.writeFileSync('tests/sauce-labs-tests/specs.sauce-labs/login/cookies/cookies.json', cookies);

    // expect(await page.screenshot({path: "tests/sauce-labs-tests/golden-screenshots/standard-user-page.png"})).toMatchSnapshot('standard-user-page.png')

})