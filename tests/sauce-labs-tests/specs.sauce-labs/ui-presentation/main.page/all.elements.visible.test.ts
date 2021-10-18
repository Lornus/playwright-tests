import {test, expect} from '@playwright/test';
import {MainPage} from "../../../pages/main.page";
import * as manipulations from "../../../helpers/elements.manipulation";
import * as expects from "../../../helpers/expects";
import {checkCookies} from "../../../helpers/empty.cookies.detector";
import {pathToLoginStates} from "../../../helpers/paths";


test.use({storageState: pathToLoginStates})

test('Elements on the main page should be like on the "golden" screenshot ', async function ({page, context}) {
    const mainPage = new MainPage(page, context);

    await checkCookies(context)

    await mainPage.openUrl();

    await expects.compareWithScreenshot(page, 'tests/sauce-labs-tests/golden-screenshots/main-page.png', 'main-page-snapshot.png')

})
