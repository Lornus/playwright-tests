import {test, expect} from '@playwright/test';
import {BasePage} from "../pages/base.page";

test.only('stop progressbar on 75% and get value from it @flacky', async function ({page}) {
    const basePage = new BasePage(page);
    await basePage.goto('/progressbar');

    const startButton = await basePage.selectElement('#startButton');

    const stopButton = await basePage.selectElement('#stopButton');

    const result = await basePage.selectElement('#result');

    await startButton.click();

    await page.innerText("#progressBar[aria-valuenow='75']");

    await stopButton.click();

    console.log("RESULTS -> ", await result.innerText());// For debugging

    expect(await result.innerText()).toContain("Result: 0")

})


