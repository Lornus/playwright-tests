import {test} from '@playwright/test';
import {checkCookies} from "../../../../helpers/empty.cookies.detector";
import {CheckoutPage} from "../../../../pages/checkout.page";
import {checkInnerText} from "../../../../helpers/expects";
import {pathToItemsStates} from "../../../../helpers/paths";


test.use({storageState: pathToItemsStates})

test('Occurs an error when all input missed', async function ({page, context}) {
    const checkoutPage = new CheckoutPage(page, context);

    await checkCookies(context);

    await checkoutPage.openUrl();

    await checkoutPage.clickOnContinue();

    await checkInnerText(page, checkoutPage.error, 'Error: First Name is required');

});

