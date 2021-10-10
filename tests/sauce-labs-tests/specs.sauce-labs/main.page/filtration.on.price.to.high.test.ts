import {expect, test} from '@playwright/test';
import {MainPage} from "../../pages/main.page";
import * as elementsManipulations from "../../helpers/elements.manipulation";
import {checkCookies} from "../../helpers/empty.cookies.detector";

test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.standard.json'})

test('prices are in order from low to high after filtration from low to high', async function ({page, context}) {
    const mainPage = new MainPage(page, context);

    await mainPage.openUrl();

    await checkCookies(context);

    const dropDown = await elementsManipulations.getElementHandle(page, '.product_sort_container');
    await dropDown.selectOption('lohi');

    const prices = await elementsManipulations.getElementArrayHandle(page, '.inventory_item_price');

    expect(await prices[0].innerText() < await prices[1].innerText()).toBeTruthy();

})