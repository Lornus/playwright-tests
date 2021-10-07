import {expect, test} from '@playwright/test';
import {MainPage} from "../../pages/main.page";
import * as elementsManipulations from "../../helpers/elements.manipulation";
import * as expects from "../../helpers/expects";

test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/login/states/state.standard.json'})

test('user can add item to the cart', async function ({page, context}) {
    const mainPage = new MainPage(page, context);

    await mainPage.openUrl();

    // DEBUG ONLY
    // console.log("COOKIES ->>>", await context.cookies());
    // await page.screenshot({path: 'tests/sauce-labs-tests/golden-screenshots/add-item.png', fullPage: true});

    const buttonArray = await elementsManipulations.getElementArrayHandle(page, mainPage.addToCart);

    await buttonArray[0].click();
    await buttonArray[1].click();

    const itemLabel = await elementsManipulations.getElementArrayHandle(page, mainPage.item)
    const firstItem = await itemLabel[0].innerText();
    const secondItem = await itemLabel[1].innerText();

    const cartLink = await elementsManipulations.getElementHandle(page, mainPage.cartLink);
    await cartLink.click();

    const itemsInCart = await elementsManipulations.getElementArrayHandle(page, mainPage.itemInCart);

    expect(await itemsInCart[0].innerText()).toEqual(firstItem);
    expect(await itemsInCart[1].innerText()).toEqual(secondItem);

})