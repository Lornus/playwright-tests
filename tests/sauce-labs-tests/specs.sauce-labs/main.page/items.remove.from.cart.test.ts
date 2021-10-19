import {expect, test} from '@playwright/test';
import {MainPage} from "../../pages/main.page";
import * as elementsManipulations from "../../helpers/elements.manipulation";
import {checkCookies} from "../../helpers/empty.cookies.detector";
import {pathToItemsStates} from "../../helpers/paths";


test.use({storageState: pathToItemsStates})

test('items remove from cart', async function ({page, context}) {

    const mainPage = new MainPage(page, context);

    await checkCookies(context);

    await mainPage.openUrl();

    await mainPage.goToCart();

    const arrayOfItemsBeforeDeleting = await elementsManipulations.getElementArrayHandle(page, mainPage.itemName);

    await elementsManipulations.elementClick(page, mainPage.removeItem);

    const arrayOfItemsAfterDeleting = await elementsManipulations.getElementArrayHandle(page, mainPage.itemName);

    expect(arrayOfItemsBeforeDeleting !== arrayOfItemsAfterDeleting).toBeTruthy();

    // await page.screenshot({path: 'tests/sauce-labs-tests/golden-screenshots/relogin-page.png', fullPage: true});
});

