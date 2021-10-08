import {expect, test} from '@playwright/test';
import {MainPage} from "../../pages/main.page";
import * as elementsManipulations from "../../helpers/elements.manipulation";

test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.standard.json'})

test.only('user can add item to the cart', async function ({page, context}) {
    const mainPage = new MainPage(page, context);

    await mainPage.openUrl();

    // DEBUG
    console.log("COOKIES ->>>", await context.cookies());

    await mainPage.clickOnAddToCartButton(0);
    await mainPage.clickOnAddToCartButton(1);

    await mainPage.goToCart();

    const itemsInCart = await elementsManipulations.getElementArrayHandle(page, mainPage.itemInCart);

    expect(await itemsInCart[0].innerText()).toEqual(await mainPage.getItemLabel(0));
    expect(await itemsInCart[1].innerText()).toEqual(await mainPage.getItemLabel(1));

    //await page.screenshot({path: 'tests/sauce-labs-tests/golden-screenshots/add-item.png', fullPage: true});

    await context.storageState({path: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.item.chosen.json'});

})