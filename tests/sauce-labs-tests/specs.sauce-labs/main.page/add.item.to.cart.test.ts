import {test} from '@playwright/test';
import {MainPage} from "../../pages/main.page";
import {checkCookies} from "../../helpers/empty.cookies.detector";

test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.standard.json'})

test('user can add item to the cart', async function ({page, context}) {
    const mainPage = new MainPage(page, context);

    await checkCookies(context);

    await mainPage.openUrl();
    const amount = 4;

    await mainPage.clickOnAddToCartButton(amount);

    await mainPage.checkLabelsInCart(amount);

   // await page.screenshot({path: 'tests/sauce-labs-tests/golden-screenshots/add-item.png', fullPage: true});

    await context.storageState({path: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.item.chosen.json'});

})