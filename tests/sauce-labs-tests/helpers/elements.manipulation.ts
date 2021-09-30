import {ElementHandle, Page} from "@playwright/test";


export async function getElement(page: Page, selector: string): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    return await page.$(selector);

}

export async function typeInput(page: Page, selector: string, text: string): Promise<void> {
    const element:  ElementHandle<Node> | null = await getElement(page, selector)
    await element.fill(text);
}

export async function getInputValue(page: Page, element: ElementHandle): Promise<string> {
    return await element.inputValue();
}