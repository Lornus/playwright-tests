import {test} from '@playwright/test';
import {checkCookies} from "../../../../helpers/empty.cookies.detector";
import {CheckoutPage} from "../../../../pages/checkout.page";
import {checkInnerText} from "../../../../helpers/expects";
import {pathToItemsStates} from "../../../../helpers/paths";


test.use({storageState: pathToItemsStates})

test('Occurs an error when last name input missed', async function ({page, context}) {
    const checkoutPage = new CheckoutPage(page, context);

    await checkCookies(context);

    await checkoutPage.openUrl();

    await checkoutPage.firstNameFill(`testUser${Date.now()}`);
    await checkoutPage.postalCodeFill('0000');


    await checkoutPage.clickOnContinue();

    await checkInnerText(page, checkoutPage.error, 'Error: Last Name is required');

});

