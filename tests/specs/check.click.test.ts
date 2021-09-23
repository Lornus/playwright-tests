import {test, expect} from '@playwright/test';
import {BasePage} from "../pages/base.page";

test('it is able to click the button', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/click');

    const blueButton = await basePage.selectElement('.btn.btn-primary');
    await blueButton.isEnabled();

    await blueButton.click();

   expect(await blueButton.isEnabled()).toBeTruthy();


})


