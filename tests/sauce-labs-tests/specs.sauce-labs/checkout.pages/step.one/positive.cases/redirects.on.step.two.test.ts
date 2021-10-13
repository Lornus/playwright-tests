import {expect, test} from '@playwright/test';
import * as elementsManipulations from "../../.././../helpers/elements.manipulation";
import {checkCookies} from "../../../../helpers/empty.cookies.detector";
import {CheckoutPage} from "../../../../pages/checkout.page";


test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.item.chosen.json'})

test('Redirecting on the second checkout step when all data is correct', async function ({page, context}) {
    const checkoutPage = new CheckoutPage(page, context);

    await checkCookies(context);

    await checkoutPage.openUrl();

    await checkoutPage.firstNameFill(`testUser${Date.now()}`);
    await checkoutPage.lastNameFill(`testUser${Date.now()}`);
    await checkoutPage.postalCodeFill('0000');

    await checkoutPage.clickOnContinue();

    expect(page.url()).toContain(checkoutPage.stepTwo);

});

