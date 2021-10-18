import {expect, test} from '@playwright/test';
import {MainPage} from "../../pages/main.page";
import * as elementsManipulations from "../../helpers/elements.manipulation";
import {checkCookies} from "../../helpers/empty.cookies.detector";
import {pathToLoginStates} from "../../helpers/paths";

test.use({storageState: pathToLoginStates})

test('items are in order from z to a after filtration from z to a', async function ({page, context}) {
    const mainPage = new MainPage(page, context);

    await checkCookies(context);

    await mainPage.openUrl();

    const dropDown = await elementsManipulations.getElementHandle(page, '.product_sort_container');
    await dropDown.selectOption('za');

    const items = await elementsManipulations.getElementArrayHandle(page, '.inventory_item_name');

    expect(await items[0].innerText() > await items[1].innerText()).toBeTruthy();

})