import {test, expect} from '@playwright/test';
import {BasePage} from "../pages/base.page";

test('value of cpu in table that each reload renders equals to text', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/dynamictable');

    const cpuInTable = await basePage.selectElement('//span[text()[contains(.,\'Chrome\')]]/following-sibling::span[text()[contains(.,\'%\')]]');
    const cpuInText = await basePage.selectElement('.bg-warning');

    const percentsInText = await cpuInText.innerText().then(text => text.slice(12, 16));

    expect(await cpuInTable.innerHTML()).toEqual(percentsInText);
})


