import {expect, test} from '@playwright/test';
import {MainPage} from "../../pages/main.page";
import * as elementsManipulations from "../../helpers/elements.manipulation";
import config from "../../sauce-labs.config";
import {checkCookies} from "../../helpers/empty.cookies.detector";


test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.item.chosen.json'})

test('continue shopping returns on the inventory page', async function ({page, context}) {

    const mainPage = new MainPage(page, context);

    await checkCookies(context);

    await mainPage.openUrl();

    await mainPage.goToCart();

    await elementsManipulations.elementClick(page, mainPage.continueShopping);

    expect(page.url() === `${config.use.baseURL}${mainPage.endpoint}`).toBeTruthy();

    // await page.screenshot({path: 'tests/sauce-labs-tests/golden-screenshots/relogin-page.png', fullPage: true});
});

