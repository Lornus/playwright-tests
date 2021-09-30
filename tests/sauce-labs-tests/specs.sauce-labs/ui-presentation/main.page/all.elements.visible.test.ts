import {test, expect} from '@playwright/test';
import {MainPage} from "../../../pages/main.page";
import * as manipulations from "../../../helpers/elements.manipulation";
import * as expects from "../../../helpers/expects";


test.use({storageState: 'tests/sauce-labs-tests/specs.sauce-labs/login/states/state.standard.json'})

test('Elements on the main page should be like on the "golden" screenshot', async function ({page, context}) {
    const mainPage = new MainPage(page, context);

    await mainPage.openUrl();

    await expects.compareWithScreenshot(page, 'tests/sauce-labs-tests/golden-screenshots/main-page.png', 'main-page-snapshot.png')

    //------------------------------------------------FD - For Debugging -----------------------------------------------

     // await page.screenshot({path: 'tests/sauce-labs-tests/golden-screenshots/main-page.png'});

    // console.dir(await context.cookies());

    //------------------------------------------------FD - For Debugging -----------------------------------------------


    const burger = await manipulations.getElement(page, '.bm-burger-button');
    await burger.click();

    const logout = await manipulations.getElement(page, '#logout_sidebar_link');

    expect(await logout.innerText()).toEqual('LOGOUT');

})
