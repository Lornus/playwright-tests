import {test} from '@playwright/test';
import {checkElementEditable} from "../../../helpers/expects";
import {CheckoutPage} from "../../../pages/checkout.page";

test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.item.chosen.json'})

test('input fields are editable on the checkout page', async function ({page, context}) {
    const checkoutPage = new CheckoutPage(page, context);
    await checkoutPage.openUrl();

    console.log("COOKIES ->>>", await context.cookies());


    const fields = [checkoutPage.firstNameInput, checkoutPage.lastNameInput, checkoutPage.postalCodeInput];

    await Promise.all(
        [fields.map(async field => {
                await checkElementEditable(page, field);
            }
        )]
    )

})