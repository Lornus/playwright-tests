import {test} from '@playwright/test';
import {MainPage} from "../../pages/main.page";
import {checkCookies} from "../../helpers/empty.cookies.detector";
import {pathToItemsStates, pathToLoginStates} from "../../helpers/paths";
import {LoginPage} from "../../pages/login.page";

test.use({storageState: pathToLoginStates})

test('@cookiesWriter user can add item to the cart', async function ({page, context}) {

    const mainPage = new MainPage(page, context);

    await checkCookies(context);

    await mainPage.openUrl();
    const amount = 4;

    await mainPage.clickOnAddToCartButton(amount);

    await mainPage.checkLabelsInCart(amount);

    //await page.screenshot({path: 'tests/sauce-labs-tests/golden-screenshots/add-item.png', fullPage: true});

    await context.storageState({path: pathToItemsStates});

})