import {test, expect} from '@playwright/test';
import {BasePage} from "../pages/base.page";

test('waiting for an element to show up after AJAX', async function ({page}) {
    const mainPage = new BasePage(page);
    await mainPage.goto('/');

    const task = await mainPage.selectFromListOfElements('.col-sm:nth-of-type(1) a');

    const requiredLink = task[task.length - 3];

    await requiredLink.click();

    const button = await mainPage.selectElement('#ajaxButton');
    await button.click();

    const waitingText = await mainPage.waitForVisibility('#content');

    expect(await waitingText.innerText()).toEqual('Data loaded with AJAX get request.');

})


