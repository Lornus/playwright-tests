import {expect, test} from '@playwright/test';
import * as elementsManipulations from "../../.././../helpers/elements.manipulation";
import {checkCookies} from "../../../../helpers/empty.cookies.detector";
import {CheckoutPage} from "../../../../pages/checkout.page";
import {pathToItemsStates} from "../../../../helpers/paths";


test.use({storageState: pathToItemsStates})

test('Redirecting on the second checkout step when all data is correct', async function ({page, context}) {
    const checkoutPage = new CheckoutPage(page, context);

    await checkCookies(context);

    await checkoutPage.openUrl();

    await checkoutPage.goContinue();

    expect(page.url()).toContain(checkoutPage.stepTwo);

});

