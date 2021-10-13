import {test} from '@playwright/test';
import {MainPage} from "../../pages/main.page";
import {checkCookies} from "../../helpers/empty.cookies.detector";
import * as fs from "fs";


test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/states/state.item.chosen.json'})

test('items remain in cart', async function ({page, context}) {

    const mainPage = new MainPage(page, context);

    await checkCookies(context);

    await mainPage.openUrl();

    await mainPage.goToCart();

    const state = JSON.parse(fs.readFileSync('tests/sauce-labs-tests/specs.sauce-labs/states/state.item.chosen.json',
        {encoding: 'utf-8'}));

    const variables: string = state.origins[0].localStorage[0].value

    const stringVariables: string = variables.slice(1, 10);

    const arrayOfVariables: string[] = stringVariables.split(',');

    const amount: number = arrayOfVariables.length;

    await mainPage.checkLabelsInCart(amount);

    //await page.screenshot({path: 'tests/sauce-labs-tests/golden-screenshots/relogin-page.png', fullPage: true});
});

