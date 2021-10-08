import {expect, test} from '@playwright/test';
import {MainPage} from "../../pages/main.page";
import * as elementsManipulations from "../../helpers/elements.manipulation";
import * as expects from "../../helpers/expects";


test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.item.chosen.json'})

test('items remain in cart ', async function ({page, context}) {

    const mainPage = new MainPage(page, context);

    console.log("COOKIES ON NEW LOG IN ->>>", await context.cookies());

    await mainPage.openUrl();

    await mainPage.goToCart();

    const itemsInCart = await elementsManipulations.getElementArrayHandle(page, mainPage.itemInCart);

    expect(await itemsInCart[0].innerText()).toEqual(await mainPage.getItemLabel(0));
    expect(await itemsInCart[1].innerText()).toEqual(await mainPage.getItemLabel(1));


    await page.screenshot({path: 'tests/sauce-labs-tests/golden-screenshots/relogin-page.png', fullPage: true});
});

