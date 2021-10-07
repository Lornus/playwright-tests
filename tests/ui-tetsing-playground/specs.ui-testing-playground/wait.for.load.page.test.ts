import {test, expect} from '@playwright/test';
import {BasePage} from "../pages/base.page";

test('waiting for a page to load', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/');

    const task = await basePage.selectElement('.col-sm:nth-of-type(4) a');
    await task.click();

    const foundButton = await basePage.waitForVisibility('div addToCart');
    expect(await foundButton.isEnabled()).toBeTruthy();
})


