import {test, expect} from '@playwright/test';
import {BasePage} from "../pages/base.page";

test('the addToCart name is changing', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/scrollbars');

    const blueButton = await basePage.selectElement('.btn.btn-primary');
    await blueButton.isVisible();

    await blueButton.scrollIntoViewIfNeeded();

    expect(await blueButton.isVisible()).toBeTruthy();

})


