import {expect, test} from '@playwright/test';
import {MainPage} from "../../pages/main.page";
import * as elementsManipulations from "../../helpers/elements.manipulation";
import {checkCookies} from "../../helpers/empty.cookies.detector";

test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.standard.json'})

test('items are in order from z to a after filtration from z to a', async function ({page, context}) {
    const mainPage = new MainPage(page, context);

    await mainPage.openUrl();

    await checkCookies(context);

    const dropDown = await elementsManipulations.getElementHandle(page, '.product_sort_container');
    await dropDown.selectOption('za');

    const items = await elementsManipulations.getElementArrayHandle(page, '.inventory_item_name');

    expect(await items[0].innerText() > await items[1].innerText()).toBeTruthy();

})