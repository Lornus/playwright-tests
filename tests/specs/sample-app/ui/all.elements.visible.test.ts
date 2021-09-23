import {test, expect, ElementHandle, Locator, Page} from '@playwright/test';
import {BasePage} from "../../../pages/base.page";
//TODO refactor
test.describe('On page is visible:', function () {

    test("h3 tag", async function ({page}) {
        const basePage = new BasePage(page);
        await basePage.goto('/sampleapp')

        const h3Tag = await basePage.selectElement('h3');

        expect(await h3Tag.isVisible()).toBeTruthy();
        expect(await h3Tag.innerText()).toEqual('Sample App');
    })

    test("description", async function ({page}) {
        const basePage = new BasePage(page);
        await basePage.goto('/sampleapp')

        const description = await basePage.selectElement('p');

        expect(await description.isVisible()).toBeTruthy();
        expect(await description.innerText()).toEqual('Fill in and submit the form. ' +
            'For successfull login use any non-empty user name and `pwd` as password.');
    })

    test("login status", async function ({page}) {
        const basePage = new BasePage(page);
        await basePage.goto('/sampleapp')

        const status = await basePage.selectElement('#loginstatus');

        await expect(status.isVisible()).toBeTruthy();
        expect(await status.innerText()).toEqual('User logged out.');
    })

    test("username input", async function ({page}) {
        const basePage = new BasePage(page);
        await basePage.goto('/sampleapp')

        const input = await basePage.selectElement('[name="UserName"]');

        expect(await input.isVisible()).toBeTruthy();
        expect(await input.isEditable()).toBeTruthy();
    })

    test("password input", async function ({page}) {
        const basePage = new BasePage(page);
        await basePage.goto('/sampleapp')

        const input = await basePage.selectElement('[name="Password"]');

        expect(await input.isVisible()).toBeTruthy();
        expect(await input.isEditable()).toBeTruthy();
    })

})