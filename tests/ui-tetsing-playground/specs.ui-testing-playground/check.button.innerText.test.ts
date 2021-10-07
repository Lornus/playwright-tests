import {test, expect} from '@playwright/test';
import {BasePage} from "../pages/base.page";

test('the addToCart name is changing', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/textinput?');

    const form = await basePage.selectElement('.form-control');
    await form.fill('Test value');

    const blueButton = await basePage.selectElement('.btn.btn-primary');
    await blueButton.click();

    expect(await blueButton.innerText()).toEqual(await form.inputValue());

})


