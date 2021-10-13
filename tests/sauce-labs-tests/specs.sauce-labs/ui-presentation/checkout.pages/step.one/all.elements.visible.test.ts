import {test, expect} from '@playwright/test';
import {CheckoutPage} from "../../../../pages/checkout.page";
import * as manipulations from "../../../../helpers/elements.manipulation";
import * as expects from "../../../../helpers/expects";
import {checkCookies} from "../../../../helpers/empty.cookies.detector";


test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.item.chosen.json'})

test('Elements on the checkout page should be like on the "golden" screenshot  ', async function ({page, context}) {
    const checkoutPage = new CheckoutPage(page, context);

    await checkCookies(context)

    await checkoutPage.openUrl();

    await expects.compareWithScreenshot(page, 'tests/sauce-labs-tests/golden-screenshots/checkout-page.png', 'checkout-page-snapshot.png')

})
