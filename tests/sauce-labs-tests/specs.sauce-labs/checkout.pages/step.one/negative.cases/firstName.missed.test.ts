import {test} from '@playwright/test';
import {checkCookies} from "../../../../helpers/empty.cookies.detector";
import {CheckoutPage} from "../../../../pages/checkout.page";
import {checkInnerText} from "../../../../helpers/expects";


test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.item.chosen.json'})

test('Occurs an error when first name input missed', async function ({page, context}) {
    const checkoutPage = new CheckoutPage(page, context);

    await checkCookies(context);

    await checkoutPage.openUrl();

    await checkoutPage.lastNameFill(`testUser${Date.now()}`);
    await checkoutPage.postalCodeFill('0000');


    await checkoutPage.clickOnContinue();

    await checkInnerText(page, checkoutPage.error, 'Error: First Name is required');

});

