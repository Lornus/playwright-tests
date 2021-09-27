import {test, expect, Locator, Page} from '@playwright/test';
import {BasePage} from "../pages/base.page";
import {checkAttribute} from "../helpers/check.attribute";

test('must determine hidden buttons', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/visibility');

    const buttonToHide = await basePage.selectElement('#hideButton');

    await buttonToHide.click();

    const emptyAfterDelete: Locator = await page.locator('td:nth-of-type(2):text("")');

    await expect(emptyAfterDelete).toBeEmpty();

    await checkAttribute(page, "#invisibleButton", "style", "visibility: hidden;");

    await checkAttribute(page, '#transparentButton', "style", "opacity: 0;")

    await checkAttribute(page, '#notdisplayedButton', "style", "display: none;")

    await checkAttribute(page, '#offscreenButton', "class", "btn btn-info offscreen")

})


