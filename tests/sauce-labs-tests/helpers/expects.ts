import {ElementHandle, expect, Page} from "@playwright/test";
import * as elementManipulation from "./elements.manipulation";


export async function checkInnerText(page: Page, selector: string, expected: string): Promise<void> {
    const element: ElementHandle = await elementManipulation.getElementHandle(page, selector);
    expect(await element.innerText()).toEqual(expected);
}

export async function checkElementEditable(page: Page, selector: string): Promise<boolean> {
    const element: ElementHandle = await elementManipulation.getElementHandle(page, selector);
    return await expect(element.isEditable()).toBeTruthy();
}

export async function checkButtonIsEnabled(page: Page, selector: string): Promise<boolean> {
    const element: ElementHandle = await elementManipulation.getElementHandle(page, selector);
    return await expect(element.isEnabled()).toBeTruthy();
}

export async function compareWithScreenshot(page: Page, pathToScreenshot: string, nameSnapshot: string) {
    expect(await page.screenshot({path: pathToScreenshot})).toMatchSnapshot(nameSnapshot);

}

export async function checkVisible(page: Page, selector: string): Promise<boolean> {
    const element: ElementHandle = await elementManipulation.getElementHandle(page, selector);
    return expect(await element.isVisible()).toBeTruthy();

}
