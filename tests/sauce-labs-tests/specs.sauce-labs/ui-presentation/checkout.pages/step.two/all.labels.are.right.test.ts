import {CheckoutPage} from "../../../../pages/checkout.page";
import {test} from "@playwright/test";
import {checkCookies} from "../../../../helpers/empty.cookies.detector";
import {getElementArrayHandle} from "../../../../helpers/elements.manipulation";
import {checkInnerTextElementOfArray} from "../../../../helpers/expects";

test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.standard.json'})
test.describe('Labels correspond to docs:', function () {

    test('QTY and DESCRIPTION', async function ({page, context}) {
        const checkoutPage = new CheckoutPage(page, context);

        await checkCookies(context)

        await checkoutPage.openUrl();

        await checkoutPage.goContinue();

        const cartList = await getElementArrayHandle(page, checkoutPage.cartList);

        await checkInnerTextElementOfArray(page, 0, cartList, 'QTY');
        await checkInnerTextElementOfArray(page, 1, cartList, 'DESCRIPTION');

    })
    test('Payment info, Shipping info', async function ({page, context}) {
        const checkoutPage = new CheckoutPage(page, context);

        await checkCookies(context)

        await checkoutPage.openUrl();

        await checkoutPage.goContinue();

        const summaryInfo = await getElementArrayHandle(page, checkoutPage.summaryInfo);

        await checkInnerTextElementOfArray(page, 0, summaryInfo, 'Payment Information:');
        await checkInnerTextElementOfArray(page, 2, summaryInfo, 'Shipping Information:');
        await checkInnerTextElementOfArray(page, 3, summaryInfo, 'FREE PONY EXPRESS DELIVERY!');

    })
})
