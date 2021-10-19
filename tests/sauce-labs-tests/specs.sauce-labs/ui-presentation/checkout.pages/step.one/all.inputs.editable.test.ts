import {test} from '@playwright/test';
import {checkElementEditable} from "../../../../helpers/expects";
import {CheckoutPage} from "../../../../pages/checkout.page";
import {checkCookies} from "../../../../helpers/empty.cookies.detector";
import {pathToItemsStates} from "../../../../helpers/paths";

test.use({storageState: pathToItemsStates})

test('input fields are editable on the checkout page', async function ({page, context}) {
    const checkoutPage = new CheckoutPage(page, context);

    await checkCookies(context)

    await checkoutPage.openUrl();

    const fields = [checkoutPage.firstNameInput, checkoutPage.lastNameInput, checkoutPage.postalCodeInput];

    await Promise.all(fields.map(async field => {
            await checkElementEditable(page, field);
        }
    ))

})