import {expect, test} from '@playwright/test';
import {MainPage} from "../../pages/main.page";
import * as elementsManipulations from "../../helpers/elements.manipulation";


test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.item.chosen.json'})

test('items remove from cart', async function ({page, context}) {

    const mainPage = new MainPage(page, context);

    console.log("COOKIES ->>>", await context.cookies());

    await mainPage.openUrl();

    await mainPage.goToCart();

    const arrayOfItemsBeforeDeleting = await elementsManipulations.getElementArrayHandle(page, mainPage.item);

    await elementsManipulations.elementClick(page, mainPage.removeItem);

    const arrayOfItemsAfterDeleting = await elementsManipulations.getElementArrayHandle(page, mainPage.item);

    expect(arrayOfItemsBeforeDeleting !== arrayOfItemsAfterDeleting).toBeTruthy();

    // await page.screenshot({path: 'tests/sauce-labs-tests/golden-screenshots/relogin-page.png', fullPage: true});
});

