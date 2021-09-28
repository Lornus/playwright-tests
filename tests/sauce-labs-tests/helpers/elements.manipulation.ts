import {ElementHandle, Page} from "@playwright/test";


export async function getElement(page: Page, selector: string): Promise<ElementHandle> {
    return await page.$(selector);

}

export async function typeInput(page, selector: string, text: string) {
    const element: ElementHandle = await page.$(selector);
    await element.fill(text);
}

export async function getInputValue(page:Page, element: ElementHandle): Promise<string> {
    return await element.inputValue();
}