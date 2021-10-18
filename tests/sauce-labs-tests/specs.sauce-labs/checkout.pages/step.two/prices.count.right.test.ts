import {CheckoutPage} from "../../../pages/checkout.page";
import {test} from "@playwright/test";
import {checkCookies} from "../../../helpers/empty.cookies.detector";
import {pathToItemsStates} from "../../../helpers/paths";

test.use({storageState: pathToItemsStates})

test('Prices count right', async function ({page, context}) {
    const checkoutPage = new CheckoutPage(page, context);

    await checkCookies(context)

    await checkoutPage.openUrl();

    await checkoutPage.goContinue();

    await checkoutPage.checkTotalPrice();

    await page.screenshot({path: 'tests/sauce-labs-tests/golden-screenshots/total-sum-page.png', fullPage: true});


})
