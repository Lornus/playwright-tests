import {ElementHandle, Page} from "@playwright/test";


export async function getElementHandle(page: Page, selector: string): Promise<ElementHandle<SVGElement | HTMLElement> | null> {
    const locator = await page.$(selector);
    return locator;

}

export async function getElementArrayHandle(page: Page, selector: string): Promise<ElementHandle<SVGElement | HTMLElement>[]> {
    const array = await page.$$(selector);
    return array;
}

export async function typeInput(page: Page, selector: string, text: string): Promise<void> {
    const element: ElementHandle<SVGElement | HTMLElement> | null = await getElementHandle(page, selector)
    await element.fill(text);
}

export async function getInputValue(page: Page, element: ElementHandle): Promise<void> {
    await element.inputValue();
}

export async function setLocator(page: Page, selector: string) {
    return page.locator(selector);
}

export async function elementClick(page: Page, selector: string) {
    const element: ElementHandle<Node> | null | void = await getElementHandle(page, selector)
    await element.click();
}
