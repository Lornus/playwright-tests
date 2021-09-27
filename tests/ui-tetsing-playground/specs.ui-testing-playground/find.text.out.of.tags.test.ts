import {test, expect} from '@playwright/test';
import {BasePage} from "../pages/base.page";

test('find an element with Welcome text', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/verifytext');

    const stringWithWelcome = await basePage.selectElement('.bg-primary .badge-secondary:text("Welcome")')


    expect(await stringWithWelcome.innerHTML()).toContain("Welcome");
})


