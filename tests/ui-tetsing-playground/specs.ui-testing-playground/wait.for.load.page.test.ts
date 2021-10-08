import {test, expect} from '@playwright/test';
import {BasePage} from "../pages/base.page";

test('waiting for a page to load', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/');

    const task = await basePage.selectElement('.col-sm:nth-of-type(4) a');
    await task.click();

    await basePage.waitForVisibility('.btn-primary');

    const afterWaitingButton = await basePage.selectElement('.btn-primary');

    await expect(afterWaitingButton.isVisible()).toBeTruthy();

})


