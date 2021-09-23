import {test, expect} from '@playwright/test';
import {BasePage} from "../pages/base.page";

test('click count increased', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/mouseover');

    const elementToClick = await basePage.selectElement('[title]');
    const clickCount = await basePage.selectElement('#clickCount');

    await elementToClick.dblclick();

    expect(await clickCount.innerText()).toEqual("2");

})


