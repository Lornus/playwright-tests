import {expect, test} from '@playwright/test';
import {MainPage} from "../../pages/main.page";
import * as elementsManipulations from "../../helpers/elements.manipulation";
import {checkCookies} from "../../helpers/empty.cookies.detector";
import {pathToLoginStates} from "../../helpers/paths";

test.use({storageState: pathToLoginStates})

test('prices are in order from high to low after filtration from high to low', async function ({page, context}) {
    const mainPage = new MainPage(page, context);

    await checkCookies(context);

    await mainPage.openUrl();

    const dropDown = await elementsManipulations.getElementHandle(page, '.product_sort_container');
    await dropDown.selectOption('hilo');

    const prices = await elementsManipulations.getElementArrayHandle(page, '.inventory_item_price');

    expect(await prices[0].innerText() > await prices[1].innerText()).toBeTruthy();

})